import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AiToolService from "../components/AiToolService"
import Testimonial from "../components/Testimonial"
import Plan from "../components/Plan"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <AiToolService/>
            <Testimonial/>
            <Plan/>
            <Footer/>
        </div>
    )
}

export default Home