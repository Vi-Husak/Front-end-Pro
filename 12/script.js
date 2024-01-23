/* 
    Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.
*/

const generateKey = (length, characters) => {
  const keyArray = Array.from({ length }, () => {
    const randomItemPos = Math.floor(Math.random() * characters.length);
    return characters[randomItemPos];
  });

  return keyArray.join("");
};

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const key = generateKey(16, characters);
console.log(key);
