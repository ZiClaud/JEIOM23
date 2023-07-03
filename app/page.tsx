import Map from "@organisms/Map"
import AboutUs from "@organisms/AboutUs"
import Sponsor from "@organisms/Sponsor"
import Footer from "@organisms/Footer"
import PageBreak from "@atoms/PageBreak"
import Navbar from "@molecules/Navbar"
import Hero from "@organisms/Hero"
import Patrocini from "@organisms/Patrocini"

import SustainableDevelopment from "@molecules/SustainableDevelopment"
export default function Home() {
  return (
    <main className="relative w-screen flex flex-col items-center justify-between bg-black-jeiom">
      <div className="bg-hero-mob tablet:bg-hero bg-cover bg-no-repeat flex flex-col gap-16">
        <div className="hidden">
          <Navbar />
        </div>
        <Hero />
      </div>

      <SustainableDevelopment />
      <Map />
      <AboutUs />
      <PageBreak />
      <Sponsor className="hidden" />
      <Patrocini />
      <Footer />
    </main>
  )
}
