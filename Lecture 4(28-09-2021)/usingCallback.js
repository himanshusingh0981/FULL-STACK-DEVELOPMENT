let minimist = require('minimist');
let clargs = minimist(process.argv);
let fs =require('fs');

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


