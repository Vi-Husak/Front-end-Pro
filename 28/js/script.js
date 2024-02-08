/*
Створити програму для відображення результатів голосування. З наступними умовами:

    Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
    Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
    При натисканні на смайл - під ним змінюється значення лічильника.
    Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.
*/
import createNode from "./helpers/createNode.js";

const voteOptions = [
  { emoji: "🥳", count: 0 },
  { emoji: "😍", count: 0 },
  { emoji: "🥰", count: 0 },
  { emoji: "😄", count: 0 },
  { emoji: "🤬", count: 0 },
];

const root = document.querySelector("#root");
const list = createNode("div");

for (const vote of voteOptions) {
  const emoji = vote.emoji;
  let count = vote.count;

  const li = createNode("li");

  const voteVount = createNode("span", { textContent: count });

  const emojiElement = createNode("span", { textContent: emoji });
  emojiElement.addEventListener("click", () => {
    count += 1;
    voteVount.textContent = count;
  });

  li.appendChild(emojiElement);
  li.appendChild(voteVount);

  list.appendChild(li);
}

root.appendChild(list);
