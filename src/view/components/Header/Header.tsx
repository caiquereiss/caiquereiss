import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useHeaderController } from "./useHeaderController"
import { Logo } from "../Logo";

export function Header() {
  const { isMenuOpen, handleToggleMenu, theme, toggleTheme } = useHeaderController();


  return (
    <nav id="header" className="p-4 shadow-[1px_1px_14px_-9px_#000] lg:px-36 text-base font-medium text-indigo-250 bg-white gap-4 dark:bg-violet-900">
      <div className="flex items-center justify-between" >
        <div className="flex-1 items-center">
          <a href="/">
            <div className="text-3xl font-semibold text-indigo-250">
              <div className="absolute top-[0.1rem]"> <Logo className="w-6 h-6" /></div>
              <span>Caique Reis</span>
            </div>
          </a>
        </div>
        <div className="relative ml-6 right-4" onClick={toggleTheme}>
          {
            theme === 'dark' ?
              <SunIcon className="w-6 h-6 text-yellow-500" />
              : <MoonIcon className="w-6 h-6 text-blue-500" />
          }
        </div>
        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}
            className="text-indigo-250 focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4 text-base font-semibold uppercase">
          <a href="#about" className="py-1  hover:text-indigo-450">
            Sobre
          </a>
          <a href="#skills" className="py-1  hover:text-indigo-450">
            Habilidades
          </a>
          <a href="#portfolio" className="px-2 py-1 flex items-center justify-center  hover:text-indigo-450">
            Portfólio
          </a>
          <a href="https://drive.google.com/file/d/1g6OhFWJb0_VVeK3e6NlJm4niqU35aFuT/view?usp=sharing"
            target="_blank"
            className="flex items-center text-xs justify-center  hover:text-indigo-450 border rounded-full py-2 px-3 border-indigo-250">
            Currículo
          </a>
        </div>
      </div >
      {
        isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2  text-base font-semibold uppercase">
            <a href="#about" className="block hover:text-indigo-450">
              Sobre
            </a>
            <a href="#skills" className="block hover:text-indigo-450">
              Habilidades
            </a>
            <a href="#portfolio" className="block hover:text-indigo-450">
              Portfólio
            </a>
            <a href="https://drive.google.com/file/d/1g6OhFWJb0_VVeK3e6NlJm4niqU35aFuT/view?usp=sharing" className="flex items-center text-sm justify-center  hover:text-indigo-450 border rounded-full py-2 px-2 border-indigo-250">
              Currículo
            </a>
          </div>
        )
      }
    </nav >
  )

}
