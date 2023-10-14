import React, { FC, useEffect, useState } from "react"

interface BusinessTimerProps {
  hours: number
  minutes: number
  seconds: number
  setCounting?: any
}

const BusinessTimer: FC<BusinessTimerProps> = ({
  hours,
  minutes,
  seconds,
  setCounting,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(
    hours * 3600 + minutes * 60 + seconds
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`
  }

  const formattedHours = formatTime(Math.floor(timeLeft / 3600))
  const formattedMinutes = formatTime(Math.floor((timeLeft % 3600) / 60))
  const formattedSeconds = formatTime(timeLeft % 60)
  const time = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`

  return (
    <div
      className={`flex items-center justify-center mt-[50px] font-[700] antialiased uppercase leading-none text-[75px] tablet:text-[150px] laptop:text-[250px] text-center h-full align-middle bg-gradient-to-r from-[#0ABAB5] to-[#AB68FF] bg-clip-text text-transparent ${
        parseInt(formattedHours) <= 0 &&
        parseInt(formattedMinutes) <= 0 &&
        parseInt(formattedSeconds) <= 0
          ? "hidden"
          : ""
      }`}
    >
      {time}
    </div>
  )
}

export default BusinessTimer
