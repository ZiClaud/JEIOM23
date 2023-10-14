import React, { FC } from "react"
import TimetableSlotProps from "./index.types"
import TimetableHr from "@atoms/TimetableHr"

const TimetableSlot: FC<TimetableSlotProps> = ({ titolo, descrizione, inizio, durata, color, url }) => {
  return <>
    <div className="w-full">
      <TimetableHr hour={inizio}></TimetableHr>
      <div className="relative">
        <div className="absolute bg-white ml-24 tablet:ml-36  -mt-20"
             style={{ height: ((75 * durata) + 75) + "px", width: "1px" }}></div>
      </div>
      {(titolo !== "blank" && durata === 0.5) && (
        <div
          className="relative ml-28 tablet:ml-40 -my-1 rounded-3xl flex flex-col justify-center align-middle mr-10 tablet:mr-20"
          style={{ backgroundColor: color, height: (75 * durata) + "px" }}>
          <div className="pl-2 tablet:pl-10 flex flex-col tablet:flex-row">
            <p
              className="antialiased font-normal text-white text-[12px] tablet:text-[14px] laptop:text-[20px]">{titolo}</p>
            <a href={url} target="_blank" className="tablet:ml-5"><p
              className="underline text-white italic antialiased font-normal  text-[12px] tablet:text-[14px] laptop:text-[20px]">{descrizione}</p>
            </a>

          </div>
        </div>)}

      {(titolo !== "blank" && durata !== 0.5) && (
        <div
          className="relative ml-28 tablet:ml-40 -my-1 rounded-3xl flex flex-col justify-center align-middle mr-10 tablet:mr-20"
          style={{ backgroundColor: color, height: (75 * durata) + "px" }}>
          <div className="pl-2 tablet:pl-10 ">
            <p
              className=" antialiased font-normal text-white text-[15px] tablet:text-[14px] laptop:text-[20px]">{titolo}</p>
            <a href={url} target="_blank"><p
              className="underline text-white italic tablet:-mt-1 laptop:  antialiased font-normal  text-[15px] tablet:text-[14px] laptop:text-[20px]">{descrizione}</p>
            </a>

          </div>
        </div>)}

      {titolo === "blank" && (
        <div className="relative ml-52 -my-2 rounded-2xl flex flex-col justify-center align-middle mr-20"
             style={{ height: (75 * durata) + "px" }}>
        </div>)}
    </div>
  </>
}

export default TimetableSlot