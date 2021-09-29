// In this lecture hamne ye sikha ki lack of call back kese kaam krta h 
// mtlb agr call back use nhi rhe to jo kaam phle harddisk ko krna h wo kregi uske bad jo kam cpu ko krna h wo krega
//callback me dono kaam sath ho skte 

//run using this command
//Node lackOfCallback.js --source=f1.txt --dest=f2.data --n=4000000

let minimist = require('minimist');
let clargs = minimist(process.argv);
let fs =require('fs');

//checking prime or not
function isPrime(n){
    let prime = true;
    for(let i=2;i*i<=n;i++){
        if(n%i==0){
            prime = false;
            break;
        }
    }
    return prime;
}

//phle harddisk extensive kaam krenge uske bad calculate krenge ki prime he ki nhi 


let t1 = Date.now();
console.log("Startign time of funtion : "+ t1%100000);
let arr = []
for(let i=1;i<=5000000;i++){
    arr.push(i);
}
arr = arr.join(',');
fs.writeFileSync(clargs.dest,arr,'utf-8');
let t2 = Date.now();
console.log("Finishing time of tast 1 : "+ t2%100000);
console.log("Total time : " + (t2-t1));



// ab cpu extensive kaam krenge 
let t3 = Date.now();
console.log("Startign time of funtion 2: "+ t3%100000);
let arry = []
for(let i=1;i<clargs.n;i++){
    if(isPrime(i)){
        arry.push(i);
    }
}

let t4 = Date.now();
console.log("Finishing time of tast 2 : "+ t4%100000);
console.log("Total time of tast 2: " + (t4-t3));


console.log("Total time : "+ (t4-t1));