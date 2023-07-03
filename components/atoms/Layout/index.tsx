import React, { FC } from "react"
import LayoutProps from "./index.types"
import classNames from "classnames"

const Layout: FC<LayoutProps> = ({ children, className }) => {
  return <div className={classNames("px-[16px] tablet:px-[126px] laptop:px-[132px]", className ?? "")}>
    {children}
  </div>
}

export default Layout