import React, { FC } from "react"
import HeroProps from "./index.types"
import Typography from "@atoms/Typography"
import Logo from "../../../public/JeiomLogo_02.png"
import Image from "next/image"
import Button from "@atoms/Button"

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="bg-hero-mob tablet:bg-hero bg-cover bg-no-repeat flex flex-col gap-16">
      <div className="w-screen h-min-screen flex flex-col px-5 laptop:px-[132px] py-[65px] tablet:pt-[73px] laptop:pt-[128px] tablet:items-center">
        <div className="w-full px-4 tablet:px-[126px] flex flex-col justify-between gap-[6px]">
          <Typography variant="hero" className="text-start">
            JEIOM
          </Typography>
          <Typography variant="hero" className="text-end">
            23
          </Typography>
        </div>
        <div className="flex items-center my-[56px] laptop:my-[100px]">
          <Image
            src={Logo}
            alt="Logo"
            className="tablet:w-[336px] laptop:w-[600px]"
          />
        </div>
        <Typography variant="p" className="uppercase text-end tablet:hidden">
          13-15 Ottobre
          <br />
          modena
        </Typography>
        <div className="hidden flex-col mt-[26px] items-center fixed z-[20] bottom-[105px] inset-x-0 scale-125">
          <Button url="https://apply.jeiom23.it/" useUrl={true}>
            Iscriviti
          </Button>
        </div>
        <div className="tablet:flex flex-row justify-between w-full px-12 hidden">
          <Typography variant="p" className="uppercase text-start">
            13-15 Ottobre
            <br />
            modena
          </Typography>
          <div className="hidden flex-col items-center z-[20] fixed bottom-[100px] right-[125px] scale-125">
            <Button url="https://apply.jeiom23.it/" useUrl={true}>
              Iscriviti
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
