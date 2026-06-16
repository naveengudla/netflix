import Header from "./Header";
import { BACKGROUND_IMG } from "../utils/constants";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div
      className="w-full min-h-screen bg-black flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
    >
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center">
        <form className="p-10 flex flex-col bg-black/80 w-full max-w-[450px] text-white rounded-md shadow-lg gap-4">
          <h1 className="text-3xl font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 bg-zinc-700/60 rounded border border-zinc-600 focus:outline-none focus:border-white"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 bg-zinc-700/60 rounded border border-zinc-600 focus:outline-none focus:border-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 bg-zinc-700/60 rounded border border-zinc-600 focus:outline-none focus:border-white"
          />

          <button
            type="submit"
            className="w-full p-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded transition"
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
