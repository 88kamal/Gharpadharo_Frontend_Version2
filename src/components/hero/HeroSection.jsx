/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { Carousel } from "@material-tailwind/react";

function HeroSection() {
    return (
        <>
            <div className=" mx-3 my-3">
                <HeroSectionForDesktop />
            </div>

        </>
    );
}

export default HeroSection;




const HeroSectionForDesktop = () => {
    return (
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
                    src="../banner/1.jpg"
                    alt="image 1"
                    className="w-[100%] h-[11em] xl:h-[30em] lg:h-[18em] md:h-[20em] sm:h-[12em] "
                /> 
                 <img
                    src="../banner/2.jpg"
                    alt="image 1"
                    className="w-[100%] h-[11em] xl:h-[30em] lg:h-[18em] md:h-[20em] sm:h-[12em] "
                />

<img
                    src="../banner/3.jpg"
                    alt="image 1"
                    className="w-[100%] h-[11em] xl:h-[30em] lg:h-[18em] md:h-[20em] sm:h-[12em] "
                />
            </Carousel>
        </div>
    );
}
