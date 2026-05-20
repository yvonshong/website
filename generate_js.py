import json
import re

LINK_RE = re.compile(r"^-\s*\[(.+?)\]\((.+?)\)\s*$")


def parse_tags_line(line: str) -> list[str]:
    """Parse '  - tag1, tag2, tag3' into a list of tags."""
    stripped = line.strip()
    if not stripped.startswith("- "):
        return []
    raw = stripped[2:].strip()
    if not raw:
        return []
    return [tag.strip() for tag in raw.split(",") if tag.strip()]


def parse_markdown(md_content: str) -> list[dict]:
    """
    Parse flat bookmarks.md:
      - [name](url)
        - tag1, tag2, tag3
    """
    items = []
    current_item = None

    for line in md_content.splitlines():
        link_match = LINK_RE.match(line.strip())
        if link_match:
            if current_item:
                items.append(current_item)
            current_item = {
                "name": link_match.group(1).strip(),
                "url": link_match.group(2).strip(),
                "tags": [],
            }
            continue

        if current_item is None:
            continue

        tags = parse_tags_line(line)
        if tags:
            current_item["tags"].extend(tags)

    if current_item:
        items.append(current_item)

    return items


def main():
    input_filename = "bookmarks.md"
    output_filename = "bookmarks.js"

    try:
        with open(input_filename, "r", encoding="utf-8") as f:
            content = f.read()

        parsed_data = parse_markdown(content)
        if not parsed_data:
            raise ValueError("未解析到任何书签，请检查 bookmarks.md 格式")

        json_string = json.dumps(parsed_data, indent=2, ensure_ascii=False)
        js_content = f"const bookmarksData = {json_string};\n"

        with open(output_filename, "w", encoding="utf-8") as f:
            f.write(js_content)

        print(f"✅ 成功生成 {output_filename}（{len(parsed_data)} 条书签）")

    except FileNotFoundError:
        print(f"❌ 错误: 输入文件 '{input_filename}' 未找到。")
        raise SystemExit(1)
    except Exception as e:
        print(f"❌ 生成过程中发生错误: {e}")
        raise SystemExit(1)


if __name__ == "__main__":
    main()
