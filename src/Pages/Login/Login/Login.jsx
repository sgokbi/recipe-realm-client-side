import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { logIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;
    console.log(password, email);

    setError("");

    logIn(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        setSuccess("Successfully SignUp");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        setSuccess("Successfully SignUp");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const handleGithubLogin = () => {
    signInWithGithub()
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        setSuccess("Successfully SignUp");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero mt-12">
      <div className="hero-content flex-col w-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-5">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p>
                  <small>
                    New to this website? Please
                    <Link to="/register" className="link link-primary ms-2">
                      Sing Up
                    </Link>
                  </small>
                </p>
              </label>
            </div>
            <div className="form-control mt-4">
              <p className="mb-3 text-center font-semibold text-green-700">
                {success}
              </p>
              <p className="mb-3 text-center font-semibold text-red-700">
                {error}
              </p>
              <button className="btn btn-error  hover:!text-white">
                Login
              </button>
            </div>
          </form>
          <hr className="mt-2" />
          <div className="form-control mt-5 mx-4">
            <button
              onClick={handleGoogleLogIn}
              className="btn btn-outline btn-primary mt-4"
            >
              Login with Google
            </button>
          </div>
          <div className="form-control my-6 mx-4">
            <button onClick={handleGithubLogin} className="btn btn-outline">
              Login with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
