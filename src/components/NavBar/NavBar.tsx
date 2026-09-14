import { useState } from "react"
import { logoAzul, logoBranca } from "../../assets"
import { NavLink } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faBars,
	faXmark,
	faSun,
	faMoon,
} from "@fortawesome/free-solid-svg-icons"
import { useTheme } from "../../hooks/useTheme"

export const NavBar = () => {
	function ScrollTop() {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}
	const [isOpen, setIsOpen] = useState(false)
	// Chamando o hook corretamente no topo do componente
	const { isDark, toggleTheme } = useTheme()

	return (
		<header className="sticky top-0 z-50 flex flex-col justify-center w-full px-4 py-2 text-sm h-fit bg-light-glass dark:bg-dark-glass backdrop-blur-sm text-primary-blue dark:text-white">
			<div className="flex items-center justify-between">
				{/* Logo */}
				<div>
					<NavLink to="/Arretech">
						<img
							src={isDark ? logoBranca : logoAzul}
							alt="Logo"
							className="w-auto h-8"
						/>
					</NavLink>
				</div>

				{/* Links Desktop */}

				<nav className="items-center hidden gap-10 font-medium sm:flex">
					<NavLink
						to="/Arretech/Noticias"
						onClick={ScrollTop}
						className="transition-all ease-out duration-300 hover:scale-105 hover:text-gradient-purple"
					>
						Notícias
					</NavLink>

					<a
						href="#contato"
						className="transition-all ease-out duration-300 hover:scale-105 hover:text-gradient-purple"
					>
						Contato
					</a>

					<NavLink
						to="/Arretech/Servicos"
						className="transition-all ease-out duration-300 hover:scale-105 hover:text-gradient-purple"
						onClick={ScrollTop}
					>
						Serviços
					</NavLink>
				</nav>

				<div className="flex items-center gap-4">
					{/* Botão de Troca de Tema */}
					<button
						onClick={toggleTheme}
						aria-label="Alternar tema"
						className="p-1 text-lg cursor-pointer hover:text-primary-blue  rounded-md transition-all duration-300 ease-linear"
					>
						<FontAwesomeIcon icon={isDark ? faSun : faMoon} />
					</button>

					{/* Botão Entre em Contato (Visível apenas no desktop) */}
					<a
						className="hidden sm:flex items-center px-5 py-2.5 rounded-xl bg-primary-blue text-white dark:bg-white font-medium bg-linear-to-r from-primary-blue via-sky-500 to-primary-blue bg-size-[200%_100%] bg-left hover:bg-right hover:ring-white hover:ring-2 transition-all duration-500 ease-in-out"
						href="https://ig.me/m/testearretech?ref=site"
						target="_blank"
					>
						Entre em contato
					</a>

					{/* Botão Hamburguer Mobile */}
					<button
						className="p-1 text-xl cursor-pointer sm:hidden"
						onClick={() => setIsOpen(!isOpen)}
						aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
					>
						<FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
					</button>
				</div>
			</div>

			{/* Menu Dropdown Mobile */}

			{isOpen && (
				<div className="flex flex-col items-center gap-5 py-4 sm:hidden ">
					<NavLink
						to="/Arretech/Noticias"
						onClick={() => {
							setIsOpen(false)
							ScrollTop()
						}}
						className="hover:text-sky-500
						dark:hover:text-gradient-babyBlue
						transition-colors ease-linear duration-200"
					>
						Notícias
					</NavLink>
					<a
						href="#contato"
						onClick={() => setIsOpen(false)}
						className="hover:text-sky-500
						dark:hover:text-gradient-babyBlue
						transition-colors ease-linear duration-200"
					>
						Contato
					</a>

					<NavLink
						to="/Arretech/Servicos"
						onClick={() => setIsOpen(false)}
						className="hover:text-sky-500
						dark:hover:text-gradient-babyBlue transition-colors ease-linear duration-200"
					>
						Serviços
					</NavLink>
					<button className="w-full py-2.5 rounded-xl bg-primary-blue text-white dark:bg-white dark:text-slate-900 font-medium">
						Entre em contato
					</button>
				</div>
			)}
		</header>
	)
}
