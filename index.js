const inquirer = require("inquirer");
const axios = require("axios");
const htmltopdf = require("puppeteer");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const newhtml = require ("./newhtml.js");

function promptUser(){
  return new Promise(resolve => {
      resolve(inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Your GitHub username please...",
        
        },
        {
            type: "list",
            name: "color",
            message: "Choose your favorite color please..",
            choices: ["green", "blue", "pink", "red"]
            
        }
      ]));
   });
}

async function init(){
    try{
        const answers = await promptUser();
        const username = answers.username;
        const axiosBasic = await axios(`https://api.github.com/users/${username}`);
        const axiosStar = await axios(`https://api.github.com/users/${username}/starred`);
        const html =  newhtml.generateHTML(answers,axiosBasic,axiosStar);
        await writeFile("index.html",html);
        await writetopdf();
    }
    catch(error){
        console.log(error);
    }
}

async function writetopdf(){
    const browser = await htmltopdf.launch({headless: true, slowMo: 150});
    const page = await browser.newPage();
    const readHtml = fs.readFileSync("index.html","utf8");
    await page.setContent(readHtml);
    await page.pdf({
        path: "bio.pdf",
    });
    console.log("PDF created");
    await browser.close();
}

init();