import React, { FC } from "react"
import SustainableDevelopmentProps from "./index.types"
import Image from "next/image"
import Typography from "@/components/atoms/Typography"
import ZeroHunger from "../../../public/ZeroHunger.svg"
import Industry from "../../../public/Industry.svg"
import Consumption from "../../../public/Consumption.svg"

const SustainableDevelopment: FC<SustainableDevelopmentProps> = ({}) => {
  return (
    <div className="mt-[100px]">
      <Typography variant="p" className="px-5 tablet:ml-20 tablet:mr-20 text-center">
        JEIOM &apos;23 “Feeding the Future” per fornire cibo sicuro e
        sostenibile alle generazioni future. Il FoodTech è un sistema di
        tecnologie che mirano a ridurre l&apos;impatto ambientale del settore
        alimentare, dalla produzione alla distribuzione.
        <br /> La nostra mission? <br />
        Dare visibilità a soluzioni innovative e sostenibili. I pilastri del
        JEIOM &apos;23 si rifanno all&apos;agenda 2030 per lo sviluppo
        sostenibile.
      </Typography>
      <div className="w-screen flex flex-row justify-evenly px-4 tablet:px-[126px] laptop:px-[132px] my-[66px] tablet:my-[130px] laptop:my-[135px]">
        <Image
          src={ZeroHunger}
          alt="ZeroHunger"
          className="w-[58px] tablet:w-[90px] laptop:w-[163px]"
        />
        <Image
          src={Industry}
          alt="Industry"
          className="w-[58px] tablet:w-[90px] laptop:w-[163px]"
        />
        <Image
          src={Consumption}
          alt="Consumption"
          className="w-[58px] tablet:w-[90px] laptop:w-[163px]"
        />
      </div>
    </div>
  )
}

export default SustainableDevelopment
