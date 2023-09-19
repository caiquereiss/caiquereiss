import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { AsidePerfil } from "../components/AsidePerfil";


export function AuthLayout() {
  return (
    // <div className="flex w-full h-full  overflow-y-auto md:overflow-hidden  flex-col">
    //   <header className="border-b-2 border-gray-750">
    //     <Header />
    //   </header>

    //   <div className="flex flex-col w-full h-full md:flex-row">

    //     <aside className="w-full h-full border-b-2 border-gray-750  md:border-r-2 md:w-[25%] md:border-b-0">
    //       <AsidePerfil />
    //     </aside>

    //     <div id="outline" className="w-full border-b-2 border-gray-750 md:w-[75%] md:border-b-0">
    //       <Outlet />
    //     </div>
    //   </div>

    // </div>
    <div className="flex w-full h-full  overflow-y-auto md:overflow-hidden  flex-col">
      <header className="">
        <Header />
      </header>

      <div className="flex flex-col w-full h-full md:flex-row">

        <aside className="w-full h-full md:w-[25%] ">
          <AsidePerfil />
        </aside>

        <div id="outline" className="w-full  md:w-[75%] ">
          <Outlet />
        </div>
      </div>

    </div>
  )
}
