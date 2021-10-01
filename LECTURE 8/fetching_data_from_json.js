
let minimist = require('minimist');
let fs= require('fs');
let args = minimist(process.argv);


//parse krenge us file ko jo read ki h 
fs.readFile(args.source,"utf-8",function(err,json){
    if(err){
        console.log("File could not be read");
    }else{
        let file = JSON.parse(json);
        console.log(file[0].matches[1].vs);
    }
});