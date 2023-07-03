"use client"

import React, { FC, useState } from "react"
import MapProps from "./index.types"
import MapPopover from "@/components/molecules/MapPopover"

import CameraCommercio from "@/public/invisible.svg"
import CafeConcerto from "@/public/invisible.svg"
import DipartimentoGiurisprudenza from "@/public/invisible.svg"
import Vinicio from "@/public/invisible.svg"

const Map: FC<MapProps> = ({}) => {
  const [clickedPopover, setClickedPopover] = useState("")

  const handlePopoverClick = (id: string) => {
    setClickedPopover(id)
  }

  return (
    <div className="relative bg-map bg-contain bg-no-repeat h-[400px] bg-center w-full tablet:h-[605px] laptop:h-[900px]">
      <div className="absolute top-[150px] right-4 tablet:top-[250px] tablet:right-[100px] laptop:top-[375px] laptop:right-[275px]">
        <MapPopover
          title="Camera di Commercio"
          address={"Via Ganaceto, 134"}
          addressUrl={"https://goo.gl/maps/Qfg2sr7abuxvhcvH7"}
          imageUrl={CameraCommercio}
          isClicked={clickedPopover === "popover1"}
          onClick={handlePopoverClick}
          id={"popover1"}
        />
      </div>
      <div className="absolute top-[250px] right-6 tablet:top-[400px] tablet:right-[100px] laptop:top-[600px] laptop:right-[250px] z-10">
        <MapPopover
          title="Dipartimento Giurisprudenza"
          address={"Via S. Geminiano, 3"}
          addressUrl={"https://goo.gl/maps/xmNj1zfsga8VrnXh6"}
          imageUrl={DipartimentoGiurisprudenza}
          isClicked={clickedPopover === "popover2"}
          onClick={handlePopoverClick}
          id={"popover2"}
        />
      </div>
      <div className="absolute top-[200px] right-7 tablet:top-[300px] tablet:right-[150px] laptop:top-[450px] laptop:right-[350px]">
        <MapPopover
          title="Caffè Concerto"
          address={"Piazza Grande, 26"}
          addressUrl={"https://goo.gl/maps/3KHNWZqEYDsnsFma7"}
          imageUrl={CafeConcerto}
          isClicked={clickedPopover === "popover3"}
          onClick={handlePopoverClick}
          id={"popover3"}
        />
      </div>
      <div className="absolute top-[300px] right-[65px] tablet:top-[475px] z-10 tablet:right-[150px] laptop:top-[625px] laptop:right-[175px]">
        <MapPopover
          title="Vincio"
          address={"Via Emilia Est, 1526"}
          addressUrl={"https://goo.gl/maps/8jgwHbpG1RdRL2Mu8"}
          imageUrl={Vinicio}
          isClicked={clickedPopover === "popover4"}
          onClick={handlePopoverClick}
          id={"popover4"}
        />
      </div>
    </div>
  )
}

export default Map
