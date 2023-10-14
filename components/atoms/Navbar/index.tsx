import React, { FC, useState } from "react"
import Link from "next/link"
import { navRoutes } from "@/routes"
import { useRouter } from "next/router"
import NavBarProps from "./index.types"
import { AnimatePresence, LazyMotion, m } from "framer-motion"
import Typography from "../Typography"

const features = () => import("../../../features").then((res) => res.default)

const NavBar: FC<NavBarProps> = ({}) => {
  const router = useRouter()
  const { pathname, asPath, query } = router
  const [toggleMenu, setToggleMenu] = useState(false)

  const disableScrollMobile = (toggleMenu: boolean) => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden"
    } else document.body.style.overflow = "auto"
    setToggleMenu(toggleMenu)
  }
  return (
    <>
      <header className="sticky top-0 z-20 laptop:flex flex-row justify-end w-full h-12 tablet:items-center tablet:justify-center tablet:h-14 laptop:h-20 bg-black-background/50 text-white-background tablet:backdrop-blur-md hidden">
        <div className="flex tablet:m-auto">
          <nav className="hidden tablet:flex">
            <ul className="flex flex-row justify-between tablet:w-[500px] laptop:w-[700px] desktop:w-[900px] list-none">
              {navRoutes.map((route) => {
                const isActive = router.pathname === route.path
                return (
                  <li
                    key={route.id}
                    className="relative inline-block m-auto cursor-pointer "
                  >
                    {[""].includes(route.title) ? (

                      <Typography
                        variant="h4"
                        className={`uppercase opacity-70 cursor-not-allowed ${
                          isActive ? "underline underline-offset-4" : ""
                        } }`}
                      >
                        {route.title}
                      </Typography>
                    ) : (
                      <Link
                        href={`${route.path}`}
                        key={route.id}
                        legacyBehavior
                      >
                        <a>
                          <Typography
                            variant="h4"
                            className={`uppercase hover:bg-gradient-to-r hover:from-[#0ABAB5] hover:to-[#AB68FF] hover:bg-clip-text hover:text-transparent ${
                              isActive ? "underline underline-offset-4" : ""
                            } }`}
                          >
                            {route.title}
                          </Typography>
                        </a>
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
      <header className="sticky top-0 z-20 laptop:hidden">
        <div className="flex justify-end w-full h-6 mt-3 pr-4">
          <button
            onClick={() => disableScrollMobile(!toggleMenu)}
            className="block w-6 h-6 cursor-pointer bg-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {toggleMenu && (
            <LazyMotion features={features}>
              <m.div
                initial={{ x: "-100%" }}
                exit={{ x: "-100%" }}
                animate={{ x: toggleMenu ? 0 : "-100%" }}
                transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="bg-black-jeiom fixed inset-0 z-50 w-screen"
              >
                <div className="flex flex-col h-full bg-black-jeiom">
                  <div className="flex flex-row justify-end mt-3">
                    <div
                      className=""
                      onClick={() => disableScrollMobile(!toggleMenu)}
                    >
                      <button className="border-none outline-none cursor-pointer bg-none">
                        <span className="w-full text-white text-2xl font-black transition duration-[250ms] pr-4">
                          &#x2715;
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex h-[200px] mt-[100px] flex-col tablet:flex-row">
                    <nav className="flex flex-col gap-4 items-center justify-center w-full h-full">
                      <ul>
                        {navRoutes.map((route) => {
                          const isActive = router.pathname === route.path
                          return (
                            <m.li key={route.id} className="list-none">
                              {[""].includes(route.title) ? (
                                <Typography
                                  variant="h2"
                                  className={`uppercase opacity-70 cursor-not-allowed ${
                                    isActive
                                      ? "underline underline-offset-4"
                                      : ""
                                  } }`}
                                >
                                  {route.title}
                                </Typography>
                              ) : (
                                <Link href={`${route.path}`} legacyBehavior>
                                  <a
                                    onClick={() =>
                                      disableScrollMobile(!toggleMenu)
                                    }
                                  >
                                    <m.div
                                      whileHover={{
                                        x: 40,
                                        transition: {
                                          duration: 0.25,
                                          ease: [0.6, 0.05, -0.01, 0.9],
                                        },
                                      }}
                                    >
                                      <Typography
                                        variant="h2"
                                        className={`uppercase hover:bg-gradient-to-r hover:from-[#0ABAB5] hover:to-[#AB68FF] hover:bg-clip-text hover:text-transparent ${
                                          isActive
                                            ? "underline underline-offset-4"
                                            : ""
                                        }`}
                                      >
                                        {route.title}
                                      </Typography>
                                    </m.div>
                                  </a>
                                </Link>
                              )}
                            </m.li>
                          )
                        })}
                      </ul>
                    </nav>
                  </div>
                </div>
              </m.div>
            </LazyMotion>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
export default NavBar
