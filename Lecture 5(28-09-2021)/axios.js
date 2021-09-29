//introduction to axios
//It is a library to download data from web 

let minimist = require("minimist");
let fs = require('fs');
let args = minimist(process.argv);

//requiring axios
let axios = require('axios');

let download_promis = axios.get(args.url); //isne download nhi kri karne ka promise kiya
download_promis.then(function(response){
    let html = response.data;
    fs.writeFileSync(args.dest,html,'utf-8');
}).catch(function(error){
    console.log("Arg download nhi kr paya kisi wajah se to ye error control kr lega catch")
})
