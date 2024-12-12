//         </div>
//     );
// }

// export default RoomCard;


import { useNavigate } from "react-router-dom";


const PopularRoom = () => {
    const navigate = useNavigate();

    const status = "Active"


    return (
        <div className=" pt-5">
            <div className="">
            <h1 className={`text-md lg:text-2xl font-semibold  px-2 lg:px-4 py-4 lg:py-0 
               `}>Popular Room</h1>
            </div>
            <section className="text-gray-600 body-font mt-3">
                <div className=" px-4 py-1 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        <div className="p-4 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/3 w-full cursor-pointer " >
                            <div className={`h-full rounded-2xl overflow-hidden border drop-shadow border-gray-200`}
                            >
                                <img
                                    className="w-full h-60 object-cover object-center px-3 py-3 rounded-3xl"
                                    src={"http://res.cloudinary.com/ddhj7zz9q/image/upload/v1728392008/ehhs9g58gplhiqauiabg.jpg"}
                                    alt="room"
                                />

                                <div className=" px-3 py-3 text-black">
                                    <h2 className="tracking-widest text-xs title-font font-medium mb-1">
                                        Ghar Padharo
                                    </h2>
                                    <h1 className=" font-medium fontPara text-xl capitalize   mb-3">
                                        1 bhk flat in dehradun
                                    </h1>

                                    <div className="flex justify-between items-center mb-3">
                                        <h2 className="font-medium fontPara">
                                            <span className="text-xl ">₹ 10000</span>
                                            <span className="text-md">/month</span>
                                        </h2>
                                        <div className="flex items-center space-x-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>

                                            <h2 className="text-lg font-medium fontPara">Kehri Gaon</h2>
                                        </div>
                                    </div>


                                    <div className=" mb-2.5 flex justify-between text-black ">
                                        <p className=" font-semibold">BHK Type : <span className=" font-normal">1BHK</span></p>
                                        <p className=" font-semibold">Room Type : <span className=" font-normal capitalize">single</span></p>
                                    </div>


                                    <div className="flex justify-between items-center " >
                                        {status === 'Active'
                                            ?
                                            <div className={`bg-green-500 rounded xl:w-32 lg:w-28 md:w-44 w-40  py-[2.5px] text-center text-white`}>
                                                <h2 className=" text-lg font-medium fontPara">{status}</h2>
                                            </div>
                                            :
                                            <div className={`bg-red-500 rounded xl:w-32 lg:w-28 md:w-44 w-40 py-[2.5px]  text-center`}>
                                                <h2 className=" text-lg font-medium fontPara">{status}</h2>
                                            </div>}

                                        {/* onClick={() => navigate(`/roomdetail/${name}/${_id}`)} */}
                                        <div className={`bg-indigo-500 text-white lg:w-28 md:w-44 w-40 py-[2.5px] xl:w-32  rounded text-center `}>
                                            <h2 className=" text-lg font-medium fontPara">Details</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </div>
    );
}

export default PopularRoom;