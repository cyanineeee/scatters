import { Token } from '../token/token'
import { SimpleScanner } from './simpleScanner'

export class TextScanner{
    matchChar = "TEXT"

    scan(plain_token: string):Token{
        var text = ''
        for (var i of plain_token){
            const sps = new SimpleScanner()
            if(sps.scan(i)){
                return new Token(this.matchChar,text,text.length)
            }else{
                text += i
            }
        }
    }
}