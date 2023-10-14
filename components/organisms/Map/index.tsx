"use client"

import React, { FC, useState } from "react"
import MapProps from "./index.types"
import MapPopover from "@molecules/MapPopover"

import CameraCommercio from "@/public/CameraDiCommercio.webp"
import Coldiretti from "@/public/mercato-coldiretti.jpg"
import DipartimentoGiurisprudenza from "@/public/DipartimentoGiurisprudenza.webp"
import Vinicio from "@/public/Vinicio.webp"
import Typography from "@atoms/Typography"

const Map: FC<MapProps> = ({}) => {
  const [clickedPopover, setClickedPopover] = useState("")

  const handlePopoverClick = (id: string) => {
    setTimeout(() => {
      setClickedPopover(id)
    }, 10)
  }

  const handleDivClick = () => {
    setClickedPopover("")
  }

  return (
    <>
      <div className="mt-32 tablet:w-[27.75rem] w-72 laptop:w-[815px] ">
        <Typography
          variant="h1"
          className=" laptop:mb-9 text-center laptop:text-left"
        >
          I LUOGHI DEL JEIOM
        </Typography>
      </div>
      <div
        onClick={handleDivClick}
        className="relative bg-map bg-contain bg-no-repeat bg-center -mt-20 -mb-36  tablet:mt-0 tablet:mb-0  -ml-20 tablet:-ml-16 laptop:ml-0 w-[300px] tablet:w-[625px] laptop:w-[1085px] h-[400px] tablet:h-[605px] laptop:h-[900px] tablet:scale-125 "
      >
        <div className="absolute top-[175px] right-4 tablet:top-[250px] tablet:right-[100px] laptop:top-[375px] laptop:right-[275px]">
          <MapPopover
            title="Camera di Commercio"
            address={"Via Ganaceto, 134"}
            addressUrl={"https://goo.gl/maps/Qfg2sr7abuxvhcvH7"}
            description={"Attività di Ven. e Dom."}
            imageUrl={CameraCommercio}
            isClicked={clickedPopover === "popover1"}
            onClick={handlePopoverClick}
            id={"popover1"}
          />
        </div>
        <div className="absolute top-[220px] right-[0px] tablet:top-[350px] tablet:right-[75px] laptop:top-[550px] laptop:right-[260px] z-10">
          <MapPopover
            title="Dipartimento Giurisprudenza"
            address={"Via S. Geminiano, 3"}
            addressUrl={"https://goo.gl/maps/xmNj1zfsga8VrnXh6"}
            imageUrl={DipartimentoGiurisprudenza}
            description={"Attività del sabato"}
            isClicked={clickedPopover === "popover2"}
            onClick={handlePopoverClick}
            id={"popover2"}
          />
        </div>
        <div className="absolute top-[200px] right-[50px] tablet:top-[315px] tablet:right-[165px] laptop:top-[480px] laptop:right-[360px]">
          <MapPopover
            title="Mercato Coldiretti"
            address={"Piazza Giacomo Matteotti, 7"}
            addressUrl={"https://goo.gl/maps/6idRMBQYtLDp7QNZ6"}
            description={"Pranzo del sabato"}
            imageUrl={Coldiretti}
            isClicked={clickedPopover === "popover3"}
            onClick={handlePopoverClick}
            id={"popover3"}
          />
        </div>
        <div className="absolute top-[235px] right-[-40px] tablet:top-[380px] tablet:right-[-10px] z-10  laptop:top-[590px] laptop:right-[90px]">
          <MapPopover
            title="Ristorante Vinicio"
            address={"Via Emilia Est, 1526"}
            addressUrl={"https://goo.gl/maps/8jgwHbpG1RdRL2Mu8"}
            description={"Cena di gala"}
            imageUrl={Vinicio}
            isClicked={clickedPopover === "popover4"}
            onClick={handlePopoverClick}
            id={"popover4"}
          />
        </div>
      </div>
    </>
  )
}

export default Map
