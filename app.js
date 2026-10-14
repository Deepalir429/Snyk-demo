const password = "admin123";

function login(user, pass) {
  if (pass === password) {
    return true;
  }
  return false;
}
