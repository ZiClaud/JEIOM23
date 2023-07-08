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
          <strong>JEToP</strong> e <strong>JEMORE</strong>, le Junior Enterprise del Politecnico di <strong>Torino</strong> e
          dell&apos;Università di <strong>Modena e Reggio Emilia</strong>,<br />uniscono le proprie
          forze per organizzare uno degli <strong>eventi più importanti</strong> del Network italiano.
          <br />
          Il connubio tra le <strong>competenze IT</strong> che contraddistinguono le due JE,<br/>e le <strong>diversità culinarie</strong> delle nostre
          regioni italiane <br/>hanno dato vita al <strong>tema dell&apos;evento:</strong><br/> il <strong>Food Tech</strong>.

        </Typography>
        <Padding />
      </Layout>
    </div>
  )
}

export default AboutUs
