"use client"

import React, { FC } from "react"
import AboutUsProps from "./index.types"
import Typography from "@atoms/Typography"
import Layout from "@atoms/Layout"
import Padding from "@atoms/Padding"
import JeLogos from "@molecules/JeLogos"
import AboutUsTitle from "@molecules/AboutUsTitle"

const AboutUs: FC<AboutUsProps> = ({}) => {
  return (
    <div>
      <AboutUsTitle />
      <Layout>
        <Padding />
        <JeLogos />
        <Padding />
        <Typography variant="p" className="pt-5 text-center">
          JEToP e JEMORE sono due Junior Enterprise, rispettivamente del
          Politecnico di Torino e dell&apos;Università di Modena e Reggio
          Emilia.
          <br />
          La collaborazione tra le due nasce dalla voglia di unire idee,
          esperienze, risorse differenti e complementari, al fine di organizzare
          un evento senza precedenti!
        </Typography>
        <Padding />
      </Layout>
    </div>
  )
}

export default AboutUs
