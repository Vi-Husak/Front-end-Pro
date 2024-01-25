const getPhoneNumbers = (users, condition) => {
  if (!Array.isArray(users)) {
    console.error("Invalid parameters for getPhoneNumbers function");
    return;
  }

  if (typeof condition !== "function")
    return users.reduce((usersPhones, user) => {
      if ("phone" in user) {
        return [...usersPhones, user.phone];
      }
      return usersPhones;
    }, []);

  return users.reduce((usersPhones, user) => {
    if ("phone" in user && condition(user)) {
      return [...usersPhones, user.phone];
    }

    return usersPhones;
  }, []);
};

export default getPhoneNumbers;
