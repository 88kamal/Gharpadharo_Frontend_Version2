import { useNavigate, useParams } from "react-router-dom";
import { useGetRoomByIdQuery } from "../../../redux/slices/roomApiSlice";
// import { useCreateOrderMutation, useVerifyPaymentMutation } from "../../../redux/slices/orderApiSlice";
import Layout from "../../layout/Layout";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { TicketMinus } from "lucide-react";
import { useCreateOrderMutation, useVerifyPaymentMutation } from "../../../redux/slices/orderSlice";
import authService from "../../../services/authService";
import toast from "react-hot-toast";

function ViewRoom() {
    const { roomId } = useParams();
    const { data: room, error, isLoading } = useGetRoomByIdQuery(roomId);
    const [createOrder] = useCreateOrderMutation();
    const [verifyPayment] = useVerifyPaymentMutation();
    const navigate = useNavigate();
    const [slideImage, setSlideImage] = useState("");



    const user=authService.getCurrentUser();

    const imageData = {
        image1: room?.roomImage[0]?.url,
        image2: room?.roomImage[1]?.url,
        image3: room?.roomImage[2]?.url,
        image4: room?.roomImage[3]?.url,
    };

    const { image1, image2, image3, image4 } = imageData;

    const handlePayment = async () => {
        try {
            // Create order
            const response = await createOrder({ roomId }).unwrap();
            console.log("Order Response:", response);
    
            if (!response || !response.orderId || !response.amount || !response.currency) {
                throw new Error("Invalid response from createOrder API.");
            }
    
            const { orderId, amount, currency } = response;
    
            // Load Razorpay script
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.async = true;
            document.body.appendChild(script);
    
            script.onload = () => {
                const options = {
                    key: "rzp_test_g5AsFWLIQ1qm2L", // Razorpay API Key
                    amount: amount,
                    currency: currency,
                    name: "Room Booking",
                    description: "Secure Payment for Room Booking",
                    order_id: orderId,
                    handler: async (response) => {
                        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
    
                        // Verify payment
                        const verifyResponse = await verifyPayment({
                            razorpay_payment_id,
                            razorpay_order_id,
                            razorpay_signature,
                        }).unwrap();
    
                        if (verifyResponse.message === "Payment verified successfully") {
                            toast.success("Payment successful! Room booked.");
                            navigate("/user-dashboard/user-dashboard");
                        } else {
                            toast.error("Payment verification failed.");
                        }
                    },
                    prefill: {
                        name: user.userName,
                        email: user.userEmail,
                        contact: user.contact,
                    },
                    theme: {
                        color: "#6C63FF",
                    },
                };
    
                const rzp = new window.Razorpay(options);
                rzp.open();
            };
        } catch (error) {
            console.error("Error in payment:", error.data.error);
            if(error.data.error==="Access denied. Re-login"||error.data.error==="User not found"){
                navigate('/login')
            }
            toast.error(error.data.error);
        }
    };
    

    return (
        <Layout>
            <section className="py-4 p-2">
                <div className="container border-2 border-indigo-300 rounded p-4 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left Section */}
                        <div className="flex flex-col items-center lg:items-start">
                            <div className="w-full max-w-md lg:max-w-lg overflow-hidden rounded-lg border">
                                <img
                                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                                    style={{
                                        filter: `${isLoading ? 'blur(20px)' : ''}`,
                                        transition: '1s filter linear',
                                    }}
                                    src={slideImage || image1}
                                    alt="Room"
                                />
                            </div>

                            <div className="flex flex-wrap mt-4 justify-center lg:justify-start gap-2">
                                {[image1, image2, image3, image4].map((img, index) => (
                                    img && (
                                        <button
                                            key={index}
                                            onClick={() => setSlideImage(img)}
                                            className="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-lg border focus:border-[#b88ef6]"
                                        >
                                            <img
                                                className="w-full h-full object-cover"
                                                style={{
                                                    filter: `${isLoading ? 'blur(20px)' : ''}`,
                                                    transition: '1s filter linear',
                                                }}
                                                src={img}
                                                alt={`Room Thumbnail ${index + 1}`}
                                            />
                                        </button>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col border-2 border-dashed border-indigo-300 rounded p-4">
                            <h2 className="text-lg font-semibold text-gray-600">{room?.accomodation?.accomodationName} [Gharpadharo]</h2>
                            <h1 className="text-2xl font-bold text-gray-900 mt-2">{room?.roomName}</h1>

                            <div className="flex items-center justify-between mt-5">
                                <h1 className="text-xl font-semibold">₹ {room?.roomPrice}</h1>
                                <span
                                    className={`px-2 py-1 text-sm rounded ${
                                        room?.roomAvailability ? "bg-green-600 text-white" : "bg-red-600 text-white"
                                    }`}
                                >
                                    {room?.roomAvailability ? "Available" : "Unavailable"}
                                </span>
                            </div>

                            <Button
                                disabled={!room?.roomAvailability}
                                onClick={handlePayment}
                                className={`mt-5 w-full flex items-center justify-center py-2 bg-indigo-500 text-white rounded-md ${
                                    !room?.roomAvailability ? "bg-gray-400 cursor-not-allowed" : "hover:bg-indigo-600"
                                }`}
                            >
                                <TicketMinus className="mr-2" />
                                Book Now
                            </Button>

                            <div className="mt-6">
                                <h2 className="text-lg font-bold">Information:</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <div className="border p-2 rounded-md mb-2">
                                            <strong>Room Type:</strong> {room?.roomType}
                                        </div>
                                        <div className="border p-2 rounded-md mb-2">
                                            <strong>RO Water:</strong> {room?.roAvailbility ? "Available" : "Unavailable"}
                                        </div>
                                        <div className="border p-2 rounded-md mb-2">
                                            <strong>WiFi:</strong> {room?.wifiAvailbility ? "Available" : "Unavailable"}
                                        </div>
                                        <div className="border p-2 rounded-md mb-2">
                                            <strong>Geyser:</strong> {room?.geyserAvailbility ? "Available" : "Unavailable"}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border p-2 rounded-md mb-2">
                                            <strong>Locality:</strong> {room?.roomLocality?.localityName}
                                        </div>
                                        <div className="border p-2 rounded-md mb-2">
                                            <strong>Electricity:</strong> {room?.electricityBill}
                                        </div>
                                        <div className="border p-2 rounded-md mb-2">
                                            <strong>Booking Charges:</strong> ₹100
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h2 className="text-lg font-bold">Description:</h2>
                                <p>{room?.roomDetails}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default ViewRoom;
