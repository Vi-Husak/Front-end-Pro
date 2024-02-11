/**
 * Creates a new HTML element with the specified tag, content, class, and attributes.
 * @param {string} tag - The HTML tag for the new element.
 * @param {Object} [options={}] - A dictionary of attributes to add to the new element.
 * @returns {HTMLElement} - The new HTML element.
 */
export default (tag, options = {}) => {
  if (typeof tag !== "string" || !tag.match(/^[a-z][a-z0-9]*$/i)) {
    throw new Error("Invalid tag");
  }

  if (!options.attrs instanceof Object) {
    throw new Error("Options must be an object");
  }

  const node = document.createElement(tag);

  if (options.classNames) {
    if (typeof options.classNames === "string") {
      const classes = options.classNames.split(" ");
      node.classList.add(...classes);
    } else if (Array.isArray(options.classNames)) {
      node.classList.add(...options.classNames);
    } else {
      console.error("Options class names must be a string or an array");
    }
  }

  if (options.attrs) {
    if (options.attrs instanceof Object) {
      Object.entries(options.attrs).forEach(([attr, value]) => {
        if (!value) return;
        node.setAttribute(attr, value);
      });
    } else {
      console.error("Options attributes must be an object");
    }
  }

  if (options.textContent !== undefined && options.textContent !== null) {
    const trimmedTextContent = options.textContent.toString().trim();
    if (trimmedTextContent !== "") {
      node.textContent = trimmedTextContent;
    }
  }

  return node;
};
