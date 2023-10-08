#!usr/bin/env
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimations from "chalk-animation";

const sleep = () => {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    })
}

async function welcome() {
    let rainbowTitle = chalkAnimations.rainbow('Let\'s start calculating');
    await sleep();
    rainbowTitle.stop();
    console.log(`         _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}

async function askQuestion() {
    do {
        await welcome();

        await inquirer
            .prompt([
                {
                    type: "list",
                    name: "operator",
                    message: "What do you want to do?",
                    choices: [
                        "Addition",
                        "Subtraction",
                        "Multiplication",
                        "Modulus",
                        "Division",
                        "Power",
                        "Cube",
                        "Square Root"
                    ]
                },
                {
                    type: "number",
                    name: "num1",
                    message: "Enter the number",
                },
                {
                    type: "number",
                    name: "num2",
                    message: "Enter the second number",
                    when: function (answers) {
                        return (
                            answers.operator !== "Cube" &&
                            answers.operator !== "Power" &&
                            answers.operator !== "Square Root"
                        );
                    }
                }
            ])
            .then((answers) => {
                if(answers.operator == "Addition")(
    console.log(`${answers.num1} + ${answers.num2} = ${chalk.green(answers.num1 + answers.num2)}`)
)
else if(answers.operator == "Subtraction")(
    console.log(`${answers.num1} - ${answers.num2} = ${chalk.green(answers.num1 - answers.num2)}`)
)

else if(answers.operator == "Multiplication")(
    console.log(`${answers.num1} * ${answers.num2} = ${chalk.green(answers.num1 * answers.num2)}`)
)

else if(answers.operator == "Division")(
    console.log(`${answers.num1} / ${answers.num2} = ${chalk.green(answers.num1 / answers.num2)}`)
)

else if(answers.operator == "Modulus")(
    console.log(`${answers.num1} % ${answers.num2} = ${chalk.green(answers.num1 % answers.num2)}`)
)

else if (answers.operator == "Power") {
    console.log(`${answers.num1} ^ ${answers.num2} = ${chalk.green(Math.pow(answers.num1, answers.num2))}`);
}
else if (answers.operator == "Cube") {
    console.log(`Cube of ${answers.num1} = ${chalk.green(Math.pow(answers.num1, 3))}`);
}
else if (answers.operator == "Square Root") {
    console.log(`Square Root of ${answers.num1} = ${chalk.green(Math.sqrt(answers.num1))}`);
}
            });

        var again = await inquirer.prompt([
            {
                type: "input",
                name: "startAgain",
                message: "Do you want to start again? Yes(y) or No"
            }
        ]);
    } while (
        again.startAgain.toLowerCase() == "y" ||
        again.startAgain.toLowerCase() == "yes"
    );
}

askQuestion();
