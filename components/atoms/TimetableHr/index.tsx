import React, { FC } from "react"
import TimetableHrProps from "./index.types"
import Typography from "@atoms/Typography"

const TimetableHr: FC<TimetableHrProps> = ({ hour }) => {
  return <>
    <div className="w-full flex flex-row items-center">
      <Typography className="mr-5 ml-5 tablet:ml-10 tablet:mr-10" variant={"p"}>{hour}</Typography>
      <hr className="w-full h-px border-1 mr-10"></hr>
    </div>
  </>
}

export default TimetableHr