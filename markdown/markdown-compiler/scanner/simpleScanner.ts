import { Token } from "../token/token"

export class SimpleScanner {
    matchChar = {
        "_": "UNDERSCORE",
        "*": "STAR",
        "\n": "NEWLINE",
        "EOF":"EOF"
    }

    scan(plain_token: string):Token {
        return this.matchChar.hasOwnProperty(plain_token[0]) 
                ? new Token(this.matchChar[plain_token[0]],null,1) 
                : null
    }

}