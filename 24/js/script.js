/*
    Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає
*/

const input = document.querySelector("#text-input");
const container = document.querySelector(".container");

const ghostDiv = document.createElement("div");
ghostDiv.classList.add("ghost");

input.addEventListener("focusin", () => {
  container.append(ghostDiv);
});

input.addEventListener("focusout", () => {
  ghostDiv.remove();
});
