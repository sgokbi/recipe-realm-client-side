import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Registration = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { signUpWithEmail, updateUserProfile } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const email = form.email.value;
    console.log(name, password, photo, email);

    setError("");

    signUpWithEmail(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        setSuccess("Successfully SignUp");
        form.reset();

        handleUpdateUser(res.user, name, photo);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const handleUpdateUser = (currentUser, name, photo) => {
    updateUserProfile(currentUser, {
      displayName: name,
      photoUrl: photo,
    })
      .then(() => {
        console.log("name updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero mt-6">
      <div className="hero-content flex-col w-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-5">Sign up now!</h1>
        </div>
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo url"
                className="input input-bordered"
                required
              />
            </div>
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

              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary me-2"
                  />
                  <p>
                    <small>
                      Accept
                      <Link to="/terms" className="link link-primary">
                        terms and conditions
                      </Link>
                    </small>
                  </p>
                </label>
              </div>
            </div>
            <div className="form-control mt-4">
              <p className="mb-3 text-center font-semibold text-green-700">
                {success}
              </p>
              <p className="mb-3 text-center font-semibold text-red-700">
                {error}
              </p>
              <button className="btn btn-error  hover:!text-white">
                Sign Up
              </button>
            </div>
          </form>
          <hr className="" />

          <label className="label my-2">
            <p className="mx-auto">
              <small>
                Already have an account? Please
                <Link to="/login" className="link link-primary ms-2">
                  Log In
                </Link>
              </small>
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Registration;
