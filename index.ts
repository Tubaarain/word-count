#! /usr/bin/env node

//  This is line is called a shebang, it tells tha Os to run it with node js

// import inquirer module, which is a commond line interface for Node.js

import inquirer from "inquirer" 

// Declare a constant answers and assing it to the result of inqurier.prompt function

const answers:{
 sentence: string
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your sentence to count the word:"

    },
])
const word = answers.sentence.trim().split(" ")

// print the array of word to the console 
console.log(word)

//  print the word count of the sentence to the console
console.log(`your sentence word count is ${word.length}`);


let a = answers.sentence
let b = a.replace(/ /g,"")
// console.log(b)

let c =b.length
console.log(`your letters count is ${c}`)
