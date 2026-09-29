import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AiToolService from "../components/AiToolService"
import Testimonial from "../components/Testimonial"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <AiToolService/>
            <Testimonial/>
        </div>
    )
}

export default Home