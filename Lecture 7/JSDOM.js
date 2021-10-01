//JSDOM
//node JSDOM.js --source=sample.html

/*(Note that jsdom will parse the HTML you pass it just like a browser 
    does, including implied <html>, <head>, and <body> tags.) */

// agr page me multiple element he to query selector sir first buttom dega baki query selector all sare button dega 


let minimist = require('minimist');
let fs = require('fs');
let jsdom = require('jsdom');

let args = minimist(process.argv);

fs.readFile(args.source,'utf-8',function(err,html){

    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;

    let elements = document.querySelectorAll("button"); // agr class ko select krna hota to document.querySelectorAll(".b")--> it select
    //all elements having class b 
    console.log(elements[0].textContent) // first buttom me text content ky h


})