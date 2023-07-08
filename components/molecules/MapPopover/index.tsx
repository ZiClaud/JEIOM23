"use client"

import React, { FC, useState } from "react"
import MapPopoverProps from "./index.types"
import { Transition } from "@headlessui/react"
import Typography from "@/components/atoms/Typography"
import MapCard from "@/components/atoms/MapCard"
import Image from "next/image"
import Logo from "../../../public/logoJeiom.svg"

const MapPopover: FC<MapPopoverProps> = ({
  title,
  address,
  addressUrl,
  imageUrl,
  isClicked,
  onClick,
  id,
  description
}) => {
  const handleToggleCard = () => {
    if (isClicked) {
      onClick(" ")
    } else {
      onClick(id) // Passa l'ID corrispondente alla card
    }
  }
  return (
    <>
      <div className="">
        {/* Interactive Element */}
        <button
          onClick={handleToggleCard}
          className={`flex flex-row gap-3 justify-center items-center  ${
            isClicked
              ? "opacity-0 transition-opacity duration-200"
              : "opacity-100 transition-opacity duration-200"
          }`}
        >
          <Image src={Logo} alt="Logo" className="z-[0] w-[20px] tablet:w-[30px] laptop:w-[40px]" />
          <Typography variant="label" className="text-white font-medium ">
            {title}
          </Typography>
        </button>

        {/* Card */}
        <Transition
          show={isClicked}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <div
            className="absolute bottom-0 left-0 right-0 w-[115px] h-[115px]"
            onClick={handleToggleCard}
          >
            {/* Card Content */}
            <MapCard
              title={title}
              address={address}
              addressUrl={addressUrl}
              imageUrl={imageUrl}
              description={description}
            />
          </div>
        </Transition>
      </div>
    </>
  )
}

export default MapPopover
