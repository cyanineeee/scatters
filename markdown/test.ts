import { MarkdownTokenizer } from "./markdown-compiler/tokenizer"

const main = new MarkdownTokenizer()
const result = main.tokenize("asdasd")

console.log(result)