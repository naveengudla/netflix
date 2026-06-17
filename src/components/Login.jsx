import Header from "./Header";
import { BACKGROUND_IMG } from "../utils/constants";
import { useState, useRef } from "react";
import { validateSignInForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const onLoginClick = (e) => {
    e.preventDefault();
    const error = validateSignInForm(
      email.current.value,
      password.current.value,
      isSignInForm ? null : fullName.current.value,
      isSignInForm
    );
    if (error) setErrorMsg(error);

    if (error) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: fullName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                setUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          console.log(error);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          console.log(error);
        });
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-black flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
    >
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center">
        <form
          className="p-10 flex flex-col bg-black/80 w-full max-w-[450px] text-white rounded-md shadow-lg gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-3xl font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="w-full p-4 bg-zinc-700/60 rounded border border-zinc-600 focus:outline-none focus:border-white"
            />
          )}

          <input
            type="email"
            ref={email}
            placeholder="Email Address"
            className="w-full p-4 bg-zinc-700/60 rounded border border-zinc-600 focus:outline-none focus:border-white"
          />

          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="w-full p-4 bg-zinc-700/60 rounded border border-zinc-600 focus:outline-none focus:border-white"
          />

          <p className="text-red-500">{errorMsg}</p>

          <button
            type="submit"
            className="w-full p-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded transition cursor-pointer"
            onClick={onLoginClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-zinc-400 cursor-pointer" onClick={toggleSignIn}>
            {isSignInForm
              ? "New to Netflix? Sign Up"
              : "Already have an account? Sign In"}{" "}
            now.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
