import {type Token} from './token/token'

export declare interface Tokenizer {
    plain_markdown: string;
    tokenize: (plain_markdown: string) => Token[]
}

export class MarkdownTokenizer implements Tokenizer{
    plain_markdown: string;

    tokenize( plain_markdown: string){
        const name = {
            typeName: "Asd",
            value:"asd"
        }

        return [name]
    }
}