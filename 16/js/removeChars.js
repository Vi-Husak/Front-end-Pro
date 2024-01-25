const removeChars = (str, removeChars) => {
  if (
    typeof str !== "string" ||
    (!Array.isArray(removeChars) && typeof removeChars !== "string")
  ) {
    console.error("Invalid parametrs for removeChars function");
    return;
  }

  if (typeof removeChars === "string") {
    return str
      .split("")
      .reduce(
        (res, e) => (removeChars.split("").includes(e) ? res : `${e}${res}`),
        ""
      );
  }

  return str
    .split("")
    .reduce((res, e) => (removeChars.includes(e) ? res : `${e}${res}`), "");
};

export default removeChars;
