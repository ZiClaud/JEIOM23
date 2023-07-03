import React, { FC } from "react"
import PageBreakProps from "./index.types"
import Image from "next/image"
import PageBreakImage from "public/pageBreak.svg"

const PageBreak: FC<PageBreakProps> = ({}) => {
  return <Image
    src={PageBreakImage}
    alt="Page Break"
    width={1536}
    height={468}
    priority
    className="w-full"
  />
}

export default PageBreak