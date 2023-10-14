import React, { FC, useEffect, useState } from "react"
import MovingTitleProps from "./index.types"
import MovingTitleText from "@atoms/MovingTitleText"

const MovingTitle: FC<MovingTitleProps> = ({ text, speed, position, rotation }) => {
  const [positionTop, setPositionTop] = useState<number>(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPositionTop(window.scrollY)
    })
  }, [])

  function getTitlePosition() {
    return positionTop / speed - position
  }

  return (
    <div className="w-screen overflow-x-clip">
      <div className="w-screen h-[400px] laptop:mb-20 overflow-x-clip">
        <div className="flex whitespace-nowrap items-center transition"
             style={{ transform: `translate(${getTitlePosition()}%, 150px) rotateZ(${rotation}deg)` }}>
          <MovingTitleText text={text} />
          <MovingTitleText text={text} />
          <MovingTitleText text={text} />
          <MovingTitleText text={text} />
        </div>
      </div>
    </div>
  )
}

export default MovingTitle
