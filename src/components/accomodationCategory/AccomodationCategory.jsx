import { useNavigate } from "react-router-dom";

const data = [
    {
        name: "rental",
        image: "https://i.pinimg.com/564x/88/46/bb/8846bb8d55b690b958a202c7ff995e4c.jpg"
    },
    {
        name: "pg",
        image: "https://i.pinimg.com/564x/7c/5a/12/7c5a12d215ddc2252e156040a3282781.jpg"
    },
    {
        name: "hostel",
        image: "https://i.pinimg.com/564x/e5/f7/82/e5f7827f993358de487ce66b01d2dd1f.jpg"
    },
    {
        name: "flats",
        image: "https://i.pinimg.com/564x/e7/74/51/e77451aa8e3cc20aa4b03a0bb5f4a021.jpg"
    }
]

const AccomodationCategory = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {data.map((item, index) => {
                            return (
                                <div key={index} className="px-[1.14em] lg:px-10">
                                    {/* Image  */}
                                    <div className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img 
                                            onClick={() => navigate(`/accomodation/${item.name}`)} 
                                            className="rounded-full w-20 lg:w-28 h-16 lg:h-24" 
                                            src={item.image} 
                                            alt="img" 
                                            />

                                         
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center fontPara font-medium title-font first-letter:uppercase ' >{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}" }} />
        </div>
    );
}

export default AccomodationCategory;