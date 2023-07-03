import React, { FC, useEffect, useState } from "react"
import AboutUsTitleProps from "./index.types"
import Typography from "@atoms/Typography"
import Image from "next/image"

const AboutUsTitle: FC<AboutUsTitleProps> = ({}) => {
  const [positionTop, setPositionTop] = useState<number>(0)

  const handleScroll = (): void => {
    setPositionTop(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function getTitlePosition() {
    return positionTop / 60 - 45
    //TODO: Change the "45" to a higher number to move text to the left, and to a lower number to move text to the right
    //TODO: Change "60" to a higher number to slow down text, and to a lower number to speed up text
  }

  return (
    <div className="w-screen h-[400px]">
      <div style={{ overflowX: "clip" }}>
        <div
          className="flex whitespace-nowrap items-center"
          style={{
            transform: `translate(${getTitlePosition()}%, 150px) scale3d(1, 1, 1) rotateZ(356deg)`,
          }}
        >
          <Typography variant="h1" className="text-center -mr-2 tablet:-mr-6">
            CHI SIAMO
          </Typography>
          <Image
            className="h-8 w-8 tablet:h-12 tablet:w-16  laptop:h-20 laptop:w-20"
            src="/firstSpire.svg"
            alt=""
            width={89}
            height={66}
            priority
          />
          <Typography
            variant="h1"
            className="text-center -ml-2 -mr-2 tablet:-ml-6 tablet:-mr-6"
          >
            CHI SIAMO
          </Typography>
          <Image
            className="h-8 w-8 tablet:h-12 tablet:w-16  laptop:h-20 laptop:w-20"
            src="/secondSpire.svg"
            alt=""
            width={88}
            height={73}
            priority
          />
          <Typography
            variant="h1"
            className="text-center -ml-2 -mr-2 tablet:-ml-6 tablet:-mr-6"
          >
            CHI SIAMO
          </Typography>
          <Image
            className="h-8 w-8 tablet:h-12 tablet:w-16  laptop:h-20 laptop:w-20"
            src="/thirdSpire.svg"
            alt=""
            width={101}
            height={74}
          />
          <Typography variant="h1" className="text-center -ml-2 tablet:-ml-6 -mr-2 tablet:-mr-6">
            CHI SIAMO
          </Typography>
          <Image
            className="h-8 w-8 tablet:h-12 tablet:w-16  laptop:h-20 laptop:w-20"
            src="/firstSpire.svg"
            alt=""
            width={89}
            height={66}
            priority
          />
          <Typography variant="h1" className="text-center -ml-2 tablet:-ml-6">
            CHI SIAMO
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default AboutUsTitle
