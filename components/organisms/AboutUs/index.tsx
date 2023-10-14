"use client"

import React, { FC } from "react"
import AboutUsProps from "./index.types"
import Typography from "@atoms/Typography"
import Layout from "@atoms/Layout"
import Padding from "@atoms/Padding"
import JeLogos from "@molecules/JeLogos"
import MovingTitle from "../../molecules/MovingTitle"
import leftItem from "public/leftItem.webp"
import Image from "next/image"
import rightItem from "public/rightItem.webp"

const AboutUs: FC<AboutUsProps> = ({}) => {
  return (
    <div>
      <MovingTitle text="CHI SIAMO" speed={60} position={80} rotation={354} />
      <Layout>
        <div className="flex flex-col items-center">
          <Typography
            variant="h1"
            className="-mt-40 tablet:-mt-20 w-[288px] leading-[3.5rem] tablet:w-[438px] laptop:w-[815px] z-10"
          >
            COS&apos;È UNA
            <br />
            JUNIOR ENTERPRISE?
          </Typography>
          <Typography
            variant="p"
            className="pt-5  w-[288px] tablet:w-[438px] laptop:w-[815px] z-10"
          >
            Un&apos;associazione studentesca no profit affiliata alla propria
            università di appartenenza che fa da{" "}
            <i>
              <strong>ponte</strong>
            </i>{" "}
            tra{" "}
            <i>
              <strong>mondo universitario</strong>
            </i>{" "}
            e{" "}
            <i>
              <strong>lavorativo</strong>
            </i>
            .
          </Typography>
          <div className="w-full absolute -mt-24">
            <div className=" w-[212px] h-[599px] float-left">
              <Image src={leftItem} alt="" className=""></Image>
            </div>
          </div>
          <div className="w-full absolute">
            <div className=" w-[222px] h-[752px] float-right">
              <Image
                src={rightItem}
                alt=""
                className="mt-[334px] tablet:mt-[130px]  "
              ></Image>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Typography
            variant="h1"
            className="mt-20 w-[288px] leading-[3.5rem] tablet:w-[438px] laptop:w-[815px] z-10"
          >
            COME LO FACCIAMO?
          </Typography>
          <Typography
            variant="p"
            className="pt-5  w-[288px] tablet:w-[438px] laptop:w-[815px] z-10"
          >
            Offrendo servizi di{" "}
            <i>
              <strong>consulenza</strong>
            </i>{" "}
            per clienti esterni, mettendoci in gioco e sviluppando attitudini
            imprenditoriali e di leadership.
          </Typography>

          <Typography
            variant="p"
            className="mt-20  w-[288px] tablet:w-[438px] laptop:w-[815px] z-10"
          >
            <i>
              <strong>JE Italy</strong>
            </i>{" "}
            rappresenta il{" "}
            <i>
              <strong>Network</strong>
            </i>{" "}
            di tutte le{" "}
            <i>
              <strong>JE italiane</strong>
            </i>
            , un insieme dinamico e in costante crescita con l&apos;obiettivo
            comune di creare una forte rete di{" "}
            <i>
              <strong>oltre 1500 studenti</strong>
            </i>
            , provenienti da{" "}
            <i>
              <strong>36 università italiane</strong>
            </i>
            , basata sulle opportunità di collegamento e di formazione.{" "}
          </Typography>
        </div>

        <div className="my-20">
          <JeLogos />
        </div>

        <div className="flex flex-col items-center ">
          <Typography
            variant="p"
            className="pt-5  w-[288px] tablet:w-[438px] laptop:w-[815px] z-10"
          >
            <i>
              <strong>JEToP</strong>
            </i>{" "}
            e{" "}
            <i>
              <strong>JEMORE</strong>
            </i>
            , le Junior Enterprise del Politecnico di{" "}
            <i>
              <strong>Torino</strong>
            </i>{" "}
            e dell&apos;Università di{" "}
            <i>
              <strong>Modena e Reggio Emilia</strong>
            </i>
            , uniscono le proprie forze per organizzare uno degli{" "}
            <i>
              <strong>eventi più importanti</strong>
            </i>{" "}
            del Network italiano. Il connubio tra le{" "}
            <i>
              <strong>competenze IT,</strong>
            </i>{" "}
            che contraddistinguono le due JE, e le{" "}
            <i>
              <strong>diversità culinarie</strong>
            </i>{" "}
            delle due regioni italiane hanno dato vita al{" "}
            <i>
              <strong>tema dell&apos;evento:</strong>
            </i>{" "}
            il{" "}
            <i>
              <strong>Food Tech</strong>
            </i>
            .
          </Typography>
        </div>

        <Padding />
      </Layout>
    </div>
  )
}

export default AboutUs
