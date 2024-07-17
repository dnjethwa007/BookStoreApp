import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Course from "./Courses/Courses"
import Signup from "./component/Signup"
import Contact from "./Contact/Contacts"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}