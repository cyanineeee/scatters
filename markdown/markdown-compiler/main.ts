import { Tokenizer } from "./tokenizer";
import {token_to_str_list} from "./token_to_str_list"

const tokenzier = new Tokenizer()

//测试scan_one_token方法
function testOneToken(){
    const plain_markdown_test_list = ["_","hello","*","\n","_mahe","\nasd","_(HEl((lo*","_Hello_ *tha)nks* \n ****"]
    for (var i of plain_markdown_test_list){
        console.log(tokenzier.scan_one_token(i))
    }
}

//测试token_as_array方法
function testTokenArray(plain_markdown?){

    const plain_markdown_test_list = ["_hello",
        "*\n_  **[hello]  _",
        "",
        null,
        undefined,
        "_mahe",
        "\nasd",
        `_(HEl((lo*","_Hello_ *tha)nks* \n ****`]
    //应该在调用的时候做try catch处理
    for (var i of plain_markdown){
        console.log(token_to_str_list(tokenzier.token_as_array(i)))
    }

}

testTokenArray()
