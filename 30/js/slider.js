import createNode from "./helpers/createNode.js";

const images = [
  { src: "images/1.jpg" },
  { src: "images/2.jpg" },
  { src: "images/3.jpg" },
  { src: "images/4.jpg" },
  { src: "images/5.jpg" },
  { src: "images/6.jpg" },
  { src: "images/7.jpg" },
  { src: "images/8.jpg" },
  { src: "images/9.jpg" },
];

const slider = () => {
  const sliderContainer = createNode("div", { classNames: "slider" });
  const imagesContainer = createNode("ul", { classNames: "slider__list" });

  const btnPrev = createNode("button", {
    classNames: "slider__btn slider__btn-prev",
  });
  const btnNext = createNode("button", {
    classNames: "slider__btn slider__btn-next",
  });

  images.forEach(({ src }, index) => {
    const li = createNode("li", { classNames: "slider__item" });

    const image = createNode("img", {
      attrs: { src: src },
      classNames: "slider__image",
    });

    li.style.transform = `translateX(${index * 100}%)`;

    li.appendChild(image);

    imagesContainer.appendChild(li);
  });

  sliderContainer.append(imagesContainer, btnNext);

  let index = 0;

  const updateSlider = (direction) => {
    const imagesList = imagesContainer.querySelectorAll("li");

    index += direction;

    imagesList[index].style.transform = `translateX(${0}%)`;

    if (imagesList[index - 1])
      imagesList[index - 1].style.transform = `translateX(-${100}%)`;
    if (imagesList[index + 1])
      imagesList[index + 1].style.transform = `translateX(${100}%)`;
  };

  btnPrev.addEventListener("click", () => {
    if (index > 0) {
      updateSlider(-1);
    }

    if (index === images.length - 2) {
      sliderContainer.appendChild(btnNext);
    } else if (index === 0) {
      btnPrev.remove();
    }
  });

  btnNext.addEventListener("click", () => {
    if (index < images.length - 1) {
      updateSlider(1);
    }

    if (index === 1) {
      sliderContainer.appendChild(btnPrev);
    } else if (index === images.length - 1) {
      btnNext.remove();
    }
  });

  return sliderContainer;
};

export default slider;
