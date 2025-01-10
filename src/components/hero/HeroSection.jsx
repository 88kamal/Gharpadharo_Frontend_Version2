/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { Carousel } from "@material-tailwind/react";
import SearchComponent from "../../explore/SearchComponent";

function HeroSection() {
    return (
        <>
            <div className=" mx-3 my-3">
                <HeroSectionForDesktop />
                <div 
                    style={{
                        textAlign: "center", 
                        color: "#333", 
                        margin: "20px 0", 
                        fontSize: "24px", 
                        fontWeight: "bold"
                    }}
                >
                    <h1>"Start Your Search for a Home with Gharpadhro."</h1>
                </div>
                <SearchComponent/> 
            </div>

        </>
    );
}

export default HeroSection;




const HeroSectionForDesktop = () => {
    return (
        <>
        <div className=" z-50 mb-[0.5em]  lg:mb-[0.7em]">
            <Carousel
                navigation={false}
                transition={{ type: "tween", duration: 2 }}
                autoplay={true}
                autoplayDelay={5000}
                loop={true}
                prevArrow={false}
                nextArrow={false}
                className="rounded-lg z-10"
            >



                <img loading="lazy"
                    src="../banner/banner1Light.png"
                    alt="image 1"
                    className="w-[100%] h-[11em] xl:h-[30em] lg:h-[18em] md:h-[20em] sm:h-[12em] "
                />  <img
                    src="../banner/banner2Light.png"//add banner 
                    alt="image 1"
                    className="w-[100%] h-[11em] xl:h-[30em] lg:h-[18em] md:h-[20em] sm:h-[12em] "
                />
            </Carousel>
          
        </div>
    
        </>
    );
}
