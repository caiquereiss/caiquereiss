


import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { Header } from "../../components/Header/Header";



export function Home() {
  return (

    <div className="w-full h-full ">
      <header className="z-50 fixed w-full">
        <Header />
      </header>

      <section id="about">
        <About />
      </section>

      <section className="flex items-center justify-center mt-6 mb-6 animate-pulse  ">
        <ArrowDownIcon className="w-9 h-9" />
      </section>


      <section id="skills" className="w-full h-full"  >
        <Skills />
      </section>
    </div >
  )
}
