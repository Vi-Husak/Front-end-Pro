import createNode from "./helpers/createNode.js";
import removeAllChilds from "./helpers/removeAllChilds.js";
import { products } from "./data.js";

const main = createNode("main", { classNames: "shop" });

const categoriesSection = createNode("section", { classNames: "categories" });
const categoriesTitle = createNode("h2", {
  classNames: "categories__title",
  textContent: "Категорії:",
});
const categoriesList = createNode("ul", { classNames: "categories__list" });

const productsSection = createNode("section", { classNames: "products" });
const productsTitle = createNode("h2", { classNames: "products__title" });
const productsList = createNode("ul", { classNames: "products__list" });

const detailSection = createNode("section", { classNames: "details" });

Object.entries(products).forEach(([category, productList]) => {
  const formattedCategoryName =
    category.charAt().toUpperCase() + category.slice(1).toLowerCase();

  const categoryItem = createNode("li", {
    classNames: "categories__item",
    textContent: formattedCategoryName,
  });

  categoryItem.addEventListener("click", () => {
    removeAllChilds(productsList);
    removeAllChilds(detailSection);

    productsTitle.textContent = `Товари з категорії ${category}`;

    productList.forEach(({ name, description, price }) => {
      const productItem = createNode("li", { classNames: "products__item" });

      const productName = createNode("h3", {
        classNames: "products__title",
        textContent: `${name}`,
      });

      productItem.addEventListener("click", () => {
        removeAllChilds(detailSection);

        const nameNode = createNode("h2", { textContent: name });
        const descriptionNode = createNode("p", { textContent: description });
        const priceNode = createNode("p", { textContent: `Ціна: ${price}` });

        detailSection.append(nameNode, descriptionNode, priceNode);
      });

      productItem.appendChild(productName);

      productsList.appendChild(productItem);
    });
  });

  categoriesList.appendChild(categoryItem);
});

categoriesSection.appendChild(categoriesTitle);
categoriesSection.appendChild(categoriesList);

productsSection.appendChild(productsTitle);
productsSection.appendChild(productsList);

main.appendChild(categoriesSection);
main.appendChild(productsSection);
main.appendChild(detailSection);

export default main;
