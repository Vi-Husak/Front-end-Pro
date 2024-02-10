import createNode from "./helpers/createNode.js";
import { voteOptions } from "./data.js";
import voteItem from "./voteItem.js";

const list = createNode("ul", { classNames: "vote__list" });

for (const vote of voteOptions) {
  const li = voteItem(vote);

  list.appendChild(li);
}

export default list;
