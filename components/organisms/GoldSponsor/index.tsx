import React, { FC } from "react"
import GoldSponsorProps from "./index.types"
import ToggleList from "@molecules/ToggleList"
import Typography from "@atoms/Typography"
import Image from "next/image"
import Button from "@atoms/Button"
import TruncateText from "@/components/atoms/TruncateText.tsx/index"


const GoldSponsor: FC<GoldSponsorProps> = ({ sponsors }) => {
  return (
    <>
      <div className="tablet:hidden">
        <ToggleList sponsors={sponsors} />
      </div>
      <div className="tablet:grid grid-cols-2 gap-y-8 px-12 justify-between items-start mb-10 phone:hidden">
        {sponsors.map((sponsor, index) => {
          return (
            <div key={index} className="flex flex-col gap-8 z-10">
              <div className="flex flex-col gap-8 items-start">
                <Typography variant="h2" className="mt-0">
                  {sponsor.name}
                </Typography>
                {sponsor.logo === "" ? (
                  <></>
                ) : (
                  <>
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={300}
                      height={300}
                    />
                  </>
                )}
              </div>

              <div className="tablet:w-[280px]">
                <TruncateText text={sponsor.description} maxLength={100} />
              </div>
              <div className="w-fit text-justify">
                <Button useUrl url={sponsor.url}>
                  Visita {sponsor.name}
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default GoldSponsor
