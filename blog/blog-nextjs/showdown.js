// var showdown  = require('showdown'),
//     converter = new showdown.Converter(),
//     text      = '# hello, markdown!',
//     html      = converter.makeHtml(text);
// console.log(html)


import {Showdown} from "showdown"

const converter = new showdown.Converter();
console.log(converter.makeHtml('# hello, markdown!'))