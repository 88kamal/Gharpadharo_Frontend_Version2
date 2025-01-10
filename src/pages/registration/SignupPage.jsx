import { Button, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpUserMutation } from "../../redux/slices/userApiSlice";
import Navbars from "../../components/navbar/Navbar";

const SignupPage = () => {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPhoneNumber: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const [signUpUser, { isLoading, isError, isSuccess, error, data }] = useSignUpUserMutation();


    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUpUser(formData);
    };


    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Login failed, please try again.');
        }

        if (isSuccess) {
            toast.success(data?.message || 'Login successful!');
            navigate('/login')
        }
    }, [isError, error, isSuccess, data]);


    return (
        <>  
        <Navbars/>
   
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4"
         style={{
                    
            marginTop : '-120px',
            marginBottom : '-130px',
            backgroundColor : '#dddffc'
        }}
        
        
        >
            {/* main div  */}
            {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                {/* Heading  */}
                <h2 className="text-xl font-semibold text-center mb-6">Signup </h2>
                {/* form  */}
                <div className="space-y-4" >

                    {/* Owner Name Input  */}
                    <div>
                        <Input
                            type="text"
                            label="Name"
                            color="indigo"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Email Input  */}
                    <div>
                        <Input
                            type="email"
                            label="Email"
                            color="indigo"
                            name="userEmail"
                            value={formData.userEmail}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Phone Number Input  */}
                    <div>
                        <Input
                            type="text"
                            label="Phone Number"
                            color="indigo"
                            name="userPhoneNumber"
                            value={formData.userPhoneNumber}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password Input Input */}
                    <div>
                        <Input
                            type={showPassword ? "text" : "password"}
                            label="Password"
                            color="indigo"
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

                    {/* Submit Button  */}
                    <div>
                        <Button variant="" onClick={handleSubmit} className="w-full bg-indigo-400 hover:shadow-none shadow-none">
                            {isLoading ? 'Signing Up...' : 'Sign Up'}
                        </Button>
                    </div>


                    <div className="">
                        <Link to={"/login"}>
                            <h1 className="text-center">
                                have an account? <span className="font-bold underline">Login</span>
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignupPage;