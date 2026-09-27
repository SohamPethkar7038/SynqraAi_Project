import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AiToolService from "../components/AiToolService"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <AiToolService/>
        </div>
    )
}

export default Home