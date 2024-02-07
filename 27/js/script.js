/*
На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). 
Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо
*/
import createNode from "./helpers/createNode.js";
import isValidUrl from "./isValidUrl.js";
const container = document.querySelector("#root");

const form = createNode("form", { classNames: "form" });

const input = createNode("input", {
  attrs: { type: "text" },
  classNames: "input",
});

const btnGoToDefaultURL = createNode("button", {
  attrs: { type: "button" },
  textContent: "Go to Google webpage",
});

const btnGoToCustomURL = createNode("button", {
  attrs: { type: "button" },
  textContent: "Go to your URL",
});

form.appendChild(input);
form.appendChild(btnGoToDefaultURL);
form.appendChild(btnGoToCustomURL);

container.appendChild(form);

const goToGoogleURL = () => (window.location.href = "https://google.com/");

const goToCustomURL = () => {
  const url = input.value.trim();

  if (!url) {
    alert("You have not entered anything");
    return;
  }

  if (!isValidUrl(url)) {
    alert("It does't look like a link");
    return;
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    window.location.href = url;
  } else window.location.href = `https://${url}`;
};

btnGoToDefaultURL.addEventListener("click", goToGoogleURL);
btnGoToCustomURL.addEventListener("click", goToCustomURL);
