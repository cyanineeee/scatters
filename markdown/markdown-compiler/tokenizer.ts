import { SimpleScanner } from "./scanner/simpleScanner";
import { TextScanner } from "./scanner/textScanner";
import { Token } from "./token/token";

export class Tokenizer {
    identifier = new SimpleScanner()
    text = new TextScanner()

    /** 
     * 输入一个plain_markdown
     * 
     * 输出一个由Token对象组成的列表
    */
    token_as_array(plain_markdown: string): Token[]{
        //递归结束条件
        if(plain_markdown === "" || plain_markdown === null || plain_markdown === undefined){
            return []
        }
        const token = this.scan_one_token(plain_markdown)
        return [token].concat(this.token_as_array(plain_markdown.slice(token.length)))

    }

    /** 
     * 输入一个plain_markdown
     * 
     * 输出一个Token对象
    */
    scan_one_token(plain_markdown: string): Token{
        return this.identifier.scan(plain_markdown)
            ? this.identifier.scan(plain_markdown)
            : this.text.scan(plain_markdown)
    }
}