import { useState} from "react"
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
	const [isOpen, setIsOpen] = useState(false)

	// Chamando o hook corretamente no topo do componente
	const { isDark, toggleTheme } = useTheme()

	return (
		<header className="fixed z-50 flex flex-col justify-center w-full px-4 py-2 text-sm h-fit bg-light-glass dark:bg-dark-glass backdrop-blur-sm text-primary-blue dark:text-white">
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
				< nav className="items-center hidden gap-10 font-medium sm:flex">
					<NavLink to="/" className="transition-colors hover:text-sky-500">
						Sobre nós
					</NavLink>
					<NavLink to="/" className="transition-colors hover:text-sky-500">
						Contato
					</NavLink>
					<NavLink to="/Arretech/Servicos/" className="transition-colors hover:text-sky-500">
						Serviços
					</NavLink>
				</nav>

				{/* Ações da Direita (Tema + Botão CTA + Menu Hamburguer) */}
				<div className="flex items-center gap-4">
					{/* Botão de Troca de Tema */}
					<button
						onClick={toggleTheme}
						aria-label="Alternar tema"
						className="p-2 text-lg transition-opacity cursor-pointer"
					>
						<FontAwesomeIcon icon={isDark ? faSun : faMoon} />
					</button>

					{/* Botão Entre em Contato (Visível apenas no desktop) */}
					<button className="hidden sm:flex items-center px-5 py-2.5 rounded-xl bg-sky-500 text-white dark:bg-white dark:text-slate-900 font-medium hover:opacity-90 transition-opacity">
						Entre em contato
					</button>

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
			{
				isOpen && (
					<div className="flex flex-col items-center gap-5 py-4 sm:hidden ">
						<NavLink
							to="/"
							onClick={() => setIsOpen(false)}
							className="hover:text-sky-500"
						>
							Sobre nós
						</NavLink>
						<NavLink
							to="/"
							onClick={() => setIsOpen(false)}
							className="hover:text-sky-500"
						>
							Contato
						</NavLink>
						<NavLink
							to="/"
							onClick={() => setIsOpen(false)}
							className="hover:text-sky-500"
						>
							Serviços
						</NavLink>
						<button className="w-full py-2.5 rounded-xl bg-primary-blue text-white dark:bg-white dark:text-slate-900 font-medium">
							Entre em contato
						</button>
					</div>
				)
			}
		</header >
	)
}
