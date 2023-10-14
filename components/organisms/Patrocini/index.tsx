import React, { FC } from "react"
import PatrociniProps from "./index.types"
import Typography from "@atoms/Typography"
import logoComune from "public/logoComuneWhite.webp"
import logoRegione from "public/logoRegioneWhite.webp"
import logoUnimore from "public/logoUnimoreWhite.webp"
import logoProvincia from "public/provinciaModena.webp"
import logoUe from "public/UE.webp"
import Image from "next/image"
import Padding from "@atoms/Padding"

const Patrocini: FC<PatrociniProps> = ({}) => {
  return (
    <>
      <Typography variant="h2">Con il patrocinio di</Typography>
      <Padding />
      <div className="flex w-full flex-col justify-evenly items-center laptop:flex-row">
        <div className="h-auto  w-[200px] tablet:w-[250px] laptop:w-[300px] flex justify-center pb-[30px] laptop:pb-[0px]">
          <Image
            src={logoComune}
            alt="Comune di Modena"
            width="228"
            height="82"
            priority
          />
        </div>
        <div className="h-auto  w-[200px] tablet:w-[250px] laptop:w-[300px] flex justify-center pb-[30px] laptop:pb-[0px]">
          <Image
            src={logoRegione}
            alt="Regione Emilia Romagna"
            width="305"
            height="44"
            priority
          />
        </div>
        <div className="h-auto  w-[200px] tablet:w-[250px] laptop:w-[300px] flex justify-center pb-[30px] laptop:pb-[0px]">
          <Image
            src={logoUnimore}
            alt="UniMoRe"
            width="176"
            height="64"
            priority
          />
        </div>
        <div className="h-auto scale-75  w-[200px] tablet:w-[250px] laptop:w-[300px] flex justify-center pb-[30px] laptop:pb-[0px]">
          <Image
            src={logoProvincia}
            alt="UniMoRe"
            width="255"
            height="138"
            priority
          />
        </div>
      </div>
      <Padding />
      <Typography variant="h2">Sotto l&apos;alto patrocinio di</Typography>
      <Padding />
      <div className="h-auto scale-75 laptop:scale-125  w-[200px] tablet:w-[250px] laptop:w-[300px] flex justify-center pb-[30px] laptop:pb-[0px]">
        <Image src={logoUe} alt="UE" width="255" height="138" priority />
        Ty
      </div>
      <Padding />
    </>
  )
}

export default Patrocini
