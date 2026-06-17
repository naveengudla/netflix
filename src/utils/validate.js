export const validateSignInForm = (email, password, fullName, isSignInForm) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  const userNameregex = /^[a-zA-Z]{2,}(?:\s[a-zA-Z]{1,})+$/

  if(!email && !password && !fullName) return "All fields are required";
  if(!isSignInForm && !fullName) return "Full name is required";
  if(!email) return "Email is required";
  if(!password) return "Password is required";
  if(!emailRegex.test(email)) return "Invalid email address";
  if(!passwordRegex.test(password)) return "Invalid password";
  if(!userNameregex.test(fullName) && !isSignInForm) return "Invalid username";

  return null;
}