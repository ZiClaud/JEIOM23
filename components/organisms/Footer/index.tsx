import React, { FC } from "react"
import FooterProps from "./index.types"
import Typography from "@atoms/Typography"
import Padding from "@atoms/Padding"
import Image from "next/image"
import JeiomLogo_02 from "public/JeiomLogo_02.png"

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div>
      <footer className="w-screen">
        <div className="flex justify-center pb-[33px]">
          <div className="w-[102px] h-[32px] tablet:w-[202px] tablet:h-[63px] laptop:w-[228px] laptop:h-[55px]">
            <Image
              src={JeiomLogo_02}
              alt="Logo JEIOM"
              width="228"
              height="55"
              priority
            />
          </div>
        </div>
        <div className="flex justify-around">
          <div className="w-[200px] flex justify-center items-center">
            <Typography variant="h4">
              <a href="#">Privacy Policy</a>
            </Typography>
          </div>
          <div className="w-[200px] flex justify-center items-center">
            <Typography variant="h4">
              By{" "}
              <a href="https://www.jetop.com/" target="_blank">
                <u>JEToP</u>{" "}
              </a>{" "}
              &{" "}
              <a href="https://www.jemore.it/" target="_blank">
                <u>JEMORE</u>
              </a>
            </Typography>
          </div>
          <div className="w-[200px] flex justify-center items-center">
            <Typography variant="h4">
              <a href="mailto:info@jeiom23.it">info@jeiom23.it</a>
            </Typography>
          </div>
        </div>
        <Padding />
      </footer>
    </div>
  )
}

export default Footer
