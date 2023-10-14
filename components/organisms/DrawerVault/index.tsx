import React, { FC } from "react"
import DrawerVaultProps from "./index.types"
import { Drawer } from "vaul"
import Button from "@atoms/Button"
import Typography from "@atoms/Typography"
import Image from "next/image"

const DrawerVault: FC<DrawerVaultProps> = ({
  title,
  longDescription,
  image,
  url,
}) => {
  const [open, setOpen] = React.useState(false)
  return (
    <Drawer.Root shouldScaleBackground open={open}>
      <Drawer.Trigger>
        <Button useUrl={false} onClick={() => setOpen(true)}>
          Approfondisci {title}
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 w-full" />
        <Drawer.Content className="bg-zinc-300 w-full  flex flex-col items-center rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0 ">
          <div className="p-4 bg-black-jeiom/90 h-full overflow-x-scroll rounded-t-[10px] flex-1 relative z-[100]">
            <div className="bg-worm tablet:bg-none bg-opacity-75 bg-cover bg-no-repeat w-screen tablet:w-screen h-full">
              <button
                className="absolute top-4 right-8 fill-zinc-300 hidden laptop:flex"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8 laptop:invisible" />
              <div className="flex flex-col items-center justify-between gap-8 px-4 bg-none tablet:bg-worm bg-cover bg-no-repeat">
                <Image src={image} alt={title} width={300} height={300} />

                {/* <div className="relative w-screen h-0" /> */}
                <Typography
                  variant="p"
                  className={`text-start laptop:text-justify align-middle h-full px-8 tablet:px-[100px] ${
                    title === "Tetra Pak"
                      ? "py-[100px] laptop:px-[400px] h-screen"
                      : "text-zinc-300"
                  }}`}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: longDescription }}
                  ></div>
                </Typography>
                <div className="w-fit mb-4">
                  <Button useUrl url={url}>
                    Visita {title}
                  </Button>
                </div>

                {/* <Image
                src={Worm}
                alt="Colored Background"
                className="absolute z-0 bottom-0 laptop:inset-0 opacity-75 left-0 right-0"
              /> */}
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default DrawerVault
