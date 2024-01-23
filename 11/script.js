/* 
Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
*/

const removeElement = (array = [], item) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === item) {
      array.splice(i, 1);
      i -= 1;
    }
  }

  return array;
};

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
