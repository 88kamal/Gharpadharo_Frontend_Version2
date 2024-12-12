import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function TopNavbar({ image, name }) {
    return (
        <>
            <div className='rounded-none bg-primary/10  '>
                <div
                    className="flex items-center px-3 py-3  justify-between"
                >
                    <Link to={'/'}>
                        <div className="flex items-center gap-3">
                            <div className="flex justify-center">
                                <img className="w-10" src={image} alt="img" />
                            </div>
                            <h1 className="text-center text-xl text-black font-medium app-font">{name} Dashboard</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TopNavbar