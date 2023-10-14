import React, { FC } from "react"
import TimetableProps from "./index.types"
import TimetableSlot from "@atoms/TimetableSlot"

const Timetable: FC<TimetableProps> = ({ arr }) => {
  return (
    <>
      <div className="mt-40 w-full -ml-2">
        {arr.map((el) => (
          <TimetableSlot
            key={el.color + el.titolo + el.inizio}
            titolo={el.titolo}
            descrizione={el.descrizione}
            inizio={el.inizio}
            durata={el.durata}
            color={el.color}
            url={el.url}
          ></TimetableSlot>
        ))}
      </div>
    </>
  )
}
export default Timetable
