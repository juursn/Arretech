import logoArreTech from "../../../assets/logo-white-arretech.png"
import { useTheme } from "../../../hooks/useTheme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faBars,
	faClose,
	faMoon,
	faSun,
} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router"
import { useState } from "react"

export function AdminNavBar() {
	const linksAdmin = "flex flex-col text-white text-md gap-1"
	const titleLinks =
		"border-b border-white/20 py-2 text-[12px] font-extralight uppercase tracking-wide text-white/60 mt-2"
	const { theme, toggleTheme } = useTheme()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="bg-primary-blue dark:bg-card-black fixed top-0 left-0 w-full lg:w-64 h-auto lg:h-screen px-4 py-3 lg:py-6 z-50">
			{/* Topo / Header da Sidebar */}
			<div className="flex items-center justify-between gap-3 text-sm lg:pb-4">
				<div className="flex items-center gap-3">
					<img src={logoArreTech} className="w-6.25" alt="Logo" />
					<h2 className="font-bold text-white text-base">ArreTech Admin</h2>
				</div>

				<div className="flex items-center text-white text-lg space-x-3">
					{/* Ícone do Tema (Visível em todas as telas) */}
					<FontAwesomeIcon
						icon={theme === "dark" ? faSun : faMoon}
						onClick={toggleTheme}
						className="cursor-pointer"
					/>

					{/* Botão Hambúrguer (Completamente oculto a partir de lg) */}
					<button
						type="button"
						className="lg:hidden flex items-center justify-center p-1 cursor-pointer focus:outline-none"
						onClick={() => setIsOpen(prev => !prev)}
					>
						<FontAwesomeIcon
							icon={isOpen ? faClose : faBars}
							className="text-xl"
						/>
					</button>
				</div>
			</div>

			{/* Conteúdo: Escondido no mobile se isOpen=false, Sempre visível no desktop (lg:block) */}
			<div className={`${isOpen ? "block" : "hidden"} lg:block mt-4 lg:mt-0`}>
				<div className={linksAdmin}>
					<h3 className={titleLinks}>Visualizar Alterações</h3>
					<NavLink to="/Arretech/">Tela Inicial</NavLink>
					<NavLink to="/Arretech/Noticias">Blog</NavLink>
				</div>
				<div className={linksAdmin}>
					<h3 className={titleLinks}>Criar</h3>
					<a href="">Comentários</a>
					<a href="">Notícias</a>
				</div>
				<div className={linksAdmin}>
					<h3 className={titleLinks}>Editar</h3>
					<a href="">Comentários</a>
					<a href="">Notícias</a>
				</div>
				<div className={linksAdmin}>
					<h3 className={titleLinks}>Deletar</h3>
					<a href="">Comentários</a>
					<a href="">Notícias</a>
				</div>
			</div>
		</div>
	)
}
