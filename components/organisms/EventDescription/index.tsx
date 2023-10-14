import React, { FC } from "react"
import EventDescriptionProps from "./index.types"
import Typography from "@atoms/Typography"
import Image from "next/image"
import three from "@/public/3.webp"
import one from "@/public/1.webp"

const EventDescription: FC<EventDescriptionProps> = ({}) => {
  return <>
    <div className="mt-[100px] w-screen flex flex-col justify-center items-center">
      <div className="flex tablet:w-[27.75rem] w-72 laptop:w-[815px]">
        <Typography variant="p" className="text-center tablet:text-left">
          Il <strong>JEIOM</strong>, Junior Enterprise Italy October Meeting, è un evento che coinvolge
          l&apos;intero Network delle JE italiane.
        </Typography>
      </div>

      <div className="pt-20 tablet:pt-40 w-screen flex flex-col tablet:flex-row tablet:justify-evenly">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center relative">
            <Image
              src={three}
              alt="3"
              className="laptop:scale-125"
            />
            <Typography variant="h1"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 laptop:scale-75">GIORNI</Typography>
          </div>
          <div className="flex justify-center">

            <Typography variant="p" className="w-72 text-center laptop:text-left mt-8">
              In cui più di <i><strong>250 studenti</strong></i> universitari provenienti <i><strong>da tutta
              italia</strong></i> si cimentano in workshop, company fair e business game per accogliere le sfide del
              settore
              e ideare <i><strong>soluzioni innovative</strong></i>.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col pt-10 laptop:pt-0">
          <div className="flex justify-center relative">
            <Image
              src={one}
              alt="1"
              className="laptop:scale-125"
            />
            <Typography variant="h1"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 laptop:scale-75">TEMA</Typography>
          </div>
          <div className="flex justify-center">
            <Typography variant="p" className="w-72 text-center laptop:text-left mt-8">
              JEIOM23 “Feeding the Future“ rappresenta <i><strong>l&apos;innovazione</strong></i> che
              unisce <i><strong>qualità</strong></i> e <i><strong>tradizione</strong></i> per garantire un futuro
              migliore
              alla nostra e alle prossime generazioni.
            </Typography></div>
        </div>
        <div className="flex flex-col pt-10 laptop:pt-0">
          <div className="flex justify-center relative">
            <Image
              src={three}
              alt="3"
              className="laptop:scale-125"
            />
            <Typography variant="h1"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 laptop:scale-75">LOCATION</Typography>
          </div>
          <div className="flex justify-center">
            <Typography variant="p" className="w-72 text-center laptop:text-left mt-8">
              <i><strong>Suggestive</strong></i> accoglieranno i partecipanti durante la loro permanenza. Preparatevi ad
              immergervi nell&apos;<i><strong>atmosfera</strong></i> <i><strong>stimolante</strong></i> della nostra
              manifestazione.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default EventDescription