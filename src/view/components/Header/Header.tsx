import { Link } from "react-router-dom"
import { useHeaderController } from "./useHeaderController"

export function Header() {
  const { isMenuOpen, handleToggleMenu } = useHeaderController()

  return (
    <nav id="header" className="p-4 shadow-[1px_1px_20px_-10px_#000] lg:px-36 text-base font-medium text-indigo-250">
      <div className="flex items-center justify-between" >
        <div>
          <a href="/">
            <h1 className="text-4xl font-semibold text-indigo-250">Caique Reis</h1>
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}
            className="text-blue-900 focus:outline-none"
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
          <Link to="/" className="py-1  hover:text-indigo-250">
            Sobre
          </Link>
          <Link to="/skills" className="py-1  hover:text-indigo-250">
            Habilidades
          </Link>
          <Link to="/portfolio" className="px-2 py-1 flex items-center justify-center  hover:text-indigo-250">
            Portfólio
          </Link>
        </div>
      </div >
      {
        isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2  text-base font-semibold uppercase">
            <Link to="/" className="block hover:text-indigo-250">
              Sobre
            </Link>
            <Link to="/skills" className="block hover:text-indigo-250">
              Habilidades
            </Link>
            <Link to="/portfolio" className="block hover:text-indigo-250">
              Portfólio
            </Link>
          </div>
        )
      }
    </nav >
  )

}
