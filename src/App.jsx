import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import NoPage from "./pages/noPage/NoPage";
import LoginPage from "./pages/registration/LoginPage";
import SignupPage from "./pages/registration/SignupPage";
import ListPropertyPage from "./pages/registration/ListPropertyPage";
import { Toaster } from "react-hot-toast";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import AdminHomePage from "./pages/dashboard/admin/pages/AdminHomePage";
import ShowAllRoomPage from "./pages/dashboard/admin/pages/ShowAllRoomPage";
import ProfilePage from "./pages/dashboard/admin/pages/ProfilePage";
import UserProfilePage from "./pages/dashboard/user/pages/UserProfilePage";
import UserHomePage from "./pages/dashboard/user/pages/UserHomePage";
import UserDashboard from "./pages/dashboard/user/UserDashboard";
import AdminViewAllBookingRoom from "./pages/dashboard/admin/pages/AdminViewAllBookingRoom";
import RoomOwnerRoomBookPage from "./pages/dashboard/roomOwner/pages/RoomOwnerRoomBookPage";
import RoomOwnerDashboard from "./pages/dashboard/roomOwner/RoomOwnerDashboard";
import { ProtectedRoute } from "./protectedRoute/ProtectedRoute";
import ShowUserAndAccomodationOwner from "./pages/dashboard/admin/pages/ShowUserAndAccomodationOwner";
import RoomOwnerProfilePage from "./pages/dashboard/roomOwner/pages/RoomOwnerProfilePage";
import RoomOwnerAddRoomPage from "./pages/dashboard/roomOwner/pages/RoomOwnerAddRoomPage";
import RoomOwnerAllRoomPage from "./pages/dashboard/roomOwner/pages/RoomOwnerAllRoomPage";
import AdminViewAllRoomsOfAccomodationOwner from "./pages/dashboard/admin/pages/AdminViewAllRoomsOfAccomodationOwner";
import ViewRoom from "./components/common/rooms/ViewRoom";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/list-property" element={<ListPropertyPage />} />
        <Route path="/view-room/:roomId" element={<ViewRoom />} />
        <Route path="/*" element={<NoPage />} />


        <>
          <Route
            path="admin-dashboard"
            element={
              <ProtectedRoute requiredRole={2}>
                <AdminDashboard />
              </ProtectedRoute>
            }>

            <Route
              index={true}
              path="admin-home-page"
              element={<AdminHomePage />}
            />

            <Route
              path="admin-view-all-room"
              element={<ShowAllRoomPage />}
            />

            <Route
              path="admin-view-all-users-and-accomodation-owners"
              element={<ShowUserAndAccomodationOwner />}
            />

            <Route
              path="admin-view-all-users-and-accomodation-owners/admin-view-all-rooms-of-accomodation-owners/:accomodationId"
              element={<AdminViewAllRoomsOfAccomodationOwner />}
            />

            <Route
              path="admin-profile"
              element={<ProfilePage />}
            />

            <Route
              path="admin-view-all-book-room"
              element={<AdminViewAllBookingRoom />}
            />


          </Route>
        </>






        <>
          <Route
            path="user-dashboard"
            element={
              <ProtectedRoute requiredRole={15}>
                <UserDashboard />
              </ProtectedRoute>
            }>

            <Route
              index={true}
              path="user-home-page"
              element={<UserHomePage />}
            />

            <Route
              path="user-view-book-romm"
              element={<ShowAllRoomPage />}
            />

            <Route
              path="user-profile"
              element={<UserProfilePage />}
            />
          </Route>
        </>






        <>
          <Route
            path="room-owner-dashboard"
            element={
              <ProtectedRoute requiredRole={14}>
                <RoomOwnerDashboard />
              </ProtectedRoute>
            }>

            <Route
              index={true}
              path="room-owner-home-page"
              element={<AdminHomePage />}
            />

            <Route
              path="room-owner-add-room"
              element={<RoomOwnerAddRoomPage />}
            />

            <Route
              path="room-owner-view-all-rooms"
              element={<RoomOwnerAllRoomPage />}
            />

            <Route
              path="room-owner-profile"
              element={<RoomOwnerProfilePage />}
            />

            <Route
              path="room-owner-view-all-book-room"
              element={<RoomOwnerRoomBookPage />}
            />
          </Route>
        </>
      </Routes>
      <Toaster />

    </div>
  )
}

export default App
