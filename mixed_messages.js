const randomMessages = require('./messagesStored.json');

const generateRandomNumber = arr => {
    return Math.floor(Math.random() * arr.length);
}

const randomPerson = generateRandomNumber(randomMessages.person);
const randomPrediction = generateRandomNumber(randomMessages.prediction);
const randomTime = generateRandomNumber(randomMessages.when);

console.log(randomMessages.person[randomPerson]);
console.log(randomMessages.prediction[randomPrediction]);
console.log(randomMessages.when[randomTime]);