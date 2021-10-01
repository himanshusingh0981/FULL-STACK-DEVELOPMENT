// downlaoding the data from web using axios library 

let minimist = require('minimist');
let fs =    require('fs');

let args = minimist(process.argv);
let axios = require('axios');


console.log(args.url);
let download_promise  = axios.get(args.url);
download_promise.then(function(response){
    let html = response.data;
    fs.writeFileSync(args.dest,html,'utf-8');
}).catch(function(err){
    console.log("error");
})

// node download_from_web.js --url=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results --dest=download.html