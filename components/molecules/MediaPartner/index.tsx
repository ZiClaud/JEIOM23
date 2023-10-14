import React, { FC } from "react"
import MediaPartnerProps from "./index.types"
import Typography from "@atoms/Typography"
import Image from "next/image"

const MediaPartner: FC<MediaPartnerProps> = ({ medias }) => {
  return (
    <>
      <Typography
        variant="sponsorTitle"
        className="text-right uppercase tablet:my-[100px] pr-4"
      >
        Media <br />
        <i>Partner</i>
      </Typography>
      <div className="flex flex-col tablet:flex-row tablet:gap-y-14 tablet:gap-x-20 tablet:grid-cols-4 px-4 items-center justify-end pb-10">
        {medias.map((media, index) => {
          return (
            <Image
              key={index}
              src={media.logo}
              alt={media.name}
              width={175}
              height={175}
            />
          )
        })}
      </div>
    </>
  )
}

export default MediaPartner
