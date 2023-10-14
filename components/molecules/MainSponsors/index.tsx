"use client"
import React, { FC } from "react"
import MainSponsorsProps from "./index.types"
import Image from "next/image"
import RectangleBlank from "../../../public/RectangleBlank.png"
import Button from "@atoms/Button"

const MainSponsors: FC<MainSponsorsProps> = ({ reverse, title, p }) => {
  return (
    <>
      <div className="flex flex-col justify-center mt-[60px] mx-[30px] tablet:hidden">
        <Image
          src={RectangleBlank}
          alt="sponsor image"
          width={400}
          height={200}
          className="w-[600px] h-[300px] mt-[50px] mb-[40px]"
        />

        <p className="font-light text-xl mt-[15px] text-white mb-[30px]">
          {" "}
          {p}
        </p>
        <div className="mt-[35px] w-[288px]">
          {" "}
          <Button useUrl={false}>Approfondisci</Button>
        </div>
      </div>

      <div className="hidden tablet:flex mx-3">
        {reverse ? (
          <div className="flex flex-row text-white mt-[50px] mx-[30px] laptop:mx-[100px]">
            <div className="w-2/3 mx-7">
              <p className="font-light text-xl mt-[15px]"> {p}</p>
              <div className="mt-[35px] w-[200px]">
                {" "}
                <Button useUrl={false}>Approfondisci </Button>{" "}
              </div>
            </div>
            <div className="w-1/3">
              <Image
                src={RectangleBlank}
                alt="sponsor image"
                width={288}
                height={308}
                className="ml-[30px] w-[300px] h-[300px]"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-row text-white mt-[50px] mx-[30px] laptop:mx-[100px]">
            <div className="w-1/3 mx-7">
              <Image
                src={RectangleBlank}
                alt="sponsor image"
                width={288}
                height={308}
                className="w-[300px] h-[300px]"
              />
            </div>
            <div className="w-2/3">
              <p className="font-light text-xl mt-[15px]"> {p}</p>
              <div className="mt-[35px] w-[200px]">
                <Button useUrl={false}>Approfondisci </Button>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default MainSponsors
