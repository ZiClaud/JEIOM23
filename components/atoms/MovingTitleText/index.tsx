import React, { FC } from "react";
import MovingTitleTextProps from "./index.types"
import Image from "next/image"

const MovingTitleText: FC<MovingTitleTextProps> = ({ text }) => {
  return <>
    <h1
      className="text-white text-center -ml-2 tablet:-ml-6 -mr-2 tablet:-mr-6 text-[27px] tablet:text-[50px] laptop:text-[96px] font-semibold">
      {text}
    </h1>
    <Image
      className="h-8 w-8 tablet:h-12 tablet:w-16 laptop:h-20 laptop:w-20"
      src="/firstSpire.svg"
      alt=""
      width={89}
      height={66}
      priority
    />
    <h1
      className="text-white text-center -ml-2 -mr-2 tablet:-ml-6 tablet:-mr-6 text-[27px] tablet:text-[50px] laptop:text-[96px] font-semibold">
      {text}
    </h1>
    <Image
      className="h-8 w-8 tablet:h-12 tablet:w-16 laptop:h-20 laptop:w-20"
      src="/secondSpire.svg"
      alt=""
      width={88}
      height={73}
      priority
    />
    <h1
      className="text-white text-center -ml-2 -mr-2 tablet:-ml-6 tablet:-mr-6 text-[27px] tablet:text-[50px] laptop:text-[96px] font-semibold">
      {text}
    </h1>
    <Image
      className="h-8 w-8 tablet:h-12 tablet:w-16 laptop:h-20 laptop:w-20"
      src="/thirdSpire.svg"
      alt=""
      width={101}
      height={74}
    />
  </>
}

export default MovingTitleText