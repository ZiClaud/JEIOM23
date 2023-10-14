import React, { FC } from "react"
import SustainableDevelopmentProps from "./index.types"
import Image from "next/image"
import ZeroHunger from "../../../public/ZeroHunger.svg"
import Industry from "../../../public/Industry.svg"
import Consumption from "../../../public/Consumption.svg"

const SustainableDevelopment: FC<SustainableDevelopmentProps> = ({}) => {
  return (
    <div className="mt-[10px]">
      <div className="w-screen flex flex-row justify-evenly px-4 tablet:px-[126px] laptop:px-[132px] my-[50px] tablet:my-[22px] laptop:my-[18px]">
        <Image
          src={ZeroHunger}
          alt="ZeroHunger"
          className="w-[58px] tablet:w-[90px] laptop:w-[163px] scale-100 laptop:scale-75"
        />
        <Image
          src={Industry}
          alt="Industry"
          className="w-[58px] tablet:w-[90px] laptop:w-[163px] scale-125 laptop:scale-100"
        />
        <Image
          src={Consumption}
          alt="Consumption"
          className="w-[58px] tablet:w-[90px] laptop:w-[163px] scale-125 laptop:scale-100"
        />
      </div>
    </div>
  )
}

export default SustainableDevelopment
