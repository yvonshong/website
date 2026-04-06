import json
import urllib.request
import urllib.error
from bs4 import BeautifulSoup
import os
import google.generativeai as genai

# 从环境变量中获取 Gemini API Key
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

def llm_analyze_tags(name, url, current_tags):
    """
    调用大语言模型（LLM）访问网页或根据标题分析标签。
    这里提供了一个骨架，您需要填入您的 API Key 和实际调用逻辑。
    """
    # 1. 尝试获取网页标题和描述（可选辅助）
    page_title = ""
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req, timeout=5).read()
        soup = BeautifulSoup(html, 'html.parser')
        page_title = soup.title.string if soup.title else ""
    except Exception:
        pass

    # 2. 构造给 LLM 的 Prompt
    prompt = f"""
    请分析以下书签的标签是否正确，并补充合适的标签：
    名称: {name}
    URL: {url}
    网页标题(如有): {page_title}
    当前标签: {", ".join(current_tags)}
    
    请只返回一个 JSON 数组，包含判定后最终的所有正确标签（字符串），不要包含任何额外的文字、解释，或 markdown 代码块标记(` ```json `)。
    例如: ["标签1", "标签2", "标签3"]
    """
    
    if not GEMINI_API_KEY:
        print(f"⚠️ 待处理(未配置 GEMINI_API_KEY，返回原标签): [{name}]")
        return current_tags

    try:
        # 使用稳定且免费/低成本的模型
        model = genai.GenerativeModel('gemini-3-flash-preview')
        response = model.generate_content(prompt)
        text_content = response.text.strip()
        
        # 移除可能存在的 Markdown 代码块标记
        if text_content.startswith("```json"):
            text_content = text_content[7:].strip()
        elif text_content.startswith("```"):
            text_content = text_content[3:].strip()
            
        if text_content.endswith("```"):
            text_content = text_content[:-3].strip()
            
        result_tags = json.loads(text_content)
        print(f"✅ 成功([{name}]) -> {result_tags}")
        return result_tags
    except Exception as e:
        print(f"❌ 失败([{name}]) -> 返回原标签. 错误信息: {e}")
        return current_tags


def parse_markdown_no_regex(md_content):
    """
    不使用正则，通过解析缩进和特定前缀来提取数据。
    """
    items = []
    current_item = None
    
    lines = md_content.split('\n')
    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue
            
        # 匹配书签项: - [name](url)
        if line.startswith('- [') and '](' in line and line.endswith(')'):
            if current_item:
                items.append(current_item)
            
            name_part = stripped[2:stripped.index('](')]
            url_part = stripped[stripped.index('](')+2:-1]
            
            current_item = {
                "name": name_part,
                "url": url_part,
                "tags": []
            }
        # 匹配标签: 分支缩进且以 - 开头
        elif line.startswith('    - ') or line.startswith('  - '):
            if current_item is not None:
                tag = stripped[2:].strip()
                current_item["tags"].append(tag)
                
    if current_item:
        items.append(current_item)
        
    return items

def main():
    input_filename = "bookmarks.md"
    output_filename = "bookmarks.js"

    if not os.path.exists(input_filename):
        print(f"未找到 {input_filename}")
        return

    with open(input_filename, 'r', encoding='utf-8') as f:
        md_content = f.read()

    print("解析 Markdown...")
    parsed_items = parse_markdown_no_regex(md_content)
    
    print(f"共发现 {len(parsed_items)} 个书签，开始通过 LLM 验证...")
    # 通过 LLM 验证和扩充标签
    # 若配置了 LLM，这步会逐个联网获取反馈
    final_data = []
    for idx, item in enumerate(parsed_items):
        new_tags = llm_analyze_tags(item['name'], item['url'], item['tags'])
        item['tags'] = new_tags
        final_data.append(item)
    
    # 转为 JS 脚本所需格式
    # 依据前端可能的需求，进行数据组装
    json_string = json.dumps(final_data, indent=2, ensure_ascii=False)
    js_content = f"const bookmarksData = {json_string};\n"

    with open(output_filename, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"✅ 成功生成 {output_filename}")

if __name__ == "__main__":
    main()