import React from "react"
import MovingTitle from "@molecules/MovingTitle"
import ExpandableMenu from "@molecules/ExpandableMenu"
import TimetableSection from "@organisms/TimetableSection"
import SurvivalGuideHero from "@molecules/SurvivalGuideHero"
import Navbar from "@atoms/Navbar"
import Button from "@atoms/Button"
import Footer from "@organisms/Footer"
import PageBreakImage from "../public/pagebreak2.png"
import Image from "next/image"

export default function Survival() {
  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <main className="bg-black-jeiom">
        <Navbar />
        <div className="relative w-screen flex flex-col items-center justify-between bg-black-jeiom">
          <SurvivalGuideHero />
          <div className="w-full phone:mt-[350px] tablet:mt-[150px] text-center tablet:text-start tablet:mb-14">
            <div className="phone:px-5 tablet:px-20 laptop:px-36 notebook:px-52 flex flex-col tablet:flex-row phone:text-center tablet:text-left phone:items-center mt-8 ">
              <div className="cursor-pointer w-72 flex-col items-center scale-100 tablet:scale-125 tablet:mr-5 tablet:ml-5">
                <Button
                  useUrl={false}
                  onClick={() => scrollToSection("timetableheader")}
                >
                  Vai alla Timetable
                </Button>
              </div>
            </div>
          </div>
          <MovingTitle text="INFO" speed={80} position={50} rotation={354} />
          <div className="-mt-28 tablet:-mt-20">
            <ExpandableMenu title="Informazioni generali">
              Durante il Business Game sarà richiesto l&apos;
              <strong>utilizzo di un tablet o di un pc</strong>.<br />
              Ti consigliamo di{" "}
              <strong>portare il dispositivo con la batteria carica</strong> in
              quanto <strong>non</strong> sarà possibile caricarlo
              all&apos;interno delle sale.
              <br />
              <br />
              Durante tutto l&apos;evento, un occhio di riguardo sarà tenuto per
              la <strong>sostenibilità ambientale</strong>: ti forniremo noi
              acqua e altre bevende in contenitori 100% riciclabili.
            </ExpandableMenu>
            <ExpandableMenu title="Come raggiungere Modena">
              <ul className="list-disc">
                <li>
                  Stazione <strong>Modena FS</strong> da tutte le principali
                  stazioni ferroviarie italiane.
                </li>
                <br />
                <li>
                  Da <strong>Bologna Aeroporto</strong>:{" "}
                  <a
                    href="https://www.marconiexpress.it/"
                    target="_blank"
                    className="underline"
                  >
                    Shuttle
                  </a>{" "}
                  ogni 15 minuti per Bologna Centrale.
                </li>
                <br />
                <li>
                  Da <strong>Bologna Centrale</strong>: treni regionali ogni
                  25/30 minuti per Modena FS (percorrenza 30 minuti).
                </li>
                <br />
                <li>
                  Da stazione alta velocità <strong>Mediopadana AV</strong>{" "}
                  (Reggio Emilia):{" "}
                  <a
                    href="https://www.setaweb.it/re/linee"
                    target="_blank"
                    className="underline"
                  >
                    autobus N°5
                  </a>
                  &nbsp; per la stazione dei treni di Reggio Emilia.
                </li>
                <br />
                <li>
                  Da <strong>stazione</strong> dei treni di{" "}
                  <strong>Reggio Emilia</strong>: treni regionali ogni 25/30
                  minuti per Modena FS (percorrenza 15 minuti).
                </li>
                <br />
                <strong>
                  Una volta arrivati a Modena, l&apos;hotel è raggiungibile a
                  piedi in pochi minuti!{" "}
                </strong>
                <br />
                <br />
                Se arrivi in auto, potrai parcheggiare gratuitamente nei pressi
                dell&apos;Hotel e poi spostarti a piedi.
              </ul>
            </ExpandableMenu>
            <ExpandableMenu title="I luoghi del JEIOM">
              <ul>
                <strong>Venerdì e domenica</strong> tutte le attività si
                svolgeranno presso la{" "}
                <strong>Camera di Commercio di Modena</strong>,
                <strong> sabato</strong> saremo invece ospiti del{" "}
                <strong>Dipartimento di Giurisprudenza</strong> di UNIMORE.{" "}
                <br />
                <br />
                <strong>Tutte le location sono raggiungibili a piedi.</strong>
              </ul>
            </ExpandableMenu>
            <ExpandableMenu title="Cena di Gala">
              <ul>
                La <strong>Cena di Gala</strong> avrà luogo in uno dei{" "}
                <strong>migliori ristoranti di Modena</strong>, situato poco
                fuori il centro storico.
                <br />
                Provvederemo al trasporto A/R attraverso bus privati.
                <br />
                Terminata la cena inizierà il <strong>DJ Set</strong> che durerà{" "}
                <strong>fino alle ore 2:30</strong>, orario in cui i bus
                riporteranno i JEur presso l&apos;Hotel.
              </ul>
            </ExpandableMenu>
            <ExpandableMenu title="Dress Code">
              <ul className="list-disc">
                <li>
                  Workshop, Business Game & Company Fair:{" "}
                  <strong>Business Casual</strong>.
                </li>
                <br />
                <li>
                  Cena di Gala & After Party:{" "}
                  <strong>Black tie Optional</strong>.
                </li>
                <br />
              </ul>
            </ExpandableMenu>
            <ExpandableMenu title="Dove mangiare">
              <ul className="list-disc">
                Ecco alcuni locali che ti consigliamo di provare per il pranzo
                del venerdì o per quello della domenica:
                <br />
                <br />
                <li>
                  <strong>Street food</strong> modenese DOC? Fai un salto da{" "}
                  <a
                    href="https://goo.gl/maps/SCsFgjjRdcWM4rbA6"
                    target="_blank"
                    className="underline"
                  >
                    Or-Ma
                  </a>
                  &nbsp;per mangiare <strong>crescentine</strong> e{" "}
                  <strong>tigelle</strong>.
                </li>
                <br />
                <li>
                  Per un pranzo davanti l&apos;Accademia Militare di Modena vai
                  da{" "}
                  <a
                    href="https://goo.gl/maps/hnmVVmEx5UpqFMLz7"
                    target="_blank"
                    className="underline"
                  >
                    Osteria Rossi
                  </a>
                  .
                </li>
                <br />
                <li>
                  Cerchi un <strong>buon ristorante</strong> non troppo costoso?
                  Da{" "}
                  <a
                    href="https://goo.gl/maps/whitVa1kH9Yb9RQj8"
                    target="_blank"
                    className="underline"
                  >
                    Uva d&apos;Oro
                  </a>{" "}
                  vai sul sicuro.
                </li>
                <br />
                <li>
                  Presso{" "}
                  <a
                    href="https://goo.gl/maps/NzQwVv2tWC8E8b8v9"
                    target="_blank"
                    className="underline"
                  >
                    Vasinikò
                  </a>{" "}
                  potrai mangiare una ottima <strong>pizza napoletana</strong>.
                </li>
                <br />
              </ul>
            </ExpandableMenu>
            <ExpandableMenu title="E per far serata al venerdì?">
              <ul>
                Dopo cena avrai tempo di tornare in Hotel prima di dare inizio
                all&apos;After dinner.
                <br />
                <br />
                L&apos;appuntamento è al locale&nbsp;
                <a
                  href="https://goo.gl/maps/vqrdzMV8ngyu93q9A"
                  target="_blank"
                  className="underline"
                >
                  Savage love dance drink
                </a>
                &nbsp;per provare il cocktail JEUFORIA, appositamente creato per
                il nostro evento.
                <br /> Per richiederlo porta con te il ticket presente nella
                welcome bag!
                <br />
                <br />
                Ci sposteremo poi in&nbsp;
                <a
                  href="https://goo.gl/maps/SnQ3BixRngCQuDHe8"
                  target="_blank"
                  className="underline"
                >
                  Via Gallucci
                </a>
                , una zona <strong>piena di locali</strong> dove continuare a
                bere in compagnia di altri universitari!
                <br />
                <br />E per chi volesse andare a <strong>ballare</strong>,
                consigliamo{" "}
                <a
                  href="https://goo.gl/maps/eNxQp3KJrMGUYeQ98"
                  target="_blank"
                  className="underline"
                >
                  Tube
                </a>{" "}
                e{" "}
                <a
                  href="https://goo.gl/maps/upWxaTjk5zyxERjj9"
                  target="_blank"
                  className="underline"
                >
                  Snoopy
                </a>
                !
              </ul>
            </ExpandableMenu>
            <ExpandableMenu title="Cosa vedere a Modena">
              <ul>
                Hai ancora qualche ora da trascorrere a Modena?
                <br />
                <strong>Ti consigliamo cosa vedere!</strong>
                <br />
                <br />
                In pieno centro si può visitare il <strong>Duomo</strong> di
                Modena e la <strong>Ghirlandina</strong> (secondo molti uno dei
                campanili più belli al mondo).
                <br />
                E bello lo è davvero, 86 metri e per di più è anche patrimonio
                UNESCO!
                <br />
                <br />
                Siete <strong>amanti dell&apos;arte</strong>?<br />
                Allora non potete perdervi la{" "}
                <a
                  href="https://goo.gl/maps/Ki2oY19Ba2v6SZbv6"
                  target="_blank"
                  className="underline"
                >
                  Galleria Estense
                </a>
                , una delle più antiche e importanti Gallerie Nazionali
                d&apos;Italia. Qui sono esposte le collezioni d&apos;arte della
                famiglia degli Este, i Duchi della città!
                <br />
                <br />
                Sei <strong>appassionato di motori</strong> e non ti perdi mai
                la F1? Una visita al{" "}
                <a
                  href="https://goo.gl/maps/w4Ei8PcUTcXMvL6H8"
                  target="_blank"
                  className="underline"
                >
                  Museo Enzo Ferrari
                </a>{" "}
                è doverosa! La casa dell&apos;eccellenza italiana è a due passi
                dalla stazione dei treni.
                <br />
                <br />
                Se invece vuoi partecipare al nostro{" "}
                <strong>Cultural Tour</strong> comunicalo ai PM.
              </ul>
            </ExpandableMenu>
          </div>
          <h1 id="timetableheader"></h1>
          <TimetableSection></TimetableSection>
          <div className="tablet:w-full tablet:items-center text-center tablet:text-start">
            <div className="tablet:ml-40 tablet:flex-row justify-left items-left mt-20">
              <div className="mx-5 w-[320px] flex-col items-center scale-[0.9] tablet:scale-125 tablet:mr-5 tablet:ml-5">
                <Button
                  useUrl
                  url={
                    "https://calendar.google.com/calendar/ical/bd7fedaedb37163c5fe88cefd870f17db4f2894034c347d80936bfbe761dcc82%40group.calendar.google.com/public/basic.ics"
                  }
                >
                  Aggiungi al tuo Calendar
                </Button>
              </div>
            </div>
          </div>
          <Image
            src={PageBreakImage}
            alt="Page Break"
            width={1080}
            height={890}
            priority
            className="w-full -mt-10 tablet:-mt-40 tablet:-mb-40"
          />
          <div className="text-white tablet:w-full tablet:items-center text-center tablet:text-start laptop:-mt-32 mb-20">
            <div className="text-20 tablet:text-37 laptop:text-[45px] ml-0 tablet:ml-36">
              <strong>
                HAI BISOGNO DI
                <br /> ULTERIORI INFORMAZIONI?
              </strong>
            </div>
            <div className="tablet:ml-40 tablet:flex-row justify-left items-left mt-8">
              <div className="mx-5 opacity-40 w-[320px] flex-col items-center scale-[0.9] tablet:scale-125 tablet:mr-5 tablet:ml-5 mb-6 hidden">
                <Button useUrl={true}>Unisciti al gruppo Telegram</Button>
              </div>
              <div className="mx-5 w-[320px] flex-col items-center scale-[0.9] tablet:scale-125 tablet:mr-5 tablet:ml-5 mb-6">
                <Button url="mailto:info@jeiom23.it" useUrl={true}>
                  Contattaci via mail
                </Button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}
