const displayArr = (title = "", array = []) => {
  if (typeof title !== "string" || !Array.isArray(array)) {
    console.error("Invalid parameters for displayArr function");
    return;
  }

  const header = document.createElement("h3");
  header.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = `[ ${array.join(", ")} ]`;

  document.body.append(header, paragraph);
};

export default displayArr;
