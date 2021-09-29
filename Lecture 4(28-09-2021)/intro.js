// In this lecture hamne ye sikha ki lack of call back kese kaam krta h 
// mtlb agr call back use nhi rhe to jo kaam phle harddisk ko krna h wo kregi uske bad jo kam cpu ko krna h wo krega
//callback me dono kaam sath ho skte 
let minimist = require('minimist');
let clargs = minimist(process.argv);
let fs =require('fs');
let text = clargs.source;

//Now reading the  file
let rfile = fs.readFileSync(clargs.source,'utf-8');

//writing into fie
fs.writeFileSync(clargs.dest,rfile,"utf-8");
console.log(rfile);


//node intro.js --source=f1.txt --dest=f2.txt

