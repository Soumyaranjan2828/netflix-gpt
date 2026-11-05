export const checkValidData = (email, password) => {
  const emailRegex = new RegExp(
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
  );

  const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
  );

  if (!emailRegex.test(email)) return "Email is not valid";
  if (!passwordRegex.test(password)) return "Password is not valid";

  return null;
};
