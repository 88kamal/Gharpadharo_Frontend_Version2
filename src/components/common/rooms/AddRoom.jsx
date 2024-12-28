import { useEffect, useRef, useState } from "react";
import { Button, Checkbox, Input, Textarea } from "@material-tailwind/react";
import { useAddRoomsMutation } from "../../../redux/slices/roomApiSlice";
import toast from "react-hot-toast";

const roomType = ["1r", "1rk", "1bhk", "2bhk", "3bhk"]; // Array of vehicle types

const AddRoom = () => {
  const [formData, setFormData] = useState({
    roomType: "",
    roomName: "",
    roomPrice: "",
    roomDetails: "",
    electricityBill: "",
    roomImage: [],
    roomAvailability: false,
    geyserAvailbility: false,
    wifiAvailability: false, // Fixed spelling
    roAvailbility: false,
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  const [addRooms, { isLoading, isSuccess, isError, error, data }] =
    useAddRoomsMutation();
  const [imagePreview, setImagePreview] = useState(null); // For showing image preview
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown open/close

  const fileInputRef = useRef(null); // Create a ref for the file input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 4); // Accept only up to 4 files
    setFormData((prevData) => ({ ...prevData, roomImage: files }));
    setImagePreviews(files.map((file) => URL.createObjectURL(file))); // Create previews for all images
  };

  const handleAvailabilityChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      roomAvailability: e.target.checked,
    }));
  };

  const handleRoAvailabilityChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      roAvailbility: e.target.checked,
    }));
  };
  const handleWifiAvailabilityChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      wifiAvailability: e.target.checked,
    }));
  };
  const handleGeyserAvailabilityChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      geyserAvailbility: e.target.checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const roomData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "roomImage") {
        value.forEach((file) => roomData.append("roomImage", file)); // Append each image
      } else {
        roomData.append(key, value);
      }
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
      toast.error(
        error?.data?.error || "Failed to add Room, please try again",
        "error"
      );
    }

    if (isSuccess) {
      toast.success(data?.message, "success", 2000);
      setFormData({
        roomType: "",
        roomName: "",
        roomPrice: "",
        roomDetails: "",
        electricityBill: "",
        roomImage: [],
        roomAvailability: false,
        geyserAvailbility: false,
        wifiAvailability: false, // Fixed spelling
        roAvailbility: false,
      });
      setImagePreviews([]);
      // Reset the file input manually
      if (fileInputRef.current) {
        fileInputRef.current.value = null; // This clears the file input field
      }
      setImagePreview("");
    }
  }, [isError, error, isSuccess, data]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto p-3 bg-white border border-indigo-400 rounded-md"
    >
      <div className="text-center bg-indigo-50 py-6 rounded-md mb-4 border border-indigo-300">
        <div className="flex justify-center">
          <img
            src="https://www.gharpadharo.com/img/gharpadharo.png"
            alt="Gharpadharo Logo"
            className="h-30 w-48 mb-2"
          />
        </div>
        {/* <h2 className="text-xl font-bold text-indigo-800 app-font">
          Add Room
        </h2> */}
      </div>
      {/* <pre>{JSON.stringify(formData,null,2)}</pre> */}

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <div className=" relative">
            <div
              className="w-full px-4 py-2 border border-[#b0bec5] text-indigo-600 rounded-md focus:outline-none cursor-pointer"
              onClick={toggleDropdown}
            >
              {formData.roomType ? formData.roomType : "Select Room Type"}
            </div>
            {isDropdownOpen && (
              <ul className="absolute w-full bg-white border border-[#b0bec5] rounded-md mt-1 z-10">
                {roomType.map((type, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-indigo-100 rounded-md cursor-pointer"
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
              label="Room Name "
              name="roomName"
              value={formData.roomName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md "
              color="indigo"
              style={{ fontSize: "16px" }} // Add this to prevent zooming
            />
          </div>
        </div>
      </div>


      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <div className="mb-4">
            <Input
              label="Room Price"
              type="number"
              name="roomPrice"
              value={formData.roomPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md "
              color="indigo"
              style={{ fontSize: "16px" }} // Add this to prevent zooming
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <div className="mb-4">
            <Input
              label="Electricity Details"
              type="text"
              name="electricityBill"
              value={formData.electricityBill}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md "
              color="indigo"
              style={{ fontSize: "16px" }} // Add this to prevent zooming
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <div className="-mb-1.5">
            <Textarea
              label="Room Details"
              name="roomDetails"
              value={formData.roomDetails}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md "
              color="indigo"
              style={{ fontSize: "16px" }} // Add this to prevent zooming
            ></Textarea>
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <div className="mb-4">
            <div className=" border border-[#b0bec5] rounded-md ">
              <h1 className=" mb-1.5 bg-indigo-200 px-2 py-2 rounded-t-md text-black">
                Vehicle Image
              </h1>
              <input
                type="file"
                ref={fileInputRef}
                name="roomImage"
                onChange={handleFileChange}
                multiple
                className="block w-full text-sm text-indigo-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer px-2 py-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Previews */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imagePreviews.map((preview, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={preview}
              alt={`Preview ${index + 1}`}
              className="w-32 h-32 object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {/* room Availability */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center border border-indigo-400 rounded-md">
        <Checkbox
          label="Room Availability"
          type="checkbox"
          name="roomAvailability"
          checked={formData.roomAvailability}
          onChange={handleAvailabilityChange}
          className="h-4 w-4 text-indigo rounded"
        />
        <Checkbox
          label="Geyser Availability"
          type="checkbox"
          name="geyserAvailbility"
          checked={formData.geyserAvailbility}
          onChange={handleGeyserAvailabilityChange}
          className="h-4 w-4 text-indigo rounded"
        />
        <Checkbox
          label="Wifi Availability"
          type="checkbox"
          name="vehicleAvaigeyserAvailbilitylability"
          checked={formData.wifiAvailability}
          onChange={handleWifiAvailabilityChange}
          className="h-4 w-4 text-indigo rounded"
        />
        <Checkbox
          label="Ro Availability"
          type="checkbox"
          name="roAvailbility"
          checked={formData.roAvailbility}
          onChange={handleRoAvailabilityChange}
          className="h-4 w-4 text-indigo rounded"
        />
      </div>

      <Button
        variant=""
        type="submit"
        disabled={isLoading}
        className="w-full px-4 hover:shadow-none shadow-none py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 "
      >
        {isLoading ? "Adding..." : "Add Vehicle"}
      </Button>
    </form>
  );
};

export default AddRoom;
