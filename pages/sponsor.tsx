import React from "react"
import Image from "next/image"
import Navbar from "@atoms/Navbar"
import Footer from "@organisms/Footer"
import Typography from "@atoms/Typography"
import MainSponsor from "@atoms/MainSponsor"
import sponsors from "@/public/json/sponsors.json"
import TechnicalSponsor from "@molecules/TechnicalSponsor"
import MediaPartner from "@molecules/MediaPartner"
import GoldSponsorTitle from "@atoms/GoldSponsorTitle"
import GoldSponsor from "@organisms/GoldSponsor"
import Worm from "@/public/GoldWorm.webp"

export default function Sponsors() {
  const main = sponsors.main
  const gold = sponsors.gold
  const technical = sponsors.technical
  const media = sponsors.media

  return (
    <>
      <main className="bg-black-jeiom w-full h-full ">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-16 mt-[100px] mb-[100px] tablet:mb-[200px] w-full h-[300px] bg-main-worm bg-cover bg-no-repeat">
          <Typography variant="hero" className="uppercase text-center">
            I nostri sponsor
          </Typography>
        </div>
        <Typography
          variant="sponsorTitle"
          className="uppercase text-center my-[100px] px-10"
        >
          Main sponsor
        </Typography>
        <div className="flex flex-col gap-[128px] px-4 laptop:px-[132px] desktop:px-[200px]">
          <MainSponsor sponsors={main} />
        </div>
        <div className="my-[250px] px-4 laptop:px-[132px] desktop:px-[200px]">
          <GoldSponsorTitle />
        </div>
        <div className="w-full h-fit relative">
          <Image
            src={Worm}
            alt="Colored worm"
            className="bottom-0 left-0 tablet:flex hidden"
          />
        </div>
        <div className="px-4 laptop:px-[132px] desktop:px-[200px]">
          <GoldSponsor sponsors={gold} />
          <TechnicalSponsor sponsors={technical} />
          <MediaPartner medias={media} />
        </div>

        <Footer />
      </main>
    </>
  )
}
