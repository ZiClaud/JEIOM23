import React from "react"
import Navbar from "@atoms/Navbar"
import PhotosHero from "@molecules/PhotosHero"
import GallerySection from "@molecules/GallerySection"
import Footer from "@organisms/Footer"


const photos = () => (
  <>
    <Navbar />
    <PhotosHero />
    <div className="content-center justify-center flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
           className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
      </svg>
    </div>
    <GallerySection />
    <Footer/>
  </>
)
export default photos
