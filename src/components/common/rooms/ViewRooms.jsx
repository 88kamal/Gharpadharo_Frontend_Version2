import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Button, Spinner } from "@material-tailwind/react";
import { FaWifi, FaWater, FaShower, FaEdit, FaTrashAlt, FaCheckCircle } from 'react-icons/fa';

const ViewRooms = ({ data, isLoading, error, setPage, setLimit }) => {
  const { rooms, totalRooms, currentPage, totalPages } = data || {}; // Ensure proper destructuring when data is undefined

  const handleNextPage = () => {
    if (currentPage < totalPages) setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleEditRoom = (roomId) => {
    console.log("Edit Room: ", roomId);
  };

  const handleChangeAvailability = (roomId) => {
    console.log("Change Availability: ", roomId);
  };

  const handleDeleteRoom = (roomId) => {
    console.log("Delete Room: ", roomId);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  // isLoading = true
  return (
    <div className="border border-indigo-300 rounded-lg p-6">
      <Typography className="text-3xl font-bold mb-8 text-center text-indigo-800">Added Rooms</Typography>

<div className="border border-dashed  border-indigo-300 p-6 border-2">
 {isLoading && (
        <div className="flex justify-center items-center h-full">
          <Spinner className="text-indigo-600" />
        </div>
      )}

      {error && (
        <div className=" flex flex-col items-center text-center text-red-600">
          <img className='w-30 h-30 ' src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="not found" />
          <p>{error.data.error}</p>
        </div>
      )}

      {!isLoading && !error && rooms?.length > 0 && (
        <div className="grid border grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <div
              key={room._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden border transform transition-all hover:scale-105"
            >
              <div className="relative">
                <Slider {...carouselSettings} className="relative">
                  {room.roomImage.map((image) => (
                    <div key={image._id}>
                      <img
                        src={image.url}
                        alt={room.roomName}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="p-4">
                <h2 className="text-lg text-indigo-700 font-bold mb-2">
                  {room.roomName} - {room.roomType}
                </h2>
                <p className="text-sm text-gray-700 mb-2 font-medium">
                  <span className="font-bold">Room-Details:</span> {room.roomDetails}
                </p>
                <p className="text-sm text-gray-700 font-medium">

                  <span className="font-bold">Electricity:</span> {room.electricityBill}
                </p>

                <div className="grid grid-cols-2 gap-2 mt-4 mb-4">
                  <div
                    className={`flex items-center justify-center p-2 rounded-lg ${room.wifiAvailability ? ' text-green-600' : '  text-red-600'}`}
                  >
                    <FaWifi size={20} />
                  </div>
                  <div
                    className={`flex items-center justify-center p-2 rounded-lg ${room.roAvailbility ? ' text-green-600' : '  text-red-600'}`}
                  >
                    <FaWater size={20} />
                  </div>
                  <div
                    className={`flex items-center justify-center p-2 rounded-lg ${room.geyserAvailbility ? '  text-green-600' : '  text-red-600'}`}
                  >
                    <FaShower size={20} />
                  </div>
                  <div
                    className={`flex items-center justify-center p-2 rounded-lg ${room.roomAvailability ? '  text-green-600' : '  text-red-600'}`}
                  >
                    <FaCheckCircle size={20} />
                  </div>
                </div>

                <div className="flex justify-between mt-4 border-t pt-4">
                  <button
                    onClick={() => handleEditRoom(room._id)}
                    className="flex items-center justify-center   p-2"
                  >
                    <FaEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleChangeAvailability(room._id)}
                    className="flex items-center justify-center p-2"
                  >
                    <FaCheckCircle size={20} />
                  </button>
                  <button
                    onClick={() => handleDeleteRoom(room._id)}
                    className="flex items-center justify-center p-2 "
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && !error && totalRooms > 0 && (
        <div className="flex justify-between items-center mt-6">
          <Button
            disabled={currentPage === 1 || totalPages === 0}
            onClick={handlePreviousPage}
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
          >
            Previous
          </Button>
          <Typography className="text-indigo-700">
            Page {currentPage} of {totalPages || 1}
          </Typography>
          <Button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={handleNextPage}
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
          >
            Next
          </Button>
        </div>
      )}

</div>
     
    </div>
  );
};

export default ViewRooms;
