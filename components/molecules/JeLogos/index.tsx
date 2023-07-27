import React, { FC } from "react"
import JeLogosProps from "./index.types"
import Image from "next/image"
import JEToPLogo from "public/jetopLogo.svg"
import JEMORELogo from "public/jemoreLogo.svg"

const JeLogos: FC<JeLogosProps> = ({}) => {
  return (
    <div className="flex flex-col justify-around items-around  laptop:mt-0">
      <div className="flex justify-around items-center">
        <a href="https://jetop.com/" target="_blank" rel="noopener noreferrer">
          <div className="hover:scale-110 transition">
            <Image
              src={JEToPLogo}
              alt="JEToP Logo"
              width="249"
              height="106"
              className="w-[114px] h-[46px] tablet:w-[156px] tablet:h-[66px] laptop:w-[249px] laptop:h-[106px]"
              priority
            />
          </div>
        </a>
        <a href="https://jemore.it/" target="_blank" rel="noopener noreferrer">
          <div className="hover:scale-110 transition">
            <Image
              src={JEMORELogo}
              alt="JEMORE Logo"
              width="251"
              height="56"
              className="w-[114px] h-[28px] tablet:w-[156px] tablet:h-[34px] laptop:w-[251px] laptop:h-[56px]"
              priority
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default JeLogos
