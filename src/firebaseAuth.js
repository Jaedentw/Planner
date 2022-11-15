import { authRef } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const loginEmailPassword = async () => {
  const email = "email"
  const password = "password"

  const userCredentials = await signInWithEmailAndPassword(authRef, email, password)

  return userCredentials
}

module.exports = [loginEmailPassword]