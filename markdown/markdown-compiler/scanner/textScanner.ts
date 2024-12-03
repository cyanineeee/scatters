import { Token } from '../token/token'
import { SimpleScanner } from './simpleScanner'

export class TextScanner{
    matchChar = "TEXT"
    identifier = new SimpleScanner()
    
    //输入 一个plain_markdown
    //输出一个text的token
    scan(plain_token: string):Token{
        var text = ''
        for (var i = 0; i < plain_token.length; i++){
            // 两种结束情况： 1. 字符结束 2. 遇到标识符 => 正常结束循环
            if(this.identifier.scan(plain_token[i])){
                break
            }
            text += plain_token[i]
        }
        return new Token(this.matchChar,text,text.length)
    }
}