import React from "react"
import PhotosHeroProps from "./index.types"
import Image from "next/image"
import centerSpire from "@/public/photoshero.webp"


class PhotosHero extends React.Component<PhotosHeroProps> {
  render() {

    return <div className="flex justify-center text-white ">
      <Image
        src={centerSpire}
        alt="spire"
        className="w-full"
      />
      <div
        className=" mt-[7px] tablet:mt-[80px] laptop:mt-[150px] text-center leading-[2.75rem] absolute flex flex-col text-[37px] laptop:text-[54px]">
        IL JEIOM23 NON FINISCE MAI
      </div>
      <div
        className="antialiased font-light mt-[102px] tablet:mt-[150px] laptop:mt-[250px] text-center absolute flex flex-col justify-between text-[14px] tablet:text-[17px] laptop:text-[20px] ">
        Sfoglia, scarica e condividi con tutto il Network i tuoi momenti preferiti!
      </div>

    </div>

  }

}

export default PhotosHero