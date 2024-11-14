import os
import json
import copy
# 指定目录
directory = r"C:\Users\hehma\quarkDownload\Documents\posts"


# 存储md文件元数据的字典
md_metadata = {}
md_file_information_list = []

# 遍历目录
for root, dirs, files in os.walk(directory):
    #降序排列
    files.sort(reverse=False)
    for file in files:
        if file.endswith('.md'):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as md_file:
                    # 读取文件内容
                    content = md_file.readlines()
                    content = content[1:8]
                    for line in content:
                        key, value = line.split(':', 1)
                        md_metadata[key] = "" if value is "" else value[1:].strip("\n'")
                    
                    md_file_information_list.append(copy.deepcopy(md_metadata))
                # print(md_file_information_list)
            except Exception as e:
                print(f"Error reading {file_path}: {e}")

# 将字典保存为JSON文件
with open('md_metadata.json', 'a+', encoding='utf-8') as json_file:
    json.dump(md_file_information_list, json_file, indent=4, ensure_ascii=False)

print("完成，md文件的元数据已保存到md_metadata.json文件中。")

# if __name__ == "__main__" :
#     directory = r"C:\Users\hehma\quarkDownload\Documents\posts\xiu-gai-ua-bi-kai-wen-juan-xing-huo-qi-ta-qiang-zhi-deng-lu-wei-xin-dou-yin-deng-ke-hu-duan.md"
#     with open(file_path, 'r', encoding='utf-8') as md_file:
#         # 读取文件内容
#         content = md_file.readlines()
#         content = content[1:8]
#         print(content)
#         for line in content:
#             key, value = line.split(':', 1)
#             md_metadata[key] = "" if value is "" else value[1:].strip("\n'")
#     print(md_metadata)