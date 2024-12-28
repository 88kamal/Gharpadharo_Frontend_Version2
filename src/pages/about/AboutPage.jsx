import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome to Gharpadharo
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Your trusted platform for seamless room renting. Whether you're a 
              tenant looking for the perfect place or a host wanting to connect 
              with reliable renters, Gharpadharo simplifies the journey.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
              alt="Comfortable living space"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

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

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Ready to find your perfect room?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of happy users who have found their ideal spaces
            through Gharpadharo.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
