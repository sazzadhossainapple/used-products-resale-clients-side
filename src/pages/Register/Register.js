import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { getImageUrl } from '../../api/imageUpload';
import { saveUsers } from '../../api/saveUsers';
import Button from '../../compenents/Button/Button';
import { AuthContext } from '../../context/UserContext/UserContext';
import useToken from '../../hooks/useToken';

const Register = () => {
    const { createUser, userUpadetedProfile, signInWithGoogle } =
        useContext(AuthContext);
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    // handle register
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        console.log(name, email, password, role);

        // create a user
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                //update name image
                userUpadetedProfile(name)
                    .then(() => {
                        const userInfo = {
                            UserName: name,
                            email: email,
                            userImage: '',
                            isVerifed: false,
                            role: role,
                        };

                        console.log(userInfo);

                        // database user save
                        saveUsers(userInfo)
                            .then((data) => {
                                if (data.success) {
                                    console.log(data);
                                    setCreateUserEmail(userInfo);
                                    form.reset();
                                    toast.success('User Created successfully');
                                }
                            })
                            .catch((err) => {
                                console.log(err);
                                toast.error(err?.message);
                            });
                    })
                    .catch((err) => {
                        console.log(err);
                        toast.error(err?.message);
                    });
            })
            .catch((err) => {
                console.error(err);
                toast.error(err?.message);
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
                    isVerifed: true,
                    userImage: user.photoURL,
                    role: 'Buyer',
                };

                // database user save
                fetch(`${process.env.REACT_APP_URL}/api/users/${user?.email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.acknowledged) {
                            console.log(data);
                            setCreateUserEmail(userInfo);
                            toast.success('User Created successfully');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        toast.error(error.massage);
                    });
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.massage);
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
                                    <span className="label-text">
                                        Full Name
                                    </span>
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
                                    <span className="label-text">
                                        Choose Your Account Type
                                    </span>
                                </label>

                                <div className="flex items-center">
                                    <label class="flex  rounded-md px-3 py-2  cursor-pointer ">
                                        <input
                                            type="radio"
                                            value="Buyer"
                                            defaultChecked
                                            name="role"
                                        />
                                        <span class="pl-2">Buyer</span>
                                    </label>

                                    <label class="flex  rounded-md px-3 py-2 cursor-pointer ">
                                        <input
                                            type="radio"
                                            value="Seller"
                                            name="role"
                                        />
                                        <span class="pl-2">Seller</span>
                                    </label>
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <Button>Sign Up</Button>
                            </div>
                        </form>

                        <p className=" text-center mt-3">
                            Create a New account?
                            <Link
                                className="text-[#149777] hover:underline"
                                to="/login"
                            >
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
