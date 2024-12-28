import Layout from "../../components/layout/Layout";

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help! Reach out to us via call or email for any inquiries or support.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is available 24/7 to assist you. Contact us through the details below:
          </p>
          <div className="space-y-6">
            {/* Phone Support */}
            <div className="flex items-center justify-center">
              <i className="fas fa-phone text-blue-600 text-2xl mr-4"></i>
              <p className="text-lg text-gray-700">
                <a href="tel:+911234567890" className="hover:underline">
                  +91 12345 67890
                </a>
              </p>
            </div>

            {/* Email Support */}
            <div className="flex items-center justify-center">
              <i className="fas fa-envelope text-blue-600 text-2xl mr-4"></i>
              <p className="text-lg text-gray-700">
                <a href="mailto:support@gharpadharo.com" className="hover:underline">
                  support@gharpadharo.com
                </a>
              </p>
            </div>

            {/* Address */}
            <div className="flex items-center justify-center">
              <i className="fas fa-map-marker-alt text-blue-600 text-2xl mr-4"></i>
              <p className="text-lg text-gray-700">
                Gharpadharo HQ, Nanda Ki Chowki-Premnagar, Dehradum, Uttarakhand, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
