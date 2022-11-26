import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { getImageUrl } from "../../api/imageUpload";
import { saveUsers } from "../../api/saveUsers";
import Button from "../../compenents/Button/Button";
import { AuthContext } from "../../context/UserContext/UserContext";

const Register = () => {
  const { createUser, userUpadetedProfile, signInWithGoogle } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const role = form.role.value;

    console.log(name, email, password, role);

    getImageUrl(image)
      .then((imageData) => {
        // create a user
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);

            //update name image
            userUpadetedProfile(name, imageData)
              .then(() => {
                const userInfo = {
                  UserName: name,
                  email: email,
                  isVerifed: false,
                  userImage: imageData,
                  role: role,
                };

                // database user save
                saveUsers(userInfo)
                  .then((data) => {
                    if (data.acknowledged) {
                      console.log(data);
                      form.reset();
                      toast.success("User Created successfully");
                      navigate(from, { replace: true });
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                    toast.error(err.meassage);
                  });
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.meassage);
              });
          })
          .catch((err) => {
            console.error(err);
            toast.error(err.meassage);
          });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.meassage);
      });
  };

  // google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);

        const userInfo = {
          UserName: user?.displayName,
          email: user?.email,
          isVerifed: false,
          userImage: user.photoURL,
          role: "Buyer",
        };

        // database user save
        fetch(`http://localhost:5000/users/${user?.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              console.log(data);
              toast.success("User Created successfully");
              navigate(from, { replace: true });
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.meassage);
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.meassage);
      });
  };

  return (
    <div className=" my-10 sm:my-12 md:my-16 lg:my-20 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="lg:w-2/5 mx-auto  md:w-full sm:w-full w-full">
        <div className="card  w-full border">
          <div className="card-body">
            <div className="text-center mb-3">
              <h1 className="text-xl text-[#149777] underline underline-offset-8 ">
                <strong>Sign Up</strong>
              </h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="input rounded-md w-full input-bordered focus:outline-none"
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
                  required
                  className="input rounded-md w-full input-bordered focus:outline-none"
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
                  required
                  className="input w-full pr-10 rounded-md input-bordered focus:outline-none "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Image</span>
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  placeholder="Your Image"
                  required
                  className="file-input  file-input-bordered rounded-md w-full  focus:outline-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Choose Your Account Type</span>
                </label>

                <select
                  name="role"
                  className="select select-bordered w-full focus:outline-none rounded-md"
                >
                  <option defaultValue="buyer">Buyer</option>
                  <option defaultValue="seller">Seller</option>
                </select>
              </div>

              <div className="form-control mt-6">
                <Button>Sign Up</Button>
              </div>
            </form>

            <p className=" text-center mt-3">
              Create a New account?
              <Link className="text-[#149777] hover:underline" to="/login">
                Sing in
              </Link>
            </p>
            <div className="divider">OR</div>

            <div className=" flex justify-center">
              <button onClick={handleGoogleSignIn}>
                <FcGoogle className="text-2xl"></FcGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
