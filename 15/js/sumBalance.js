const sumBalance = (users, condition) => {
  if (!Array.isArray(users)) {
    console.error("Invalid parameters for sumBalance function");
    return;
  }

  if (typeof condition !== "function") {
    return users
      .reduce((sum, user) => {
        if ("balance" in user)
          return sum + parseFloat(user.balance?.replace(/[^0-9.-]+/g, ""));

        return sum;
      }, 0)
      .toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
  }

  return users
    .reduce((sum, user) => {
      if ("balance" in user && condition(user))
        return sum + parseFloat(user.balance?.replace(/[^0-9.-]+/g, ""));

      return sum;
    }, 0)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
};

export default sumBalance;
