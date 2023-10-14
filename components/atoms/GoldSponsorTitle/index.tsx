import React, { FC, useEffect, useState } from "react"
import GoldSponsorTitleProps from "./index.types"
import Image from "next/image"
import Gold from "@/public/GoldSponsor.webp"
import Typography from "../Typography"

const GoldSponsorTitle: FC<GoldSponsorTitleProps> = ({}) => {
  const [rotationAngle, setRotationAngle] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      const rotationFactor = 0.2

      const newRotationAngle = scrollPosition * rotationFactor
      setRotationAngle(newRotationAngle)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className="relative w-full flex items-center justify-center">
      <div
        className="absolute inset-0 transform transition-transform duration-500 ease-in-out mx-auto my-auto w-fit h-fit"
        style={{
          transform: `rotate(${rotationAngle}deg)`,
        }}
      >
        <Image
          src={Gold}
          alt="Gold Sponsor Circle"
          className="laptop:scale-125"
        />
      </div>

      <Typography
        variant="sponsorTitle"
        className="absolute uppercase mx-auto text-center align-middle"
      >
        Gold <br />
        Sponsor
      </Typography>
    </div>
  )
}

export default GoldSponsorTitle
