import Layout from "../../components/layout/Layout";
import listing from '../../assets/listing.png';
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetLocalitiesQuery } from "../../redux/slices/locationApiSlice";
import { Eye, EyeOff } from "lucide-react";
import { Button, Spinner } from "@material-tailwind/react";
import { useAddAccomodationMutation } from "../../redux/slices/accomodationApiSlice";
import toast from "react-hot-toast";

const ListPropertyPage = () => {

  //states for dropdowns
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [showAccomodationTypeDropdown, setShowAccomodationTypeDropdown] = useState(false)
  const [showLocalitiesDropDown, setShowLocalitiesDropdown] = useState(false);

  //state for password hide and unhide
  const [showPassword, setShowPassword] = useState(false);

  //state for searching the locality
  const [searchTerm, setSearchTerm] = useState("");

  //formdata state
  const [formData, setFormData] = useState({
    accomodationType: "",
    accomodationImage: "",
    accomodationName: "",
    ownerName: "",
    ownerEmail: "",
    password: "",
    ownerPhoneNumber: "",
    gender: "",
    selectArea: ""
  });

  //initializing navigate
  const navigate = useNavigate();

  //togglepasword visivility function
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  //------------------------------------------------------------function related to images-------------------------------------------------------------
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        accomodationImage: e.target.files[0]
      });
    }
  };

  const resetImage = () => {
    setFormData({
      ...formData,
      accomodationImage: ""
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };




  // localities related function-----------------------------------------------------------------------------------------------------------------------
  // Fetching cities with the query hook
  const { data: localities, error: localitiesError, isLoading: isLocalitiesLoading } = useGetLocalitiesQuery();

  const handleCitySearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      // If the input is empty, close the dropdown
      setShowLocalitiesDropdown(false);
    } else {
      // Show the dropdown and filter cities based on input
      setShowLocalitiesDropdown(true);
    }
  };


  const handleCitySelect = (localityName, _id) => {
    setFormData((prevState) => ({
      ...prevState,
      selectArea: _id,
    }));
    setSearchTerm(`${localityName}`);
    setShowLocalitiesDropdown(false);
  };


  const filteredLocalities = localities?.filter((locality) =>
    locality.localityName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // ----------------------------------------------------------------------------------------------------------------------------------------------------



  //gender realted function-----------------------------------------------------------------------------------------------------------------------------
  const handleGenderSelect = (selectedGender) => {
    setFormData((prevState) => ({
      ...prevState,
      gender: selectedGender,
    }));
    setShowGenderDropdown(false);
  };

  // ---------------------------------------------------------------------------------------------------------------------------------------------------




  //accomodationrelated function------------------------------------------------------------------------------------------------------------------------
  const handleAccomodationTypeSelect = (selectedType) => {
    setFormData((prevState) => ({
      ...prevState,
      accomodationType: selectedType,
    }));
    setShowAccomodationTypeDropdown(false);
  };
  // ---------------------------------------------------------------------------------------------------------------------------------------------------




  //all implut handle change----------------------------------------------------------------------------------------------------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  }
  // ---------------------------------------------------------------------------------------------------------------------------------------------------


  //final handle submit the form related  functions------------------------------------------------------------------------------------------------------


  // Validation function to check if all fields are filled
  const isFormValid = () => {
    return Object.values(formData).every(
      (value) => value !== null && value !== ""
    );
  }

  // Mutation for adding a shop
  const [addAccomodation, { isLoading: isAddingAccomodation, error: addAccomodationError, isSuccess }] = useAddAccomodationMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    console.log("data", [...data]); // Log the FormData contents



    for (let key in formData) {
      data.append(key, formData[key]);
    }
    try {
      const response = await addAccomodation(data).unwrap();

      // console.log("response", response)
      toast.success(response.message)
      // console.log('Shop added successfully', response.err);
      // Reset the form after successful submission
      setFormData({
        accomodationType: "",
        accomodationImage: "",
        accomodationName: "",
        ownerName: "",
        ownerEmail: "",
        password: "",
        ownerPhoneNumber: "",
        gender: "",
        selectArea: ""
      });

      setSearchTerm("")

      // Reset the file input manually
      if (fileInputRef.current) {
        fileInputRef.current.value = null; // This clears the file input field
      }

    } catch (err) {
      console.log('Failed to add Accomodation:', err);
    }
  };

  useEffect(() => {
    if (addAccomodationError) {
      // toast.error(addShopError?.data?.error || 'Something went wrong!');
      toast.error(addAccomodationError?.data?.error || 'Something went wrong!', "error")

    }

    if (isSuccess) {
      navigate('/login')
    }
  }, [addAccomodationError, isSuccess]);





  return (
    <Layout>
      <div className="main flex flex-wrap justify-between bg-primary/10">
        {/*----------------------------------------------------------------------------left part---------------------------------------------- */}
        {/* <div className="left w-full bg-indigo-300 md:w-1/2 p-5">
          <div className="">  
            <div className="p-2">
              <img
                className="h-72 lg:h-[30em] w-full mb-4 rounded-md"
                src={listing}
                alt="img"
              />
            </div>
            <section className="py-10">
              <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold mb-6">Why Choose GharPadharo?</h3>
                <div className="grid grid-rows-1 md:grid-rows-3 gap-8">
                  <div className="p-4 bg-white rounded drop-shadow">
                    <h4 className="font-semibold text-xl mb-2">Reach Verified Tenants</h4>
                    <p className="text-gray-600">
                      Get access to a wide pool of verified tenants actively searching for properties like yours.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded drop-shadow">
                    <h4 className="font-semibold text-xl mb-2">Effortless Property Management</h4>
                    <p className="text-gray-600">
                      Manage your listings, availability, and inquiries seamlessly with our intuitive platform.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded drop-shadow">
                    <h4 className="font-semibold text-xl mb-2">Maximized Visibility</h4>
                    <p className="text-gray-600">
                      Showcase your property to thousands of potential tenants and increase your occupancy rate.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div> */}

        <div className="left w-full bg-indigo-50 md:w-1/2 p-6">
          <div className="text-center p-4">
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">
              Rent Your Property Faster with <span className="text-blue-500">GharPhadaro.com</span>
            </h1>
            <div className="p-2">
              <img
                className="h-50 lg:h-[30em] w-full mb-12 rounded-lg shadow-lg border-25 border-[#dddffc]"
                src={listing}
                alt="Property Listing"
              />
            </div>

            <section className="py-10">
              <div className="container mx-auto px-4 text-center">
                {/* <h3 className="text-4xl font-extrabold text-indigo-800 mb-8">
                  <br>
                  </br>
                  Why Choose GharPadharo?
                </h3> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  {/* <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="flex items-center justify-center mb-4">
                      <img
                        src="https://img.icons8.com/fluency/48/verified-account.png"
                        alt="Verified Tenants"
                        className="h-12 w-12"
                      />
                    </div>
                    <h4 className="font-semibold text-xl text-indigo-700 mb-4">
                      Reach Verified Tenants
                    </h4>
                    <p className="text-gray-600">
                      Access a wide pool of verified tenants actively searching for properties like yours.
                    </p>
                  </div> */}

                  {/* Card 2 */}
                  {/* <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="flex items-center justify-center mb-4">
                      <img
                        src="https://img.icons8.com/fluency/48/home-page.png"
                        alt="Effortless Management"
                        className="h-12 w-12"
                      />
                    </div>
                    <h4 className="font-semibold text-xl text-indigo-700 mb-4">
                      Effortless Property Management
                    </h4>
                    <p className="text-gray-600">
                      Manage your listings, availability, and inquiries seamlessly with our intuitive platform.
                    </p>
                  </div> */}

                  {/* Card 3 */}
                  {/* <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="flex items-center justify-center mb-4">
                      <img
                        src="https://img.icons8.com/fluency/48/visible.png"
                        alt="Visibility"
                        className="h-12 w-12"
                      />
                    </div>
                    <h4 className="font-semibold text-xl text-indigo-700 mb-4">
                      Maximized Visibility
                    </h4>
                    <p className="text-gray-600">
                      Showcase your property to thousands of potential tenants and increase your occupancy rate.
                    </p>
                  </div> */}

                  {/* Card 4 */}
                  {/* <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="flex items-center justify-center mb-4">
                      <img
                        src="https://img.icons8.com/fluency/48/contract.png"
                        alt="Fair Contracts"
                        className="h-12 w-12"
                      />
                    </div>
                    <h4 className="font-semibold text-xl text-indigo-700 mb-4">
                      Transparent Contracts
                    </h4>
                    <p className="text-gray-600">
                      Experience clear and hassle-free agreements with no hidden fees.
                    </p>
                  </div> */}

                  {/* Card 5 */}
                  {/* <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="flex items-center justify-center mb-4">
                      <img
                        src="https://img.icons8.com/fluency/48/customer-support.png"
                        alt="Support"
                        className="h-12 w-12"
                      />
                    </div>
                    <h4 className="font-semibold text-xl text-indigo-700 mb-4">
                      24/7 Customer Support
                    </h4>
                    <p className="text-gray-600">
                      Get round-the-clock assistance for any queries or issues.
                    </p>
                  </div> */}

                  {/* Card 6 */}
                  {/* <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <img
                      src="https://img.icons8.com/fluency/48/discount.png"

                      alt="Affordable Pricing"
                      className="h-12 w-12"
                    />

                    <h4 className="font-semibold text-xl text-indigo-700 mb-4">
                      Affordable Pricing
                    </h4>
                    <p className="text-gray-600">
                      List your property or find tenants at the best possible rates.
                    </p>
                  </div> */}
                </div>  
              </div>
            </section>
          </div>
        </div>




        {/*----------------------------------------------------------------------------Right part---------------------------------------------- */}

        <div className="left w-full md:w-1/2">
          <div className="bg-indigo-50 p-5 h-[75em]">

            {/* ------------------------------------------------------------------top of right side ---------------------------------------------*/}
            <div className="text-center mb-8">
              <div className="flex justify-center">
                <img
                  src="https://www.gharpadharo.com/img/gharpadharo.png"
                  alt="Rideroz Logo"
                  className=" h-28 mb-4 w-28"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {/* Start posting your property with GharPhadaro, it is free */}
                Free property listing on GharPhadaro!
              </h2>
            </div>


            {/* ------------------------------------------------------------form starts from here -----------------------------------------------*/}
            <form className="space-y-4"
              onSubmit={handleSubmit}
              encType="multipart/form-data">

              {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
              {/* //accomodation image upload */}

              {/* -----------------------------------------------------------accomodation image-------------------------------------------------- */}
              <div className="flex justify-center border p-2 border-indigo-800 rounded-md border-dashed">
                {formData.accomodationImage ? (
                  <div className="flex flex-col items-center">
                    <img
                      className="w-24 h-24 border-2 rounded-full"
                      src={URL.createObjectURL(formData.accomodationImage)}
                      alt="Uploaded"
                    />
                    <button
                      className="mt-4 px-4 py-2 bg-indigo-400 text-white rounded"
                      onClick={resetImage}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <label htmlFor="file-upload" className="custom-file-upload">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/12260/12260085.png"
                      className="h-20 w-20"
                      alt="Upload"
                    />
                    <input
                      id="file-upload"
                      ref={fileInputRef}
                      name="accomodationImage"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {/* -----------------------------------------------------------accomodation type and name-------------------------------------------------- */}
              <div className="flex flex-col sm:flex-row gap-4">

                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    name="accomodationType"
                    placeholder="Select Accomodation Type"
                    value={formData.accomodationType}
                    onChange={handleChange}
                    onClick={() => setShowAccomodationTypeDropdown(!showAccomodationTypeDropdown)}
                    className="bg-indigo-50 outline-none w-full py-2 px-3 border border-indigo-400 rounded-md placeholder-gray-700"
                    readOnly
                  />
                  {showAccomodationTypeDropdown && (
                    <div className="absolute w-[23em] mt-1 bg-white  z-50 border border-gray-400 rounded-md ">
                      <div
                        onClick={() => handleAccomodationTypeSelect("pg")}
                        className="cursor-pointer p-2 hover:bg-gray-200 rounded-t-lg"
                      >
                        PG
                      </div>
                      <div
                        onClick={() => handleAccomodationTypeSelect("flat")}
                        className="cursor-pointer p-2  hover:bg-gray-200"
                      >
                        Flat
                      </div>
                      <div
                        onClick={() => handleAccomodationTypeSelect("rental")}
                        className="cursor-pointer p-2 hover:bg-gray-200 rounded-t-lg"
                      >
                        Rental
                      </div>
                      <div
                        onClick={() => handleAccomodationTypeSelect("hostel")}
                        className="cursor-pointer p-2  hover:bg-gray-200"
                      >
                        Hostel
                      </div>
                    </div>
                  )}

                </div>

                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    name="accomodationName"
                    placeholder="Enter Accomodation Full Name"
                    value={formData.accomodationName}
                    onChange={handleChange}
                    className="bg-indigo-50 outline-none w-full py-2 px-3 border border-indigo-400 rounded-md placeholder-gray-700"
                  />
                </div>
              </div>

              {/* -----------------------------------------------------------owner name and email-------------------------------------------------- */}
              <div className="flex flex-col sm:flex-row gap-4">

                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    name="ownerName"
                    placeholder="Owner Name"
                    value={formData.ownerNameender}
                    onChange={handleChange}
                    className="bg-indigo-50 outline-none w-full py-2 px-3 border border-indigo-400 rounded-md placeholder-gray-700"
                  />

                </div>

                <div className="w-full sm:w-1/2">
                  <input
                    type="email"
                    name="ownerEmail"
                    placeholder="Enter Email"
                    value={formData.ownerEmail}
                    onChange={handleChange}
                    className="bg-indigo-50 outline-none w-full py-2 px-3 border border-indigo-400 rounded-md placeholder-gray-700"
                  />
                </div>
              </div>


              {/* -----------------------------------------------------------owner number and password---------------------------------------------- */}
              <div className="flex flex-col sm:flex-row gap-4">

                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    name="ownerPhoneNumber"
                    placeholder="Enter Phone Number"
                    value={formData.ownerPhoneNumber}
                    onChange={handleChange}
                    className="bg-indigo-50 outline-none w-full py-2 px-3 border border-indigo-400 rounded-md placeholder-gray-700"
                  />
                </div>

                <div className="w-full sm:w-1/2 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-indigo-50 outline-none w-full py-2 px-3 border border-indigo-400 rounded-md placeholder-gray-700"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <Eye className="text-gray-500 h-5 w-5" />
                    ) : (
                      <EyeOff className="text-gray-500 h-5 w-5" />
                    )}
                  </button>

                </div>


              </div>

              {/* -----------------------------------------------------------locality select-------------------------------------------------------- */}
              <div className="w-full relative">
                <input
                  type="text"
                  name="selectLocality"
                  placeholder="Search for your Localities"
                  value={searchTerm}
                  onChange={handleCitySearch}
                  className="bg-indigo-50 outline-none w-full py-2 px-3 border border-indigo-400 rounded-md placeholder-gray-700"
                />

                {isLocalitiesLoading && (
                  <div className=" mt-1 bg-white  border border-gray-400 rounded-md w-full p-2">
                    <p className=" text-center">Loading cities...</p>
                  </div>
                )}

                {/* <pre>{JSON.stringify({data: cities, error: citiesError, isLoading: isCitiesLoading},null,2)}</pre> */}
                {localitiesError && (
                  <div className=" mt-1 bg-white  border border-red-400 rounded-md w-full p-2">
                    <p className="text-red-500 text-center">{localitiesError?.data?.error}</p>
                  </div>
                )}

                {showLocalitiesDropDown && !isLocalitiesLoading && !localitiesError && filteredLocalities?.length > 0 && (
                  <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full max-h-40 overflow-y-auto">
                    {filteredLocalities.map((locality) => (
                      <div
                        key={locality.id}
                        onClick={() => handleCitySelect(locality.localityName, locality._id)}
                        className="cursor-pointer p-2 hover:bg-gray-200"
                      >
                        {locality.localityName}
                      </div>
                    ))}
                  </div>
                )}


                {!isLocalitiesLoading && !localitiesError && showLocalitiesDropDown && filteredLocalities.length === 0 && (
                  <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full p-2">
                    <p className=" text-center">No cities found.</p>
                  </div>
                )}
              </div>


              {/* -----------------------------------------------------------Gender select-------------------------------------------------------- */}
              <div className="w-full relative">
                <input
                  type="text"
                  name="gender"
                  placeholder="Select Gender"
                  value={formData.gender}
                  onChange={handleChange}
                  onClick={() => setShowGenderDropdown(!showGenderDropdown)}
                  className="bg-indigo-50 outline-none w-full py-2 px-3 border border-indigo-400 rounded-md placeholder-gray-700"
                  readOnly
                />
                {showGenderDropdown && (
                  <div className="absolute mt-1 bg-white z-50 border border-gray-400 rounded-md w-full">
                    <div
                      onClick={() => handleGenderSelect("male")}
                      className="cursor-pointer p-2 hover:bg-gray-200 rounded-t-lg"
                    >
                      Male
                    </div>
                    <div
                      onClick={() => handleGenderSelect("female")}
                      className="cursor-pointer p-2  hover:bg-gray-200"
                    >
                      Female
                    </div>
                    <div
                      onClick={() => handleGenderSelect("other")}
                      className="cursor-pointer rounded-b-lg p-2 hover:bg-gray-200"
                    >
                      Other
                    </div>
                  </div>
                )}
              </div>


              <div className="text-center">
                <Button
                  variant=""
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white outline-none py-3 px-4 rounded-md w-full shadow-none hover:shadow-none flex justify-center"
                  disabled={isAddingAccomodation || !isFormValid()}
                >
                  {isAddingAccomodation ? <Spinner /> : "Register for a FREE account"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </Layout >
  );
};

export default ListPropertyPage;
