import { authRef } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const loginEmailPassword = async () => {
  const email = "email"
  const password = "password"

  try {
    const userCredentials = await signInWithEmailAndPassword(authRef, email, password)
    console.log(userCredentials)
  }
  catch(error) {
    console.log(error)
  }
}

module.exports = [loginEmailPassword]