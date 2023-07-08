import React, { FC } from "react"
import SponsorProps from "./index.types"
import Typography from "@atoms/Typography"
import Layout from "../../atoms/Layout"
import Padding from "@atoms/Padding"
import Image from "next/image"
import SponsorImage from "public/vercel.svg"

const Sponsor: FC<SponsorProps> = ({className}) => {
  return <Layout className={className}>
    <Padding />
    <Typography variant="h2">MAIN SPONSOR</Typography>
    <Padding />
    <div
      className="flex items-center justify-center bg-[#D9D9D9] w-[211px] h-[97px] tablet:w-[446px] tablet:h-[205px] laptop:w-[800px] laptop:h-[347px]">
      <Image
        src={SponsorImage}
        alt="Vercel Logo"
        width="100"
        height="24"
        priority
      />
    </div>
    <Padding />
  </Layout>
}

export default Sponsor