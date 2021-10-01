let minimist = require('minimist');
let fs = require('fs');

let args = minimist(process.argv);

console.log(args.dest);
//node writingJSON.js --dest=teams.json


//s1 is an object name and age properties 
let s1 = {
    name : "Sumeet",
    age:30
};
let s2 = {
    name : "Himanshu",
    age:22
};

let stud_obj = [s1,s2]
let json = JSON.stringify(stud_obj); //javascript object when stringify becomes JSON

fs.writeFileSync(args.dest,json,"utf-8");