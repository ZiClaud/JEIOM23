import React, { FC } from "react"
import SurvivalGuideHeroProps from "./index.types"
import Image from "next/image"
import centerSpire from "public/centerSpireSurvivalGuide.webp"

const SurvivalGuideHero: FC<SurvivalGuideHeroProps> = ({}) => {
  return (
    <div className="text-white mt-[110px] phone:mb-40 w-screen overflow-x-clip bg-black-jeiom">
      <div className="flex justify-center">
        <div className="w-[536px] tablet:w-[596px] laptop:w-[806px]">
          <Image
            src={centerSpire}
            alt="spire"
            className="phone:scale-[1.4] tablet:scale-[1] laptop:scale-[1.4]"
          />
        </div>
        <div className=" mt-[7px] tablet:mt-[80px] laptop:mt-[95px] text-center leading-[2.75rem] absolute flex flex-col text-[37px] laptop:text-[54px]">
          IL JEIOM23 STA ARRIVANDO
        </div>
        <div className="antialiased font-light mt-[102px] tablet:mt-[150px] laptop:mt-[160px] text-center absolute flex flex-col justify-between text-[14px] tablet:text-[17px] laptop:text-[20px] ">
          Ti aspettiamo a Modena per uno degli <br /> eventi più attesi del
          nostro Network!
        </div>
      </div>
      <div className="tablet:hidden w-screen px-5 mt-[55px] antialiased font-light leading-6 text-left absolute flex flex-col justify-left text-[20px] ">
        TALKS, WORKSHOPS,
        <br /> BUSINESS GAME E MOMENTI
        <br /> DI NETWORKING A TEMA
        <br /> FOOD TECH VOLTI A<br /> DARE VISIBILITÀ A<br /> SOLUZIONI
        <br /> INNOVATIVE E<br /> SOSTENIBILI.
      </div>

      <div className="tablet:hidden w-screen px-5 mt-[290px] antialiased font-light leading-6 text-right absolute flex flex-col justify-right text-[20px] ">
        ABBIAMO PENSATO A TUTTO
        <br />
        PER FARTI VIVERE <br />
        AL MEGLIO
        <br />
        QUESTA ESPERIENZA,
        <br /> MANCHI SOLO TU!
        <br />
        <strong className="font-bold">CHE ASPETTI?</strong>
      </div>

      <div className="phone:hidden tablet:inline-block w-screen tablet:px-20 laptop:px-36 notebook:px-52 mt-[55px] antialiased font-light leading-6 text-left absolute flex flex-col justify-left text-[17px] laptop:text-[20px]">
        TALKS, WORKSHOPS, BUSINESS GAME E MOMENTI DI
        <br />
        NETWORKING A TEMA <strong className="font-bold">FOOD TECH</strong> VOLTI
        A DARE VISIBILITÀ A<br />
        <strong className="font-bold">SOLUZIONI INNOVATIVE</strong> E{" "}
        <strong className="font-bold">SOSTENIBILI</strong>.
      </div>

      <div className="phone:hidden tablet:inline-block w-screen tablet:px-20 laptop:px-36 notebook:px-52 mt-[160px] antialiased font-light leading-6 text-right absolute flex flex-col justify-right tablet:text-[17px] laptop:text-[20px] ">
        ABBIAMO PENSATO A TUTTO PER FARTI VIVERE AL
        <br />
        MEGLIO QUESTA ESPERIENZA, MANCHI SOLO TU!
        <br />
        <strong className="font-bold">CHE ASPETTI?</strong>
      </div>
    </div>
  )
}
export default SurvivalGuideHero
