let minimist = require('minimist');
let fs = require('fs');
//let json = require('json');

let args = minimist(process.argv);


//creating object
let teams = [
    {
        team : "india",
        rank : 1,
        matches:[
            {
                vs : "England",
                result: "Win"
            },
            {
                vs : "Australia",
                result: "Win"
            }

        ]
    },
    {
        team : "England",
        rank : 2,
        matches:[
            {
                vs : "India",
                result: "Loss"
            },
            {
                vs : "Australia",
                result: "Win"
            }
        ]
    },
    {
        team : "Australia",
        rank : 2,
        matches:[
            {
                vs : "India",
                result: "Loss"
            },
            {
                vs : "England",
                result: "Loss"
            }
        ]
    }
];

let json  = JSON.stringify(teams); // JS objects pass to stringify convert into json 
fs.writeFileSync(args.dest,json,"utf-8");