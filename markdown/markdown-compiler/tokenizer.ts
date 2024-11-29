import { SimpleScanner } from "./scanner/simpleScanner";
import { TextScanner } from "./scanner/textScanner";
import { Token } from "./token/token";

export class Tokenizer {
    sps = new SimpleScanner()
    ts = new TextScanner()

    token_as_array(plain_markdown: string): Token[]{

        var tokens: Token[] = []
        if(plain_markdown === "" || plain_markdown === null){
            return null
        }else{
            const token = this.scan_one_token(plain_markdown)
            tokens.concat(this.token_as_array(plain_markdown.slice(token.length)))
            return tokens
        }

    }

    scan_one_token(plain_markdown: string): Token{
        return this.sps.scan(plain_markdown) 
            ? this.sps.scan(plain_markdown) 
            : this.ts.scan(plain_markdown)
    }
}