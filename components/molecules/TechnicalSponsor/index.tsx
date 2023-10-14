import React, { FC } from "react"
import TechnicalSponsorProps from "./index.types"
import Typography from "@atoms/Typography"
import Image from "next/image"

const TechnicalSponsor: FC<TechnicalSponsorProps> = ({ sponsors }) => {
  return (
    <>
      <Typography variant="sponsorTitle" className="uppercase my-[100px] pl-4">
        Sponsor <i>Tecnici</i>
      </Typography>
      <div className="grid grid-cols-2 gap-y-14 tablet:grid-cols-4 px-4 items-center justify-center">
        {sponsors.map((sponsor, index) => {
          return (
            <div
              key={index}
              className={`${sponsor.name === "Innocent" ? "scale-[40%]" : ""}`}
            >
              <Image
                key={index}
                src={sponsor.logo}
                alt={sponsor.name}
                width={125}
                height={125}
                className="mb-5"
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default TechnicalSponsor
