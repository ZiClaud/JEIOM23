import Typography from "@/components/atoms/Typography"
import NavBar from "@atoms/Navbar"
import Footer from "@organisms/Footer"
import Button from "@/components/atoms/Button"

export default function Contacts() {
  return (
    <main className="bg-black-jeiom w-screen h-full relative z-10">
      <NavBar />
      <div className="px-4 mt-16 flex flex-col gap-16 items-center h-full">
        <div className="bg-contact absolute top-0 bg-cover bg-no-repeat h-screen w-screen z-0" />
        <Typography variant="h1" className="uppercase text-center z-10">
          Hai bisogno di aiuto?
        </Typography>
        <div className="opacity-50 w-fit hidden">
          <Button useUrl={false}>Unisciti al gruppo Telegram</Button>
        </div>
        <div className="text-center px-5 z-10">
          <Typography variant="button" className="text-white">
            Mandaci una mail a{" "}
            <span className="underline">
              <a href="mailto:info@jeiom23.it">info@jeiom23.it</a>
            </span>
            <br />
            <br />
            Se hai <b>DAVVERO</b> bisogno, contatta i nostri fantastici PM su Telegram!
            <br />
            <br />
            <span className="underline italic">
              <a href="https://t.me/bvbvbu" target="_blank">
                Oscar Quintana
              </a>
            </span>
            <br />
            <br />
            <span className="underline italic">
              <a href="https://t.me/SILFello" target="_blank">
                Simone Schiavello
              </a>
            </span>
          </Typography>
        </div>
      </div>
      <Footer />
    </main>
  )
}
