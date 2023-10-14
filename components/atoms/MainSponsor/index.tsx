import { FC } from "react"
import MainSponsorProps from "./index.types"
import Image from "next/image"
import Typography from "../Typography"
import DrawerVault from "@organisms/DrawerVault"

const MainSponsor: FC<MainSponsorProps> = ({ sponsors }) => {
  return (
    <div className="flex flex-col">
      {sponsors.map((sponsor, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col mb-10 tablet:flex-row items-center tablet:justify-center gap-8 tablet:gap-6 laptop:gap-[50px] desktop:gap-[100px] px-4 ${
              index % 2 !== 0 ? "tablet:flex-row-reverse" : ""
            }}`}
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={300}
              height={300}
            />
            <div className="flex flex-col h-full items-center gap-8 px-4 tablet:px-0">
              <Typography variant="p" className="text-left">
                {sponsor.description}
              </Typography>
              <DrawerVault
                title={sponsor.name}
                longDescription={sponsor.longDescription}
                url={sponsor.url}
                image={sponsor.logo}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MainSponsor
