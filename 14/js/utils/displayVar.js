const displayArr = (title = "", variable) => {
  if (typeof title !== "string") {
    console.error("Invalid parameters for displayVar function");
    return;
  }

  const header = document.createElement("h3");
  header.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = variable;

  document.body.append(header, paragraph);
};

export default displayArr;
