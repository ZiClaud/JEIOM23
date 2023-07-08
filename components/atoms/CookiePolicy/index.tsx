"use client"

import React, { FC, Fragment, useState } from "react"
import CookiePolicyProps from "./index.types"
import { Dialog, Transition } from "@headlessui/react"
import Typography from "../Typography"

const CookiePolicy: FC<CookiePolicyProps> = ({}) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
      <div className="">
        <Typography variant="h4">
          <div onClick={openModal}>Cookie Policy</div>
        </Typography>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed z-[999] inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Cookie Policy
                  </Dialog.Title>
                  <div className="mt-2">
                    <Typography variant="privacy" className="text-black">
                      <b>Cosa sono i cookie?</b> <br />
                      Questo sito fa uso di cookie, file di testo che vengono
                      registrati sul terminale dell&apos;utente oppure che
                      consentono l&apos;accesso ad informazioni sul terminale
                      dell&apos;utente. I cookie permettono di conservare
                      informazioni sulle preferenze dei visitatori, sono
                      utilizzati al fine di verificare il corretto funzionamento
                      del sito e di migliorarne le funzionalità personalizzando
                      il contenuto delle pagine in base al tipo del browser
                      utilizzato, oppure per semplificarne la navigazione
                      automatizzando le procedure (es. Login, lingua sito), ed
                      infine per l&apos;analisi dell&apos;uso del sito da parte
                      dei visitatori.
                      <br />
                      <b>
                        Il presente sito fa uso delle seguenti categorie di
                        cookie:
                      </b>
                      <br /> a{")"} cookie tecnici, utilizzati al solo fine di
                      effettuare la trasmissione di una comunicazione
                      elettronica, per garantire la corretta visualizzazione del
                      sito e la navigazione all&apos;interno di esso. Alcuni di
                      questi cookie sono eliminati alla chiusura del browser
                      (cookie di sessione), altri hanno una durata maggiore
                      (come ad esempio il cookie necessario per conservazione il
                      consenso dell&apos;utente in relazione all&apos;uso dei
                      cookie, che dura 1 anno). <br />
                      <b>Per questi cookie non occorre consenso.</b>
                      <br />
                      <br />
                      <b>DISABILITAZIONE COOKIE</b> <br /> L&apos;utente può
                      rifiutare l&apos;utilizzo dei cookie. Poiché i cookie sono
                      collegati al browser utilizzato, possono essere
                      disabilitati direttamente dal browser, così
                      rifiutando/revocando il consenso all&apos;uso dei cookie.
                      La disabilitazione dei cookie potrebbe impedire il
                      corretto utilizzo di alcune funzioni del sito stesso, in
                      particolare i servizi forniti da terze parti potrebbero
                      non essere accessibili, e quindi potrebbero non essere
                      visualizzabili:{" "}
                      <ul>
                        <li>
                          ∙ video di YouTube o altri servizi di condivisione
                          video;
                        </li>
                        <li>∙ i social button dei social network;</li>
                        <li>∙ le mappe di Google.</li>
                      </ul>
                      <br />
                      Le istruzioni per la disabilitazione dei cookies si
                      trovano alle seguenti pagine web:
                      <br />
                      <a
                        href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop?redirectslug=Attivare+e+disattivare+i+cookie&redirectlocale=it"
                        target="_blank"
                        className="underline"
                      >
                        Mozilla Firefox
                      </a>{" "}
                      -{" "}
                      <a
                        href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
                        target="_blank"
                        className="underline"
                      >
                        Microsoft Internet Explorer
                      </a>{" "}
                      -{" "}
                      <a
                        href="https://support.google.com/chrome/answer/95647?hl=it"
                        target="_blank"
                        className="underline"
                      >
                        Google Chrome
                      </a>{" "}
                      -{" "}
                      <a
                        href="https://help.opera.com/en/latest/web-preferences/#cookies"
                        target="_blank"
                        className="underline"
                      >
                        Opera
                      </a>{" "}
                      -{" "}
                      <a
                        href="https://support.apple.com/it-it/HT201265"
                        target="_blank"
                        className="underline"
                      >
                        Apple Safari
                      </a>
                    </Typography>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Capito, grazie
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CookiePolicy
