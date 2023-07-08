import React, { FC } from "react"
import TypographyProps from "./index.types"
import classNames from "classnames"

const Typography: FC<TypographyProps> = ({ children, variant, className }) => {
  switch (variant) {
    case "hero":
      return (
        <h1
          className={classNames(
            "antialiased font-normal text-white uppercase leading-none text-[50px] tablet:text-[50px] laptop:text-[96px]",
            className ?? ""
          )}
        >
          {children}
        </h1>
      )
    case "h1":
      return (
        <h1
          className={classNames(
            "antialiased font-semibold text-white text-[26px] tablet:text-[50px] laptop:text-[96px]",
            className ?? ""
          )}
        >
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2
          className={classNames(
            "antialiased font-semibold text-white text-[26px] tablet:text-[50px] laptop:text-[64px] text-center",
            className ?? ""
          )}
        >
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3
          className={classNames(
            "antialiased font-normal text-white text-[49px] tablet:text-[36px] laptop:text-[55px]",
            className ?? ""
          )}
        >
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4
          className={classNames(
            "antialiased font-normal text-white text-[8px] tablet:text-[12px] laptop:text-[16px] leading-[16px]",
            className ?? ""
          )}
        >
          {children}
        </h4>
      )
    case "map":
      return (
        <p
          className={classNames(
            "antialiased font-semibold leading-none text-[12px] tablet:text-[14px] laptop:text-[16px]",
            className ?? ""
          )}
        >
          {children}
        </p>
      )
    case "label":
      return (
        <p
          className={classNames(
            "antialiased font-normal text-black text-[9px] tablet:text-[14px] laptop:text-[16px]",
            className ?? ""
          )}
        >
          {children}
        </p>
      )
    case "label":
      return (
        <p
          className={classNames(
            "antialiased font-normal text-black text-[9px] tablet:text-[14px] laptop:text-[16px]",
            className ?? ""
          )}
        >
          {children}
        </p>
      )
    case "button":
      return (
        <p
          className={classNames(
            "antialiased font-normal text-black text-[20px] tablet:text-[17px] laptop:text-[20px]",
            className ?? ""
          )}
        >
          {children}
        </p>
      )
    case "p":
      return (
        <p
          className={classNames(
            "antialiased font-normal text-white text-[20px] tablet:text-[17px] laptop:text-[20px]",
            className ?? ""
          )}
        >
          {children}
        </p>
      )
    case "privacy":
      return (
        <p
          className={classNames(
            "antialiased font-normal text-black text-[15px]",
            className ?? ""
          )}
        >
          {children}
        </p>
      )
  }
}

export default Typography
