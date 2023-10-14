import React, { FC, useEffect, useState } from "react"
import WavyTextProps from "./index.types"
import { Link as ScrollLink } from "react-scroll"

const WavyText: FC<WavyTextProps> = ({}) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const waveAmplitude = 50 // Adjust this value to control the amplitude of the wave
  const waveFrequency = 0.01 // Adjust this value to control the frequency of the wave

  const text =
    "main sponsor main sponsor main sponsor main sponsor main sponsor"

  return (
    <div className="text-3xl text-white font-bold flex items-center">
      <ScrollLink to="targetElement" smooth={true} duration={2000}>
        <div className="bg-cover bg-no-repeat h-[300px] items-center justify-center flex">
          <span className="inline-block">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block transform-gpu transition-transform"
                style={{
                  transform:
                    char !== " "
                      ? `translateY(${
                          waveAmplitude *
                          Math.sin(waveFrequency * (scrollY / 5) + index * 0.15)
                        }px)
                        translateX(${scrollY / 6}px)`
                      : "translateY(0)",
                  display: "inline-block",
                  transitionDuration: "0.2s",
                  whiteSpace: "pre", // Preserve whitespace
                }}
              >
                {char}
              </span>
            ))}
          </span>
        </div>
      </ScrollLink>
    </div>
  )
}

export default WavyText
