import re
import json

def parse_markdown(md_content):
    """
    将 Markdown 文本解析成结构化的 Python 对象。
    """
    data = []
    current_category = None
    current_subsection = None

    # 正则表达式来匹配不同类型的行
    # 注意：为了简单起见，我们假设 ## 和 - 前面总是有 #。
    # 真实的解析器会更复杂。
    link_regex = re.compile(r"-\s*(.*?)\s*(?:\[(.*?)\]\((.*?)\))?\s*$")

    for line in md_content.splitlines():
        line = line.strip()
        if not line:
            continue

        if line.startswith("# "):
            category_title = line[2:].strip()
            current_category = {
                "category": category_title,
                "subsections": []
            }
            data.append(current_category)
            current_subsection = None # 重置子分类

        elif line.startswith("## "):
            if current_category is None:
                continue # 忽略没有父分类的子分类
            subsection_title = line[3:].strip()
            current_subsection = {
                "title": subsection_title,
                "items": []
            }
            current_category["subsections"].append(current_subsection)

        elif line.startswith("- "):
            if current_subsection is None:
                continue # 忽略没有父子分类的项目

            match = link_regex.match(line)
            if match:
                name_text = match.group(1).strip()
                link_text = match.group(2)
                url = match.group(3)

                # 确定最终的名称和链接
                final_name = name_text or link_text or ""
                final_url = url.strip() if url else None
                
                # 特殊处理 "文本 [链接文本](链接)" 格式
                if name_text and link_text:
                    final_name = f"{name_text} ({link_text.strip()})"

                current_subsection["items"].append({
                    "name": final_name,
                    "url": final_url
                })

    return data

def main():
    """
    主函数，读取md文件，生成js文件。
    """
    input_filename = "bookmarks.md"
    output_filename = "bookmarks.js"

    try:
        # 使用 utf-8 编码读取 markdown 文件
        with open(input_filename, 'r', encoding='utf-8') as f:
            content = f.read()

        # 解析内容
        parsed_data = parse_markdown(content)

        # 将 Python 对象转换为 JSON 字符串
        # ensure_ascii=False 保证中文字符不被转义
        json_string = json.dumps(parsed_data, indent=2, ensure_ascii=False)

        # 准备要写入 JS 文件的最终内容
        js_content = f"const bookmarksData = {json_string};"

        # 使用 utf-8 编码写入 javascript 文件
        with open(output_filename, 'w', encoding='utf-8') as f:
            f.write(js_content)
        
        print(f"✅ 成功生成 {output_filename}")

    except FileNotFoundError:
        print(f"❌ 错误: 输入文件 '{input_filename}' 未找到。")
    except Exception as e:
        print(f"❌ 生成过程中发生错误: {e}")


if __name__ == "__main__":
    main()