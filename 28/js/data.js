export const voteOptions = [
  { emoji: "🥳", count: 0 },
  { emoji: "😍", count: 0 },
  { emoji: "🥰", count: 0 },
  { emoji: "😄", count: 0 },
  { emoji: "🤬", count: 0 },
];

export const addVote = (emoji) => {
  const index = voteOptions.findIndex((vote) => vote.emoji === emoji);
  voteOptions[index].count += 1;
};
