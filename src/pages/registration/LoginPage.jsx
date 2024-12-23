import { Button, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/slices/authApiSlice";
import toast from "react-hot-toast";
import authService from "../../services/authService";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [loginState, setLoginState] = useState({
        email: '',
        password: '',
    });

    const user = authService.getCurrentUser();

    const navigate = useNavigate();

    //* Redux mutation for login
    const [login, { isLoading, error, data, isSuccess, isError }] = useLoginMutation();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(loginState).unwrap();
            // console.log(response); // Logged in user data, token etc
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Login failed, please try again.');
        }

        if (isSuccess) {
            toast.success(data?.message || 'Login successful!');
            const rolePaths = {
                2: '/admin-dashboard/admin-home-page',
                14: '/room-owner-dashboard/room-owner-home-page',
                15: '/'
            };

            navigate(rolePaths[user?.role]);

        }
    }, [isError, error, isSuccess, data]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            {/* main div  */}
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                {/* Heading  */}
                <h2 className="text-xl font-semibold text-center mb-6">Login</h2>
                {/* form  */}
                <form className="space-y-4">
                    {/* Email Input  */}
                    <div>
                        <Input
                            type="email"
                            label="Email"
                            color="indigo"
                            name="email"
                            value={loginState.email}
                            onChange={(e) =>
                                setLoginState({ ...loginState, email: e.target.value })
                            }
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <Input
                            type={showPassword ? "text" : "password"}
                            label="Password"
                            color="indigo"
                            value={loginState.password}
                            onChange={(e) =>
                                setLoginState({ ...loginState, password: e.target.value })
                            }
                            icon={
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOffIcon className="h-5 w-5 text-gray-500" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5 text-gray-500" />
                                    )}
                                </button>
                            }
                            name="password"
                        />
                    </div>

                    {/* Submit Button  */}
                    <div>
                        <Button
                            type="submit"
                            className="w-full bg-indigo-400 text-white"
                            onClick={handleLogin}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </Button>
                    </div>

                    <div className="">
                        <Link to={"/signup"}>
                            <h1 className="text-center">
                                Don’t have an account? <span className="font-bold underline">Sign up</span>
                            </h1>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
