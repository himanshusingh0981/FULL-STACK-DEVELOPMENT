// run using command 
// node with_call_back.js --source=f1.txt --n=50000
// f1 is a large file of 400mbs

let minimist = require("minimist");
let fs = require('fs');
let args = minimist(process.argv);

//task 1 is reading the file 
//task 2 is finding the prime number from 1 to 5000000

function isPrime(n){
    prime = true;
    for(let i=2;i*i<=n;i++){
        if(n%i==0){
            prime = false;
        }
    }
    return true;
}


//Starting task 1 
let t1 = Date.now();
console.log("Starting time of task 1: "+ t1%10000);

fs.readFile(args.source, function(data){
    let t2 = Date.now();
    console.log("Finishing time of task 1 : "+ t2%10000);
    console.log("Total time of task 1: "+ (t2-t1)%1000);
})


//starting task t2
//calculating prime
let t3 = Date.now();
let arr2 = []
console.log("Startig time of task 2: "+ t3%10000);
for(let i = 2;i<=args.n; i++){
    if(isPrime(i)){
        arr2.push(i);
    }
}
let t4 = Date.now();


console.log("Finishing time of task 2: "+t4%10000);
console.log("Total time of task 2: "+(t4-t3)%10000);
