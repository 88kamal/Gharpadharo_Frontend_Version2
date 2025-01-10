import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    // <div>
    //   <footer className="py-6 bg-gray-200">
    //     <div className="container mx-auto px-6">
    //       <div className="flex flex-wrap items-center justify-between">
    //         {/* Left Section: Logo */}
    //         <div className="flex items-center space-x-3">
    //           <img className="w-20" src="../../img/gharpadharo.png" alt="GharPadharo Logo" />
    //           <div>
    //             <h1 className="text-2xl font-bold">GharPadharo</h1>
    //             <p className="text-sm">© 2024 gharpadharo.com All Rights Reserved.</p>
    //             <p className="text-sm">
    //               Managed by <span className="font-bold">GharPadharo Pvt Ltd</span>
    //             </p>
    //           </div>
    //         </div>

    //         {/* Right Section: Links and Social Media */}
    //         <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8">
    //           <div className="flex flex-col items-center md:items-start">
    //             <Link to="/refund-policy" className="text-sm text-gray-700 hover:underline">
    //               Refund Policy
    //             </Link>
    //             <Link to="/privacy-policy" className="text-sm text-gray-700 hover:underline">
    //               Privacy Policy
    //             </Link>
    //           </div>

    //           <div className="flex space-x-4">
    //             <a
    //               href="https://www.linkedin.com"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-gray-700 hover:text-blue-600"
    //               aria-label="LinkedIn"
    //             >
    //               <FaLinkedin size={24} />
    //             </a>
    //             <a
    //               href="https://www.facebook.com"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-gray-700 hover:text-blue-500"
    //               aria-label="Facebook"
    //             >
    //               <FaFacebook size={24} />
    //             </a>
    //             <a
    //               href="https://wa.me/1234567890"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-gray-700 hover:text-green-500"
    //               aria-label="WhatsApp"
    //             >
    //               <FaWhatsapp size={24} />
    //             </a>
    //             <a
    //               href="https://www.instagram.com"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-gray-700 hover:text-pink-500"
    //               aria-label="Instagram"
    //             >
    //               <FaInstagram size={24} />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
    <section class="py-10 bg-gray-50 sm:pt-16 lg:pt-24 ">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8 space-x-3" >
            <img class="w-auto h-14" src="../../img/gharpadharo.png" alt="GharPadharo Logo" />
            <h1 className="text-2xl font-bold">GharPadharo</h1>

            <p class="text-base leading-relaxed text-gray-600 mt-7">We provide comfortable and affordable accommodation for students with all essential amenities. Our PG offers a safe and homely environment, ensuring students have a peaceful stay while focusing on their studies.</p>

            {/* <ul class="flex items-center space-x-3 mt-9">
              <li>
                <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path
                      d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                    ></path>
                  </svg>
                </a>
              </li>


            </ul> */}
            <ul class="flex items-center space-x-3 mt-9">
             
              <li>
                <a
                  href="https://www.instagram.com/ghar_padharo/?igsh=Ymt4ejdtODZnNmI4&utm_source=qr"
                  target="_blank"
                  title="Instagram"
                  class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-pink-500 focus:bg-pink-500"
                >
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path
                      d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                    ></path>
                  </svg>
                </a>
              </li>

           
              <li>
                <a
                  href="https://www.facebook.com/people/Gharpadharo/61561583311661/?mibextid=wwXIfr&rdid=tDPLPDjUwoopI1VR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15YPYq3zvZ%2F%3Fmibextid%3DwwXIfr"
                  target="_blank"
                  title="Facebook"
                  class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
              </li>

             
              <li>
                <a
                  href="https://wa.me/7903269007"
                  target="_blank"
                  title="WhatsApp"
                  class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-green-500 focus:bg-green-500"
                >
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M20.52 3.48A11.944 11.944 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.045.537 4.015 1.555 5.753L0 24l6.431-1.617A11.919 11.919 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.24-6.197-3.48-8.52zM12 22.084c-1.846 0-3.671-.51-5.281-1.479l-.378-.22L3 21l.615-3.236-.226-.38C2.312 15.692 1.791 13.88 1.791 12 1.791 6.532 6.533 1.79 12 1.79S22.209 6.532 22.209 12c0 5.467-4.743 10.209-10.209 10.209zM15.738 14.66c-.258-.129-1.526-.752-1.764-.84-.236-.086-.408-.13-.58.13-.173.258-.666.84-.816 1.01-.15.173-.301.194-.559.065-.258-.13-1.092-.403-2.078-1.282-.768-.68-1.288-1.52-1.438-1.779-.15-.258-.016-.398.113-.527.115-.115.258-.302.387-.453.129-.15.172-.258.258-.43.086-.172.043-.322-.022-.451-.065-.129-.58-1.396-.795-1.916-.086-.215-.173-.237-.43-.258l-.36-.022c-.15 0-.387.057-.59.28-.215.237-.81.79-.81 1.918 0 1.13.83 2.221.947 2.378.129.172 1.634 2.507 3.956 3.512.553.238.984.381 1.321.488.557.179 1.065.153 1.464.086.447-.086 1.526-.621 1.743-1.222.215-.601.215-1.118.15-1.223-.065-.108-.236-.173-.494-.302z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>

          </div>

          <div>
            <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

            <ul class="mt-6 space-y-4">
              <li>
                <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Works </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

            <ul class="mt-6 space-y-4">
              <li>
                <a href="/contact" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </a>
              </li>


              <li>
                <a href="/refundpolicy" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Refund Policy </a>
              </li>

              <li>
                <a href="/privacypolicy" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
              </li>
            </ul>
          </div>

          <div class="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>

            <form action="#" method="POST" class="mt-6">
              <div>
                <label for="email" class="sr-only">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
              </div>

              <button type="submit" class="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Subscribe</button>
            </form>
          </div>
        </div>

        <hr class="mt-16 mb-10 border-gray-200" />

        <p class="text-sm text-center text-gray-600">© Copyright 2025, All Rights Reserved by GharPadharo</p>
      </div>
    </section>

  );
};

export default Footer;
