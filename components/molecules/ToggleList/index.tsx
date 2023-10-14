import React, { FC } from "react"
import ToggleListProps from "./index.types"
import { Disclosure, Transition } from "@headlessui/react"
import Typography from "@atoms/Typography"
import Image from "next/image"
import Button from "@atoms/Button"
import TruncatedText from "@/components/atoms/TruncateText.tsx"

const ToggleList: FC<ToggleListProps> = ({ sponsors }) => {
  return (
    <div className="pt-[300px] tablet:pt-[100px]">
      {sponsors.map((sponsor, i) => {
        return (
          <Disclosure key={i}>
            <div className="h-[2px] w-full bg-white" />
            <Disclosure.Button className="py-2 px-[17px] fill-white flex flex-row w-full justify-between items-center">
              <Typography variant="h2">{sponsor.name}</Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="white"
                className="w-6 h-6 ui-open:rotate-90 ui-open:transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-[17px]">
                <div className="flex flex-col items-center justify-center">
                  {sponsor.logo === "" ? (
                    <></>
                  ) : (
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={300}
                      height={300}
                    />
                  )}
                  <TruncatedText text={sponsor.description} maxLength={100} />
                  <div className="w-fit text-justify py-2">
                    <Button useUrl url={sponsor.url}>
                      Visita {sponsor.name}
                    </Button>
                    T
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        )
      })}
    </div>
  )
}

export default ToggleList
