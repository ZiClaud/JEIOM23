import React, { FC } from "react"
import MissionProps from "./index.types"
import Typography from "@atoms/Typography"

const Mission: FC<MissionProps> = ({}) => {
  return <>
    <div className="mt-20" >
      <Typography variant="h1" className="text-center">
        MISSION </Typography>

    </div>
    <div className=" tablet:w-[27.75rem] w-72 laptop:w-[815px] ">
      <Typography variant="p" className="text-center">
        Dare visibilità a <i><strong>soluzioni innovative</strong></i> e sostenibili, che promuovono la tradizione, la
        qualità alimentare ed una nutrizione sana e attenta alle esigenze di tutti.
      </Typography>
    </div>
  </>
}

export default Mission