export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!/\d/.test(values.password)) {
    errors.password = "Password must contain atleast 1 number";
  } else if (!/[A-Z]/g.test(values.password)) {
    errors.password = "Password must contain atleast 1 capital letter";
  } else if (/[!#$%&?]/g.test(values.password)) {
    errors.password = "Only @ is permitted as a special character";
  } 
  return errors;
}
