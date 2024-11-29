import { Tokenizer } from "./tokenizer";

const tokenzier = new Tokenizer()
const plain_markdown = "_Hello*"
const result = tokenzier.token_as_array(plain_markdown)

console.log(result)
