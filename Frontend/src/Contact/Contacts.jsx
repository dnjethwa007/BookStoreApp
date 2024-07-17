import React from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Contact from '../component/Contact';

function Contacts() {
  return (
    <>
      <div>
        <Navbar />
        <div className='min-h-screen'>
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Contacts;