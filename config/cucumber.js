const { format } = require("path");

module.exports ={
    default:{
        formatOptions: {
            snippetInterface: "async-await",
            
        },
        
        paths:["src/tests/features/"],
        deyRun: false,
        require:[
            "src/tests/steps/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule:[
            "ts-node/register"
        ],
        format: ["html:facebookSignup-report.html"]
    }  
}