/* const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
} */

//export default getRandomInt;

export const getRandomInt = (min, max) => Math.round(Math.random() * (max - min)) + min;