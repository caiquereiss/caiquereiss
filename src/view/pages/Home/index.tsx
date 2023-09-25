


import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { Header } from "../../components/Header/Header";
import { Portfolio } from "./components/Portfolio";



export function Home() {
  return (

    <div className="w-full h-full">
      <header className="z-50 fixed w-full">
        <Header />
      </header>

      <section>
        <About />
      </section>

      <section className="flex items-center justify-center mt-6 mb-6 animate-bounce ">
        <DoubleArrowDownIcon className="w-9 h-9 text-indigo-250" />
      </section>


      <section>
        <Skills />
      </section>

      <section className="flex items-center justify-center mt-6 mb-6 animate-bounce ">
        <DoubleArrowDownIcon className="w-9 h-9 text-indigo-250" />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>
    </div >
  )
}
