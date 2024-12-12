import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

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
                            color="green"
                            name="email"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <Input
                            type={showPassword ? "text" : "password"}
                            label="Password"
                            color="green"
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
                            className="w-full bg-green-500 text-white"
                        >
                            Login
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
