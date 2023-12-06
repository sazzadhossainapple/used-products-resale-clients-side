import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../compenents/Button/Button';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../../context/UserContext/UserContext';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { logInUser, signInWithGoogle } = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    //handle login
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(user);
                form.reset();
                toast.success('User login successfully');
            })
            .catch((err) => {
                console.error(err);
                toast.error(err.message);
            });
    };

    // google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(user);
                const userInfo = {
                    UserName: user?.displayName,
                    email: user?.email,
                    isVerifed: false,
                    userImage: user.photoURL,
                    role: 'Buyer',
                };

                // database user save
                fetch(
                    `https://e-shoppers-server.vercel.app/users/${user?.email}`,
                    {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(userInfo),
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.acknowledged) {
                            console.log(data);
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

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className=" my-10 sm:my-12 md:my-16 lg:my-20 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="lg:w-2/5 mx-auto  md:w-full sm:w-full w-full">
                <div className="card  w-full border">
                    <div className="card-body">
                        <div className="text-center mb-3">
                            <h1 className="text-xl text-[#149777] underline underline-offset-8 ">
                                <strong>Sign In</strong>
                            </h1>
                        </div>

                        <form onSubmit={handleSubmit}>
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
                                <div className=" relative flex  items-center">
                                    <input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        name="password"
                                        placeholder="password"
                                        required
                                        className="input w-full pr-10 rounded-md input-bordered focus:outline-none "
                                    />
                                    {showPassword ? (
                                        <>
                                            <AiFillEye
                                                onClick={togglePassword}
                                                className="text-gray-400 absolute  mr-3 right-0 text-2xl "
                                            ></AiFillEye>
                                        </>
                                    ) : (
                                        <>
                                            <AiFillEyeInvisible
                                                onClick={(e) =>
                                                    setShowPassword(e)
                                                }
                                                className="text-gray-400 absolute  mr-3 right-0 text-2xl "
                                            ></AiFillEyeInvisible>
                                        </>
                                    )}
                                </div>

                                <label className="label">
                                    <Link
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <Button>Sign in</Button>
                            </div>
                        </form>

                        <p className=" text-center mt-3">
                            Create a New account?
                            <Link
                                className="text-[#149777] hover:underline"
                                to="/register"
                            >
                                Sing up
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

export default Login;
