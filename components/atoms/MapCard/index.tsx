import React, { FC } from "react"
import MapCardProps from "./index.types"
import Logo from "../../../public/logoJeiom.svg"
import Image from "next/image"
import Typography from "../Typography"

const MapCard: FC<MapCardProps> = ({
  title,
  address,
  addressUrl,
  imageUrl,
  description
}) => {
  return (
    <div className="w-[133px] z-10 tablet:w-[205px] laptop:w-[225px] h-full tablet:h-[135px] laptop:h-[155px] bg-white rounded-lg">
      <div className="p-[6px] h-full flex flex-col items-center justify-between">
        <div className="flex flex-row gap-2 items-center justify-center w-full">
          <Image src={Logo} alt="Logo" className="w-[20px]" />
          <div className="flex flex-col gap-2">
            <Typography
              variant="map"
              className="w-[86px] h-[26px] text-black font-semibold"
            >
              {title}
            </Typography>
            <Typography variant="label">
              {description}
            </Typography>
            {/*<a href={addressUrl} target="_blank">
              <Typography variant="label" className="underline">
                {address}
              </Typography>
            </a>*/}
          </div>
        </div>
        <Image src={imageUrl} alt={title} className="rounded-lg" />
      </div>
    </div>
  )
}

export default MapCard
