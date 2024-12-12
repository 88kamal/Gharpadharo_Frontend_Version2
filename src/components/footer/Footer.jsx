import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div>
                <footer className="py-5 bg-gray-200">
                    <div className="flex justify-center mb-2">
                        <div className="">
                            <div className="flex justify-center mb-2">
                                <img className='w-20' src="../../img/gharpadharo.png" alt="" />
                            </div>
                            <h1 className='text-2xl font-bold text-center' >GharPadharo </h1>
                        </div>

                    </div>
                    <p className=' text-center fontPara' >© 2024 gharpadharo.com All Rights Reserved.</p>
                    <p className=' text-center fontPara mb-2 ' >This website <span className=' font-bold'> Managed</span> by
                        <br className=' lg:hidden sm:hidden md:hidden' />
                        <span className='font-bold'> GharPadharo </span>Pvt Ltd
                        </p>

                        <div className="flex justify-center">
                            <div className="flex space-x-4">
                            <div className="">
                                <Link to={'/refund-policy'}  >
                                    <p>Refund Policy</p>
                                </Link>
                            </div>

                            <div className="border-r"></div>
                            <div className="">
                                <Link to={'/privacy-policy'}  >
                                    <p>Privacy Policy</p>
                                </Link>
                            </div>
                            </div>
                        </div>

                </footer>
            </div>
        </div>
    );
}

export default Footer;