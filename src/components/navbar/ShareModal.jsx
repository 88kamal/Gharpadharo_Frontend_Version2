import { useState } from 'react';
import { Dialog, IconButton } from '@material-tailwind/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaCopy, FaInstagram } from 'react-icons/fa';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { X } from 'lucide-react';

const ShareDialog = () => {
    const [open, setOpen] = useState(false);
    const websiteUrl = "https://www.gharpadharo.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(websiteUrl);
        alert('URL copied to clipboard!');
    };

    const socialMediaLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${websiteUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${websiteUrl}`,
        linkedin: `https://www.linkedin.com/shareArticle?url=${websiteUrl}`,
        whatsapp: `https://api.whatsapp.com/send?text=${websiteUrl}`
    };

    return (
        <>

            <div className="ml-auto hidden  cursor-pointer">
                <AiOutlineShareAlt onClick={() => setOpen(true)}
                    size={25}
                />
            </div>
            <Dialog open={open} handler={() => setOpen(false)} size="md">
                <div>
                    <div className="flex flex-col gap-6 p-4 text-black">
                        <div className="flex justify-between items-center">
                            {/* Title */}
                            <h1 className="font-bold text-lg">
                                Share This Page
                            </h1>

                            <button type='button' onClick={() => setOpen(false)} className=" bg-gray-100 rounded-full p-1">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Description */}
                        <p className="text-sm app-font">
                            Enjoyed this page? Share it with your friends on social media or copy the link to spread the word!
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex gap-4">
                            <IconButton
                                color="blue"
                                className=' hover:shadow-none shadow-none outline-none'
                                onClick={() => window.open(socialMediaLinks.facebook, '_blank')}>
                                <FaFacebook size={22} />
                            </IconButton>
                            <IconButton
                                color="light-blue"
                                className=' hover:shadow-none shadow-none outline-none'
                                onClick={() => window.open(socialMediaLinks.twitter, '_blank')}>
                                <FaTwitter size={22} />
                            </IconButton>
                            <IconButton
                                color="blue"
                                className=' hover:shadow-none shadow-none outline-none'
                                onClick={() => window.open(socialMediaLinks.linkedin, '_blank')}>
                                <FaLinkedin size={22} />
                            </IconButton>
                            <IconButton
                                color="pink"
                                className=' hover:shadow-none shadow-none outline-none'
                                onClick={() => window.open(socialMediaLinks.linkedin, '_blank')}>
                                <FaInstagram size={22} />
                            </IconButton>
                            <IconButton
                                color="green"
                                className=' hover:shadow-none shadow-none outline-none'
                                onClick={() => window.open(socialMediaLinks.whatsapp, '_blank')}>
                                <FaWhatsapp size={22} />
                            </IconButton>
                        </div>


                        <div className=" flex justify-between items-center">
                            <div className="left bg-gray-200 w-full  px-2 py-2 rounded-l-md">
                                <p className=' app-font'>{websiteUrl}</p>
                            </div>

                            <button type='button' onClick={handleCopy} className="right bg-gray-400  px-3 py-[12.9px] rounded-r-md">
                                <FaCopy />
                            </button>
                        </div>

                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default ShareDialog;