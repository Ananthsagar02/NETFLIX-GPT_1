export const checkValiDate = (email, password) => {
  // Accepts at least two words, each starting with an uppercase or accented letter
  //const isNameValid = /^([A-ZÀ-ÿ][-,a-z. ']+)(\s+[A-ZÀ-ÿa-z][-,a-z. ']+)+$/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if(!isNameValid) return "Invalid name format";
  if (!email) return "Please enter email";
  if (!isEmailValid) return "Invalid email format";
  if (!isPasswordValid) return "Password must be at least 8 characters long";

  return null; // No errors
};
