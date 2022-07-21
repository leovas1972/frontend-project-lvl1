export const getRandomInt = (min, max) => Math.round(Math.random() * (max - min)) + min;

export const getRandomIndex = (data) => getRandomInt(0, data.length - 1);
