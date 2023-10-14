import React, { FC } from "react"
import BreakGoldProps from "./index.types"
import Image from "next/image"
import Circle from "../../../public/BreakGold.png"
import Typography from "@atoms/Typography"
const BreakGold: FC<BreakGoldProps> = ({}) => {
  return (
    <>
      <Image
        src={Circle}
        alt="Gold Sponsor "
        width={300}
        height={300}
        className="w-[300px] h-[300px] mt-[100px]
          tablet:w-[350px] tablet:h-[350px] laptop:w-[600px] laptop:h-[600px]"
      />
      <Typography
        variant="sponsorTitle"
        className="w-[100px] text-center -mt-[200px] tablet:-mt-[240px] ml-[90px] laptop:-mt-[415px] laptop:ml-[170px]"
      >
        GOLD SPONSOR
      </Typography>
    </>
  )
}
export default BreakGold
