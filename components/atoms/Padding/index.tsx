import React, { FC } from "react"
import PaddingProps from "./index.types"

const Padding: FC<PaddingProps> = ({}) => {
  return <div className="pb-[32px] tablet:bp-[48px] laptop:pb-[64px]" />
}

export default Padding