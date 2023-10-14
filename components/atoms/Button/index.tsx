import React, { FC } from "react"
import ButtonProps from "./index.types"
import Typography from "../Typography"
import Arrow from "../../../public/Arrow.svg"
import Image from "next/image"

const Button: FC<ButtonProps> = ({ url, children, onClick, useUrl }) => {
  function getButton() {
    let el
    if (useUrl) {
      el = (
        <a
          href={url}
          className={
            "w-[128px] h-12 transition duration-500 ease-in-out hover:scale-105 hover:-translate-y-1"
          }
          target="_blank"
        >
          <div className="bg-white rounded-xl">
            <div className="flex flex-row px-4 justify-between space-x-2 items-center w-full">
              <Typography variant="button">{children}</Typography>
              <Image src={Arrow} alt="Arrow" width={22} height={15} />
            </div>
          </div>
        </a>
      )
    } else {
      el = (
        <a
          className={
            "w-[128px] h-12 transition duration-500 ease-in-out hover:scale-105 hover:-translate-y-1"
          }
          onClick={onClick}
        >
          <div className="bg-white rounded-xl">
            <div className="flex flex-row px-4 justify-between space-x-2 items-center">
              <Typography variant="button">{children}</Typography>
              <Image src={Arrow} alt="Arrow" width={22} height={15} />
            </div>
          </div>
        </a>
      )
    }
    return el
  }

  return <>{getButton()}</>
}

export default Button
