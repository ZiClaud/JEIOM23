import React, { FC } from "react"
import MissionProps from "./index.types"
import Typography from "@atoms/Typography"

const Mission: FC<MissionProps> = ({}) => {
  return <>
    <div className="mt-32 tablet:w-[27.75rem] w-72 laptop:w-[815px] ">
      <Typography variant="h1" className="text-center laptop:text-left">
        MISSION
      </Typography>
    </div>

    <div className=" tablet:w-[27.75rem] w-72 laptop:w-[815px] ">
      <Typography variant="p" className="text-center laptop:text-left">
        Dare visibilità a <i><strong>soluzioni innovative</strong></i> e sostenibili, che promuovono la tradizione, la
        qualità alimentare ed una nutrizione sana e attenta alle esigenze di tutti.
        <br/> <br/> <br/> <br/>
        I <i><strong>pilastri</strong></i> del JEIOM23 si ispirano all&apos;<i><strong>Agenda 2030</strong></i> per lo sviluppo sostenibile.
      </Typography>
    </div>
  </>
}

export default Mission