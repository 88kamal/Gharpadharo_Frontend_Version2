import { Button, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link } from "react-router-dom";

const SignupPage = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        ownerName: '',
        companyEmail: '',
        companyPhoneNumber: '',
        password: '',
        businessType: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Check if all fields are filled
    const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            {/* main div  */}
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                {/* Heading  */}
                <h2 className="text-xl font-semibold text-center mb-6">Signup Business</h2>
                {/* form  */}
                <form className="space-y-4">
                    <div>
                        <Input
                            type="text"
                            label="Company Name"
                            color="green"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Owner Name Input  */}
                    <div>
                        <Input
                            type="text"
                            label="Owner Name"
                            color="green"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Email Input  */}
                    <div>
                        <Input
                            type="email"
                            label="Email"
                            color="green"
                            name="companyEmail"
                            value={formData.companyEmail}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Phone Number Input  */}
                    <div>
                        <Input
                            type="text"
                            label="Phone Number"
                            color="green"
                            name="companyPhoneNumber"
                            value={formData.companyPhoneNumber}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password Input Input */}
                    <div>
                        <Input
                            type={showPassword ? "text" : "password"}
                            label="Password"
                            color="green"
                            icon={<button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOffIcon className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <EyeIcon className="h-5 w-5 text-gray-500" />
                                )}
                            </button>}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Business Type Input */}
                    <div>
                        <Input
                            type="text"
                            label="Business Type"
                            color="green"
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Submit Button  */}
                    <div>
                        <Button
                            type="submit"
                            className="w-full bg-green-500 text-white"
                        //   disabled={!isFormValid || isLoading}
                        >
                            Signup
                        </Button>
                    </div>

                    <div className="">
                        <Link to={"/login"}>
                            <h1 className="text-center">
                                have an account? <span className="font-bold underline">Login</span>
                            </h1>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;