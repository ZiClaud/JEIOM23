"use client"
import React, { FC } from "react"
import { FaBars } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"
import { useState } from "react"
import DropdownMenuProps from "./index.types"

const DropDownMenu: FC<DropdownMenuProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="absolute bg-black top-0 right-2">
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen && (
            <FaBars
              className="absolute right-2 top-3"
              style={{ color: "white" }}
              size="29px"
            />
          )}
        </button>
        {isOpen && (
          <ul>
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaTimes
                className="absolute right-2 top-3"
                style={{ color: "white" }}
                size="29px"
              />
            </button>
          </ul>
        )}
      </div>
    </>
  )
}

export default DropDownMenu
