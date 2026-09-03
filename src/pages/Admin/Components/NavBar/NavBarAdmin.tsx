import logoArreTech from "../../../../assets/logo-white-arretech.png"
import { useTheme } from "../../../../hooks/useTheme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faBars,
	faClose,
	faMoon,
	faSun,
} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router"
import { useState } from "react"

export function NavBarAdmin() {
	const linksAdmin = "flex flex-col text-white text-md"
	const titleLinks =
		"border-b border-white/20 py-2 text-[12px] font-extralight uppercase tracking-wide text-white/60"
	const { isDark, toggleTheme } = useTheme()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<nav className="bg-primary-blue dark:bg-card-black lg:h-screen h-fit  lg:w-fit px-4 py-2 lg:py-6 fixed w-full">
				{/* Topo */}
				<div className="flex items-center justify-between gap-3 text-sm lg:pb-4">
					<img src={logoArreTech} className="w-6.25" />
					<h2 className="font-bold text-white hidden lg:block ">
						ArreTech Admin
					</h2>
					<div className="text-white text-lg lg:text-md space-x-3">
						<FontAwesomeIcon
							icon={isDark ? faSun : faMoon}
							onClick={toggleTheme}
						/>
						<FontAwesomeIcon
							icon={isOpen ? faClose : faBars}
							className="text-xl"
							onClick={() => {
								setIsOpen(prev => !prev)
							}}
						/>
					</div>
				</div>
				{isOpen && (
					<div>
						{/* Direcionar telas */}
						<div className={`${linksAdmin}`}>
							<h3 className={`${titleLinks}`}>Visualizar Alterações</h3>
							<NavLink to="/Arretech/">Tela Inicial</NavLink>
							<NavLink to="/Arretech/Noticias">Blog</NavLink>
						</div>
						<div className={`${linksAdmin}`}>
							<h3 className={`${titleLinks}`}>Criar</h3>
							<a href="">Comentários</a>
							<a href="">Notícias</a>
						</div>
						<div className={`${linksAdmin}`}>
							<h3 className={`${titleLinks}`}>Editar</h3>
							<a href="">Comentários</a>
							<a href="">Notícias</a>
						</div>
						<div className={`${linksAdmin}`}>
							<h3 className={`${titleLinks}`}>Deletar</h3>
							<a href="">Comentários</a>
							<a href="">Notícias</a>
						</div>
					</div>
				)}
			</nav>
		</>
	)
}
