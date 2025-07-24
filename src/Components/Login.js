import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignForm = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="login absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="login Logo"
        />
      </div>

      <div>
        <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

           {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />}
          
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
         
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full  bg-gray-700"
          />
          <button className="p-2 my-6 bg-red-700 w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignForm}>
            {isSignInForm
              ? "New to Netflix? Sign In Now."
              : "Already registered? Sign Up"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
