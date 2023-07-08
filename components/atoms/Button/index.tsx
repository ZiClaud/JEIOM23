import React, { FC } from "react"
import ButtonProps from "./index.types"
import Typography from "../Typography"
import Arrow from "../../../public/Arrow.svg"
import Image from "next/image"

const Button: FC<ButtonProps> = ({ url, children }) => {
  return (
    <a
      href={url}
      className="w-[138px] h-12 transition duration-500 ease-in-out hover:scale-105 hover:-translate-y-1"
      target="_blank"
    >
      <div className="bg-white rounded-xl">
        <div className="flex flex-row px-4 justify-between items-center">
          <Typography variant="button">{children}</Typography>
          <Image src={Arrow} alt="Arrow" width={22} height={15} />
        </div>
      </div>
    </a>
  )
}

export default Button
