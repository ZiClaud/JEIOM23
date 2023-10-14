import React from "react"
import Navbar from "@atoms/Navbar"
import Hero from "@organisms/Hero"
import EventDescription from "@organisms/EventDescription"
import Mission from "@molecules/Mission"
import SustainableDevelopment from "@molecules/SustainableDevelopment"
import Map from "@organisms/Map"
import AboutUs from "@organisms/AboutUs"
import PageBreak from "@atoms/PageBreak"
import Sponsor from "@organisms/Sponsor"
import Patrocini from "@organisms/Patrocini"
import Footer from "@organisms/Footer"

export default function Index() {
  return (
    <>
      <main className="relative w-screen bg-black-jeiom">
        <Navbar />
        <div className="w-screen flex flex-col items-center justify-between">
          <Hero />
          <EventDescription />
          <Mission />
          <SustainableDevelopment />
          <Map />
          <AboutUs />
          <PageBreak />
          <Patrocini />
          <Footer />
        </div>
      </main>
    </>
  )
}
