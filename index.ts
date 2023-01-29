#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';


const time = await inquirer.prompt(
{
    type: "number",
    name: "MM",
    message:"Please enter minutes"
})

const {MM} = time;
if(MM && MM > 0) {
    let date = new Date();
    date.setMinutes(MM);
    date.setSeconds(0);
    let timer = setInterval(() => {
        date.setSeconds(date.getSeconds() - 1);
        console.log(chalk.green(`${date.getMinutes()}m ${date.getSeconds()}s`));
        if(date.getMinutes() === 0 && date.getSeconds() === 0) {
            console.log(chalk.red("################ STOP ################")); 
            clearInterval(timer);
        }
    },1000)
}


