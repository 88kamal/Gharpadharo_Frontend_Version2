import {  useEffect, useRef, useState } from 'react';
import { Button, Input, Textarea } from '@material-tailwind/react';
// import toast from 'react-hot-toast';
import { useAddRoomMutation } from '../../../redux/slices/roomApiSlice';

const roomType = ['1r', '1rk', '1bhk', '2bhk', '3bhk']; // Array of vehicle types

const AddRoom = () => {
  const [formData, setFormData] = useState({
    roomType: '',
    roomName: '',
    roomPrice: '',
    sittingCapacity: '',
    roomDetails: '',
    roomImage: null,
    roomAvailability: true,
  });


  const [addRooms, { isLoading, isSuccess, error }] = useAddRoomMutation();
  const [imagePreview, setImagePreview] = useState(null); // For showing image preview
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown open/close

  const fileInputRef = useRef(null); // Create a ref for the file input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, roomImage: file }));
    setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the uploaded image
  };

  const handleAvailabilityChange = (e) => {
    setFormData((prevData) => ({ ...prevData, roomAvailability: e.target.checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const roomData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      roomData.append(key, value);
    });

    await addRooms(roomData);

    if (fileInputRef.current) {
      fileInputRef.current.value = null; // This clears the file input field
    }
  };

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle vehicle type selection
  const handleRoomTypeSelect = (roomType) => {
    setFormData((prevData) => ({
      ...prevData,
      roomType,
    }));
    setIsDropdownOpen(false); // Close dropdown after selection
  };


  useEffect(() => {
    if (isError) {
      showAlert(error?.data?.error || 'Failed to add role, please try again', "error");
    }

    if (isSuccess) {
      showAlert(data?.message, "success", 2000);
      setFormData({
        roomType: '',
        roomName: '',
        roomPrice: '',
        sittingCapacity: '',
        roomDetails: '',
        roomImage: null,
        roomAvailability: true,
      })
      // Reset the file input manually
      if (fileInputRef.current) {
        fileInputRef.current.value = null; // This clears the file input field
      }
      setImagePreview("")
    }
  }, [isError, error, isSuccess, data]);


  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-3 bg-white border border-green-400 rounded-md">
      <div className="text-center bg-green-50 py-6 rounded-md mb-4 border border-green-300">
        <div className="flex justify-center">
          <img
            src="../../logo/rideroz.png"
            alt="Rideroz Logo"
            className="h-20 w-48 mb-2"
          />
        </div>
        {/* <h2 className="text-xl text-gray-800 app-font">
                            Add Vehicle
                        </h2> */}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <div className=" relative">
            <div
              className="w-full px-4 py-2 border border-[#b0bec5] text-gray-600 rounded-md focus:outline-none cursor-pointer"
              onClick={toggleDropdown}
            >
              {formData.roomType ? formData.roomType : 'Select Room Type'}
            </div>
            {isDropdownOpen && (
              <ul className="absolute w-full bg-white border border-[#b0bec5] rounded-md mt-1 z-10">
                {roomType.map((type, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                    onClick={() => handleRoomTypeSelect(type.toLowerCase())}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <div className="mb-4">
            <Input
              type="text"
              label='Room Name '
              name="roomName"
              value={formData.roomName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md "
              color='green'
              style={{ fontSize: '16px' }} // Add this to prevent zooming
            />
          </div>

        </div>
      </div>


      <div className="flex flex-col sm:flex-row gap-4">
        {/* <div className="w-full sm:w-1/2">
          <div className="">
            <Input
              label='Vehicle Number'
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md "
              color='green'
              style={{ fontSize: '16px' }} // Add this to prevent zooming
            />
          </div>
        </div> */}

        {/* <div className="w-full sm:w-1/2">
          <div className="mb-4">
            <Input
              label='Vehicle Model'
              type="text"
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md "
              color='green'
              style={{ fontSize: '16px' }} // Add this to prevent zooming
            />
          </div>
        </div> */}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <div className="">
            <Input
              label='Room Price'
              type="number"
              name="roomPrice"
              value={formData.roomPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md "
              color='green'
              style={{ fontSize: '16px' }} // Add this to prevent zooming
            />
          </div>
        </div>
      </div>


      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <div className="-mb-1.5">
            <Textarea
              label='Room Details'
              name="roomDetails"
              value={formData.roomDetails}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md "
              color='green'
              style={{ fontSize: '16px' }} // Add this to prevent zooming
            ></Textarea>
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <div className="mb-4">
            <div className=" border border-[#b0bec5] rounded-md ">
              <h1 className=' mb-1.5 bg-gray-200 px-2 py-2 rounded-t-md text-black'>Vehicle Image</h1>
              <input
                type="file"
                ref={fileInputRef}
                name="roomImage"
                onChange={handleFileChange}
                multiple
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer px-2 py-2"
              />
            </div>
          </div>
        </div>
      </div>

      <>
        {imagePreview && (
          <div className=" flex justify-center items-center border border-green-500 mb-4 rounded-md bg-white  drop-shadow">
            <img src={imagePreview} alt="Room Preview" className="mt-4 max-w-xs" />

          </div>

        )}
      </>

      {/* Vehicle Availability */}
      {/* <div className="mb-4 flex items-center border border-gray-400 rounded-md">
                <Checkbox
                    label='Vehicle Availability'
                    type="checkbox"
                    name="vehicleAvailability"
                    checked={formData.vehicleAvailability}
                    onChange={handleAvailabilityChange}
                    className="h-4 w-4 text-green rounded"
                />
            </div> */}

      <Button
        variant=''
        type="submit"
        disabled={isLoading}
        className="w-full px-4 hover:shadow-none shadow-none py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 disabled:bg-green-400 "
      >
        {isLoading ? 'Adding...' : 'Add Vehicle'}
      </Button>

      {/* {isSuccess && <p className="mt-4 text-green-600">Vehicle added successfully!</p>}
            {isError && <p className="mt-4 text-red-600">Error: {error?.data?.error}</p>} */}
    </form>
  );
};

export default AddRoom;