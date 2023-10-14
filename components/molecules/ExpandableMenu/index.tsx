"use client"

import React, { FC } from "react"
import ExpandableMenuProps from "./index.types"
import Typography from "@atoms/Typography"

const { useState } = React

const ExpandableMenu: FC<ExpandableMenuProps> = ({ children, title }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return <>
    <div className="flex flex-col">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="flex flex-col">
          <hr />
          <div className="flex flex-row w-[90vw] justify-between py-3">
            <div className="text-white px-5 text-base" >{title}</div>
            {isMenuOpen ?
              <Typography variant="h4" className="px-5">-</Typography> :
              <Typography variant="h4" className="px-5">+</Typography>
            }
          </div>
        </div>
      </button>
      {isMenuOpen && (
        <div className="w-[90vw] py-3">
          <div className="text-white px-5 text-sm"  >{children}</div>
        </div>
      )}
    </div>
  </>
}

export default ExpandableMenu