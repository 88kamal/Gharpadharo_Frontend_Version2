import { useContext, useState } from "react";
import ViewRooms from "../../components/common/rooms/ViewRooms";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useGetRoomsByLoacationIdQuery } from "../../redux/slices/roomApiSlice";
import Category from "../../components/common/rooms/Category";
// import PopularRoom from "../../components/roomCard/PopularRoom";

const HomePage = () => {

    const { localityId, roomType } = useContext(myContext);

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);

    const { data, isLoading, error } = useGetRoomsByLoacationIdQuery({ localityId, page, limit, roomType });

    // console.log(roomType)
    return (
        <Layout>

            <section className="hero bg-indigo-400 py-20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4 text-white">Find Your Perfect Rental, PG, or Flat</h2>
                    <p className="text-lg text-white mb-6">Explore thousands of verified listings to find a home that fits your lifestyle.</p>
                </div>
            </section>



            <div className="p-4">
                <Category />
            </div>


            {/* <PopularRoom /> */}
            <div className="p-4">
                <ViewRooms data={data} isLoading={isLoading} error={error} setPage={setPage} setLimit={setLimit} />
            </div>


            <section className="py-10">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-6">Why Choose GharPadharo?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-4 bg-white rounded drop-shadow">
                            <h4 className="font-semibold text-xl mb-2">Verified Listings</h4>
                            <p className="text-gray-600">All properties are thoroughly verified to ensure reliability and quality.</p>
                        </div>
                        <div className="p-4 bg-white rounded drop-shadow">
                            <h4 className="font-semibold text-xl mb-2">Affordable Options</h4>
                            <p className="text-gray-600">Find rentals, PGs, and flats that suit your budget without compromising on comfort.</p>
                        </div>
                        <div className="p-4 bg-white rounded drop-shadow">
                            <h4 className="font-semibold text-xl mb-2">User-Friendly Interface</h4>
                            <p className="text-gray-600">Easily search and filter listings to find your ideal home in minutes.</p>
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
    );
};

export default HomePage