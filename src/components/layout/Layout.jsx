/* eslint-disable react/prop-types */
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"

function Layout({ children }) {
    return (
        <div className=''>
            <Navbar/>
            <div className=" min-h-screen  ">
                {children}
            </div>
            <Footer />
        </div >
    )
}

export default Layout