import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errormessage, setErrormessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
    );
    if (message) return;
    //Signup
    if (!signInForm) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toogleSignInForm = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full h-screen">
        <img
          className="w-full h-full object-fit"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/29195c81-5ebb-453e-82e9-d3a50737dfb3/web/IN-en-20261026-TRIFECTA-perspective_ef561213-292c-4768-aef0-c1db800e385e_large.jpg"
        ></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleButtonClick();
        }}
        // onClick={(e) => e.preventDefault()}
        className="w-3/12 p-8 py-14 absolute translate-y-[250px] translate-x-[500px] flex flex-col gap-4 text-white bg-black/80 rounded-lg"
      >
        <h3 className="font-bold mb-2.5">
          {signInForm ? "Sign In" : "Sign Up"}
        </h3>
        {!signInForm && (
          <input
            type="text"
            placeholder="Enter Name"
            className="border-white mb-2.5 bg-gray-400 rounded-lg"
          ></input>
        )}

        <input
          type="text"
          ref={email}
          placeholder="Enter email or phone number"
          className="border-white bg-gray-400 rounded-lg mb-2.5 p-2"
        ></input>
        <input
          type="text"
          ref={password}
          placeholder="Enter Password"
          className="border-white bg-gray-400 rounded-lg mb-2.5 p-2"
        ></input>
        <p className="text-red-500">{errormessage}</p>
        <button
          type="submit"
          className="bg-red- bg-red-600 rounded-lg cursor-pointer p-2"
          // onClick={handleButtonClick}
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toogleSignInForm} className="cursor-pointer">
          New to Netflix? Sign Up Now
        </p>
      </form>
    </div>
  );
};
export default Login;
