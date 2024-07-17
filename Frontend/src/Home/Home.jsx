import React from 'react'
import Navbar from '../component/Navbar'
import Banner from "../component/Banner"
import Footer from "../component/Footer"
import Freebook from "../component/Freebook"
function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Freebook />
            <Footer />
        </div>
    )
}

export default Home