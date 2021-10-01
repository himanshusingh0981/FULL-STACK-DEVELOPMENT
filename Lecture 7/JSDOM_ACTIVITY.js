//isme activity perform krenge jo download.html m pda h usse kuch nikalne ki kosish krenge

let minimist = require('minimist');
let fs = require('fs');
let jsdom = require('jsdom');
let args = minimist(process.argv);

fs.readFile(args.source,"utf-8",function(err,html){
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;

    let elements = document.querySelectorAll("div.match-info>div.description");
    for(let i=0;i<elements.length;i++){
        console.log(elements[i].textContent);
        console.log();
    }
})
//node JSDOM_ACTIVITY.js --source=download.html