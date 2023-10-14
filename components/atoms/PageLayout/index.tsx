import React, { FC } from "react"
import PageLayoutProps from "./index.types"
import Navbar from "@atoms/Navbar"
import Footer from "@organisms/Footer"

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <main className="bg-black-jeiom">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default PageLayout
