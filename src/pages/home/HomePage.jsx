import { useContext, useState } from "react";
import ViewRooms from "../../components/common/rooms/ViewRooms";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useGetRoomsByLoacationIdQuery } from "../../redux/slices/roomApiSlice";
// import Category from "../../components/common/rooms/Category";
import HeroSection from "../../components/hero/HeroSection";
// import PopularRoom from "../../components/roomCard/PopularRoom";

import TestimonialPage from "../../testimonal/TestimonialPage";


const HomePage = () => {

    const { localityId, roomType } = useContext(myContext);

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);

    const { data, isLoading, error } = useGetRoomsByLoacationIdQuery({ localityId, page, limit, roomType });

    // console.log(roomType)
    return (
        <>
        <Layout>

           
<HeroSection/>

{/* 
            <div className="p-4">
                <Category />
            </div> */}


            {/* <PopularRoom /> */}
            <div className="p-4">
                <ViewRooms data={data} isLoading={isLoading} error={error} setPage={setPage} setLimit={setLimit} />
            </div>


            {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Why Choose Gharpadharo?
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1055/1055645.png"
                alt="Easy Search"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                Easy Search
              </h3>
              <p className="mt-2 text-gray-600">
                Find your ideal room with our user-friendly search tools.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3187/3187927.png"
                alt="Verified Listings"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                Verified Listings
              </h3>
              <p className="mt-2 text-gray-600">
                All rooms and properties are thoroughly verified for safety.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/18274/18274073.png"
                alt="Affordable Prices"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                Affordable Prices
              </h3>
              <p className="mt-2 text-gray-600">
                Get the best deals without compromising on quality.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/9662/9662419.png"
                alt="24/7 Support"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                24/7 Support
              </h3>
              <p className="mt-2 text-gray-600">
                Our team is always here to assist you, anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* <section className="py-10">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-6">Our Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-4 bg-white rounded drop-shadow">
                            <h4 className="font-semibold text-xl mb-2">Rental Assistance</h4>
                            <p className="text-gray-600">Expert support to help you find the perfect rental property.</p>
                        </div>
                        <div className="p-4 bg-white rounded drop-shadow">
                            <h4 className="font-semibold text-xl mb-2">Tenant Support</h4>
                            <p className="text-gray-600">Get help with legal documentation, agreements, and more.</p>
                        </div>
                        <div className="p-4 bg-white rounded drop-shadow">
                            <h4 className="font-semibold text-xl mb-2">Owner Listings</h4>
                            <p className="text-gray-600">Easy-to-use tools for property owners to list and manage their rentals.</p>
                        </div>
                    </div>
                </div>
            </section> */}
        </Layout>
      <TestimonialPage/>
      
     </>
    );
};

export default HomePage