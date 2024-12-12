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



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/list-property" element={<ListPropertyPage />} />
          <Route path="/*" element={<NoPage />} />


          <>
            <Route
              path="admin-dashboard"
              element={
                <AdminDashboard />
              }>

              <Route
                index={true}
                path="admin-home-page"
                element={<AdminHomePage />}
              />

              <Route
                index={true}
                path="admin-view-all-room"
                element={<ShowAllRoomPage />}
              />

              <Route
                index={true}
                path="admin-profile"
                element={<ProfilePage />}
              />

              <Route
                index={true}
                path="admin-view-all-book-room"
                element={<AdminViewAllBookingRoom />}
              />
            </Route>
          </>

          <>
            <Route
              path="user-dashboard"
              element={
                <UserDashboard />
              }>

              <Route
                index={true}
                path="user-home-page"
                element={<UserHomePage />}
              />

              <Route
                index={true}
                path="user-view-book-romm"
                element={<ShowAllRoomPage />}
              />

              <Route
                index={true}
                path="user-profile"
                element={<UserProfilePage />}
              />
            </Route>
          </>

          <>
            <Route
              path="room-owner-dashboard"
              element={
                <AdminDashboard />
              }>

              <Route
                index={true}
                path="room-owner-home-page"
                element={<AdminHomePage />}
              />

              <Route
                index={true}
                path="room-owner-view-all-romm"
                element={<ShowAllRoomPage />}
              />

              <Route
                index={true}
                path="room-owner-profile"
                element={<UserProfilePage />}
              />

<Route
                index={true}
                path="room-owner-view-all-book-room"
                element={<RoomOwnerRoomBookPage />}
              />
            </Route>
          </>
        </Routes>
        <Toaster />
      </Router>
    </div>
  )
}

export default App
