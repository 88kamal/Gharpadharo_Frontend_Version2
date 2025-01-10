import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Button, Spinner } from "@material-tailwind/react";
import {
  FaEdit,
  FaTrashAlt,
  FaCheckCircle,
  FaEye,
} from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import ro from "../../../assets/ro.png";
import geyser from "../../../assets/geyser.png";
import wifi from "../../../assets/wifi.png";
// import roomavailable "../../../assets/roomavailable.png"
import authService from "../../../services/authService";
import { useNavigate } from "react-router-dom";

const ViewRooms = ({ data, isLoading, error, setPage, setLimit }) => {
  const { rooms, totalRooms, currentPage, totalPages } = data || {}; // Ensure proper destructuring when data is undefined

  const user = authService.getCurrentUser();
  const navigate = useNavigate();

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
    <div className="border-2 border-indigo-500 border-dashed rounded-lg p-4">
      {user && [2, 14].includes(user?.role) && <div className="flex flex-col sm:flex-row justify-center text-center items-center rounded-lg p-4 bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-wider drop-shadow-lg">
          Added Rooms
        </h1>
        <img className="h-10 w-10 sm:h-12 sm:w-12 ml-0 sm:ml-4 mt-2 sm:mt-0" src="https://cdn-icons-png.flaticon.com/128/578/578110.png" alt="" />
      </div>}

      {(!user || (user && ![2, 14].includes(user?.role))) && (
        <div className="flex flex-col sm:flex-row justify-center text-center items-center rounded-lg p-4 bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-wider drop-shadow-lg">
            Popular Rooms 
          </h1>
          <img className="h-10 w-10 sm:h-12 sm:w-12 ml-0 sm:ml-4 mt-2 sm:mt-0" src="https://cdn-icons-png.flaticon.com/128/578/578110.png" alt="" />
        </div>
      )}


      <div className="">
        {isLoading && (
          <div className="flex justify-center items-center mt-8 h-full">
            <Spinner className="text-indigo-600" />
          </div>
        )}

        {error && (
          <div className=" flex flex-col items-center text-center text-red-600">
            <img
              className="w-30 h-30 "
              src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png"
              alt="not found"
            />
            <p>{error.data.error}</p>
          </div>
        )}

        {!isLoading && !error && rooms?.length > 0 && (
          <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {rooms.map((room) => (
              <div
                key={room._id}
                className="bg-white shadow-md rounded-lg overflow-hidden border transition-transform transform hover:scale-105"
              >
                <div className="relative">
                  <Slider {...carouselSettings} className="relative">
                    {room.roomImage.map((image) => (
                      <div key={image._id}>
                        <img
                          src={image.url}
                          alt={room.roomName}
                          className="w-full h-40 object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="p-4">
                  {/* Availability Icons Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div
                      className={`relative flex items-center justify-center p-2 rounded-lg ${room.wifiAvailability ? "text-green-600" : "text-red-600"
                        }`}
                    >
                      <img className="w-8 h-8" src={wifi} alt="WiFi" />
                      {!room.wifiAvailability && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-black text-4xl">
                            <FcCancel />
                          </span>
                        </div>
                      )}
                    </div>
                    <div
                      className={`relative flex items-center justify-center p-2 rounded-lg ${room.roAvailbility ? "text-green-600" : "text-red-600"
                        }`}
                    >
                      <img className="w-8 h-8" src={ro} alt="RO" />
                      {!room.roAvailbility && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-black text-4xl">
                            <FcCancel />
                          </span>
                        </div>
                      )}
                    </div>
                    <div
                      className={`relative flex items-center justify-center p-2 rounded-lg ${room.geyserAvailbility ? "text-green-600" : "text-red-600"
                        }`}
                    >
                      <img className="w-8 h-8" src={geyser} alt="Geyser" />
                      {!room.geyserAvailbility && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-black text-4xl">
                            <FcCancel />
                          </span>
                        </div>
                      )}
                    </div>
                    <div
                      className={`relative flex items-center justify-center p-2 rounded-lg ${room.roomAvailability ? "text-green-600" : "text-red-600"
                        }`}
                    >
                      <img
                        className="w-8 h-8"
                        src={
                          room.roomAvailability
                            ? "https://cdn-icons-png.flaticon.com/128/5619/5619956.png"
                            : "https://cdn-icons-png.flaticon.com/128/5129/5129345.png"
                        }
                        alt="Room Availability"
                      />
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className=" rounded-lg shadow-sm p-4 bg-white max-w-md">
                    <h2 className="text-xl text-indigo-700 font-bold mb-3 truncate flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2a6 6 0 1 1-6 6 6 6 0 0 1 6-6zm0 10a8 8 0 0 0-8 8v2h16v-2a8 8 0 0 0-8-8z" />
                      </svg>
                      {room.roomName} - {room.accomodation.accomodationName}
                    </h2>
                    <div className="mb-3">
                      <p className="text-sm text-gray-600 mb-1 leading-relaxed flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-2 text-gray-500" viewBox="0 0 24 24">
                          <path d="M19 2h-4a1 1 0 0 0-1 1v1H10V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 18H7v-2h4zm0-4H7v-2h4zm6 4h-4v-2h4zm0-4h-4v-2h4zm0-6H7V7h10zm0-4H7V3h10z" />
                        </svg>
                        <span className="font-medium">Room Price:</span> {room.roomPrice}
                      </p>
                      <p className="text-sm text-gray-600 mb-1 leading-relaxed flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-2 text-gray-500" viewBox="0 0 24 24">
                          <path d="M19 3h-1V1a1 1 0 0 0-2 0v2H8V1a1 1 0 0 0-2 0v2H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 15H6v-9h12zm0-11H6V5h12z" />
                        </svg>
                        <span className="font-medium">Room Type:</span> {room.roomType}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-2 text-gray-500" viewBox="0 0 24 24">
                          <path d="M12 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" />
                        </svg>
                        <span className="font-medium">Location:</span> {room.roomLocality.localityName}
                      </p>
                    </div>
                  </div>


                  {/* Actions */}
                  {user?.role === 2 || user?.role === 14 ? (
                    <div className="flex justify-between mt-4 border-t pt-2">
                      <button
                        onClick={() => handleEditRoom(room._id)}
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        <FaEdit size={18} />
                      </button>
                      <button
                        onClick={() => handleChangeAvailability(room._id)}
                        className="text-green-600 hover:text-green-800"
                      >
                        <FaCheckCircle size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteRoom(room._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrashAlt size={18} />
                      </button>

                      <button
                        onClick={() => navigate(`/room-owner-dashboard/room-owner-view-all-book-room/room-owner-viewRoom/${room._id}`)}
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        <FaEye  size={18} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-center mt-4 border-t pt-2">
                      <button onClick={() => navigate(`/view-room/${room._id}`)} className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow hover:bg-indigo-700 transition duration-150 ease-in-out">
                      Explore Room
                      </button>
                    </div>
                  )}
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
