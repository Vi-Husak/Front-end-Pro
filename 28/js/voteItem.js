import createNode from "./helpers/createNode.js";
import { addVote } from "./data.js";

const voteItem = ({ emoji, count }) => {
  const li = createNode("li", { classNames: "vote__item" });

  const voteVount = createNode("span", {
    textContent: count,
    classNames: "vote__emoji",
  });

  const emojiElement = createNode("span", {
    textContent: emoji,
    classNames: "vote__count",
  });
  emojiElement.addEventListener("click", () => {
    addVote(emoji);
    voteVount.textContent = count += 1;
  });

  li.appendChild(emojiElement);
  li.appendChild(voteVount);

  return li;
};

export default voteItem;
