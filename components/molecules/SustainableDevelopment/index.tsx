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
        <strong>JEIOM23</strong> - “<strong>Feeding the Future</strong>“ rappresenta l&apos;
        <strong>innovazione</strong> che
        unisce <strong>qualità</strong> e <strong>tradizione</strong> <br />
        per garantire un futuro migliore alla nostra e alle prossime generazioni. <br /><br />
        La <strong>nostra mission </strong> è dare visibilità a <strong>soluzioni innovative e sostenibili </strong>
        che promuovono la <strong>tradizione</strong>, <br /> la <strong>qualità alimentare</strong> e
        una nutrizione sana e attenta alle esigenze di tutti.<br /> <br />
        I <strong>pilastri</strong> del JEIOM23 si ispirano all&apos;<strong>Agenda 2030</strong> per lo sviluppo
        sostenibile.
      </Typography>
      <div
        className="w-screen flex flex-row justify-evenly px-4 tablet:px-[126px] laptop:px-[132px] my-[66px] tablet:my-[130px] laptop:my-[135px]">
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
