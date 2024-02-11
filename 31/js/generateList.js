const generateList = (array) => {
  if (!Array.isArray(array)) throw new Error(`${array} is not array`);

  const list = document.createElement("ul");

  for (const element of array) {
    const li = document.createElement("li");

    if (Array.isArray(element)) {
      li.appendChild(generateList(element));
    } else li.textContent = element;

    list.appendChild(li);
  }

  return list;
};

export default generateList;
