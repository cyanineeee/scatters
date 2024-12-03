import { Token } from "./token/token";

export const token_to_str_list = (tokens: Token[]):string[] | void =>{
    return tokens.map((token: Token) => {
        if(!token){return}
        console.log(token.to_String())
        return token.to_String()
    }).filter(item => item!=undefined )
} 