export const getRandomInt = (min, max) => Math.round(Math.random() * (max - min)) + min;

export const indexSelection = (arr) => arr.indexOf(arr[getRandomInt(0, arr.length - 1)]);
