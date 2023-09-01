'use strict';

/** Coding Challenge - Polling App
 *
 * The poll has a question
 * an array of options from which people can choose
 * an an array with number of replies for each option
 *
 *
 * Tasks -
 * 1. create a method called 'registerNewAnswer' on the poll object, the method does 2 things:
 * 1.1 - display a prompt window for the user to input the number of the selected option.
 *
 * the prompt should look like this:
 * whats your favourite programming langugae?
 * 0- JavaScript
 * 1-Java
 * 2-Python
 * 3-Rust
 * 4-C++
 * (write option number)
 *
 * 1.2- based on input number, update the answers array e.g. if option is 3, increase value at position 3 of the array by 1,
 * also make sure to check the input is a number and that the number makes sense e.g. input number 52 dont make sense ya dig?
 *
 *2- call the method whenever the person clicks the answer poll button
 *
 * 3- create method 'displayResults' which displays the poll results. method takes string as an input (called 'type') which can be either 'string' or 'array'. if type is array simply display results as array
 *
 * 4- run displayresults and the end of each 'registerNewAnswer' method call
 */

    const poll = {
    question: `What is your favourite programming language?`,
    options: ['0: JavaScript', '1: Python', '2: Java', '3: Rust', '4: C++'],
    answers: new Array(5).fill(0),
    registerNewAnswer() {
        let answer = Number(prompt(
        `${this.question}\n${[this.options.join('\n')]} \n(Write option number)`
        ));
        console.log(answer);

        /* register answer */
        typeof answer === 'number' &&
        answer < this.answers.length
        && this.answers[answer]++;
        console.log(this.answers);

        this.displayResults('string')
    },
    /* we will display results, we will be looking at input of array */
    displayResults(type = 'array'){
        if(type === 'array'){
            console.log(this.answers);
            /* we want to read the options array as a string so we can read the contents in the console */
        } else if (type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
    };

/*  */


    document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));


/**
 * 1.1 - display a prompt window for the user to input the number of the selected option.
 */
