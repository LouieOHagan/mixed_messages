const randomMessages = require('./messagesStored.json');

const generateRandomNumber = arr => {
    return Math.floor(Math.random() * arr.length);
}

const randomPersonIndex = generateRandomNumber(randomMessages.person);
const randomPredictionIndex = generateRandomNumber(randomMessages.prediction);
const randomTimeIndex = generateRandomNumber(randomMessages.when);

const buildSentence = (personIndex, predictionIndex, timeIndex) => {
    let person = randomMessages.person[personIndex];
    let prediction = randomMessages.prediction[predictionIndex];
    let time = randomMessages.when[timeIndex];

    return `I predict that ${person} will ${prediction} ${time}.`;
}

console.log(buildSentence(randomPersonIndex, randomPredictionIndex, randomTimeIndex));