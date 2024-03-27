#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter Your Pin Code",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["Withdraw", "Check Balance", "FastCash"],
    },
  ]);

  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount < myBalance) {
      (myBalance -= amountAns.amount),
        console.log(`Your remaining balance is: ${myBalance}`);
    } else if (amountAns.amount > myBalance) {
      console.log(
        `You are unable to process Transaction \nYour current balance is: ${myBalance}`
      );
    }
  } else if (operationAns.operation === "FastCash") {
    let cashAmount = await inquirer.prompt([
      {
        name: "cash",
        type: "rawlist",
        message: "Choose your amount",
        choices: ["2000", "5000", "7000"],
      },
    ]);
    myBalance -= cashAmount.cash;
    console.log(`Your remaining balance is: ${myBalance}`);
  } else if (operationAns.operation === "Check Balance") {
    console.log(`Your remaining balance is: ${myBalance}`);
  }
} else {
  console.log("Incorrect pin code");
}
