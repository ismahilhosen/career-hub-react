import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebass.init";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [errorMg, setErrorMg] = useState("");
  const navigate = useNavigate();
  const HendelRegiter = (e) => {
    e.preventDefault();
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    console.log(email, password);
    const auth = getAuth(app);
    setErrorMg("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        user.accessToken && toast("account create sucessfull")
        user.accessToken && navigate("/login")
      })
      .catch((error) => {
        console.error(error.message);
        error.message && setErrorMg(error.message);
      });
  };

  return (
    <div>
    <ToastContainer></ToastContainer>
      <div className="">{}</div>:
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="emailInput"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="passwordInput"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={HendelRegiter}
                type="submit"
                className="flex text-drak-1 btn bg-gradient-to-r from-blue to-cyan w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
              <p className="text-error text-center m-3">{errorMg.slice(9).replaceAll("-", " ").replaceAll("/", " ")}</p>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
           I am a member?{" "}
           <Link to={"/login"}>
            <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
             already have an account
            </a>
           </Link>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
