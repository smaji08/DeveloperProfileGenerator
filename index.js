const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const fw = util.promisify(fs.writeFile);
const newhtm = require ("./newhtml.js");
const axios = require("axios");

function promptUser(){
  return new Promise(resolve => {
      resolve(inquirer.prompt([
        // {
        //     type: "input",
        //     name: "username",
        //     message: "What is your GitHub username?",
        
        // },
        {
            type: "list",
            name: "color",
            message: "fav color",
            choices: ["green", "blue", "pink", "red"]
            
        }
      ]));
   });
}
// function writeToFile(fileName, data) {
//     return fw("index.html",data,"utf8");
 
// }

// function callaxios(){
//     const queryURL = "https://api.github.com/users/smaji08";
//     axios
//         .get(queryURL).then(response => console.log(`from here ${response.data.name}`));
// }

async function init(){
        try{
            const answers = await promptUser();
            console.log(answers);
            // const axios1 = await callaxios();
            const axios1 = await axios("https://api.github.com/users/smaji08");
            console.log(axios1.data.name);
            const axios2 = await axios("https://api.github.com/users/smaji08/starred");
            // console.log(axios2.data);
            const html =  await newhtm.generateHTML(answers,axios1,axios2);
            
            await fw("index.html",html);
            
    
        }
        catch{
            console.log("error");
        }
    }
        
init();

// promptUser()
//     .then(function(answers){
//         const html = newhtm.generateHTML(answers);
//         return fw("index.html", html);
//     })
//     .then(function(){
//         console.log("successful");
//     })
//     .catch(function(err){
//         console.log(err);
//     });