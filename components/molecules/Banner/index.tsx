"use client"

import React, { FC, useState } from "react"
import BannerProps from "./index.types"
import Typography from "@atoms/Typography"
import Button from "@atoms/Button"

const Banner: FC<BannerProps> = ({}) => {
  const [isOpen, setisOpen] = useState(true)
  return (
    <div
      className={`w-screen h-[44px] fixed bottom-0 inset-x-0 bg-white bg-opacity-30 backdrop-blur-sm flex flex-row items-center justify-between ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-banner h-full bg-cover bg-no-repeat">
        <Typography variant="p" className="font-bold">
          Hai bisogno di aiuto?
        </Typography>
      </div>
      <Button url="mailto:info@jeiom23.it" useUrl={true}>
        info@jeiom23.it
      </Button>
    </div>
  )
}

export default Banner
