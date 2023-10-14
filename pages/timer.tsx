import Button from "@/components/atoms/Button"
import Typography from "@/components/atoms/Typography"
import { MantineProvider, NumberInput } from "@mantine/core"
import BusinessTimer from "@molecules/BusinessTimer"
import { useState } from "react"
import Logo from "../public/JeiomLogo_02.png"
import Image from "next/image"

export default function Timer() {
  const [hours, setHours] = useState<string | number>("")
  const [minutes, setMinutes] = useState<string | number>("")
  const [seconds, setSeconds] = useState<string | number>("")
  const [counting, setCounting] = useState(false)
  return (
    <main className="bg-black bg-center-worm bg-contain bg-no-repeat h-screen w-full flex flex-col gap-0 items-center">
      <div className="scale-75">
        <Image src={Logo} alt="logo" />
      </div>
      {!counting ? (
        <MantineProvider>
          <div className="flex flex-col laptop:flex-row laptop:gap-8">
            <div className="flex flex-col items-center">
              <Typography variant="h2">Ore</Typography>
              <NumberInput
                value={hours}
                onChange={setHours}
                variant="filled"
                size="xl"
                radius="lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <Typography variant="h2">Minuti</Typography>
              <NumberInput
                value={minutes}
                onChange={setMinutes}
                variant="filled"
                size="xl"
                radius="lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <Typography variant="h2">Secondi</Typography>
              <NumberInput
                value={seconds}
                onChange={setSeconds}
                variant="filled"
                size="xl"
                radius="lg"
              />
            </div>
          </div>
        </MantineProvider>
      ) : (
        <></>
      )}
      <div className={`${counting ? "hidden" : ""} w-fit mt-[100px]`}>
        <Button useUrl={false} onClick={() => setCounting(true)}>
          Start Timer
        </Button>
      </div>

      {counting ? (
        <div className="flex flex-col justify-center items-center h-full">
          <BusinessTimer
            setCounting={setCounting}
            hours={typeof hours === "string" ? parseInt(hours.trim() === "" ? "0" : hours) : hours}
            minutes={typeof minutes === "string" ? parseInt(minutes.trim() === "" ? "0" : minutes) : minutes}
            seconds={typeof seconds === "string" ? parseInt(seconds.trim() === "" ? "0" : seconds) : seconds}
          />
          {/* <div className="w-fit">
            <Button useUrl={false} onClick={() => setCounting(false)}>
              Reset Timer
            </Button>
          </div> */}
        </div>
      ) : (
        <></>
      )}
    </main>
  )
}
