import logoArreTech from "../../../assets/logo-white-arretech.png"
import { useTheme } from "../../../hooks/useTheme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faBars,
	faClose,
	faMoon,
	faSun,
} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../../../context/AuthContext"

export function AdminNavBar() {
	const linksAdmin = "flex flex-col text-white text-md gap-1"
	const titleLinks =
		"border-b border-white/20 py-2 text-[12px] font-extralight uppercase tracking-wide text-white/60 mt-2"
	const { theme, toggleTheme } = useTheme()
	const [isOpen, setIsOpen] = useState(false)
	const logout = useAuth()

	return (
		<div className="fixed top-0 left-0 z-50 w-full h-auto px-4 py-3 bg-primary-blue dark:bg-card-black lg:w-64 lg:h-screen lg:py-6">
			{/* Topo / Header da Sidebar */}
			<div className="flex items-center justify-between gap-3 text-sm lg:pb-4">
				<div className="flex items-center gap-3">
					<img src={logoArreTech} className="w-6.25" alt="Logo" />
					<h2 className="text-base font-bold text-white">ArreTech Admin</h2>
				</div>

				<div className="flex items-center space-x-3 text-lg text-white">
					{/* Ícone do Tema (Visível em todas as telas) */}
					<FontAwesomeIcon
						icon={theme === "dark" ? faSun : faMoon}
						onClick={toggleTheme}
						className="cursor-pointer"
					/>

					{/* Botão Hambúrguer (Completamente oculto a partir de lg) */}
					<button
						type="button"
						className="flex items-center justify-center p-1 cursor-pointer lg:hidden focus:outline-none"
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
					<NavLink to="/">Tela Inicial</NavLink>
					<NavLink to="/Noticias">Blog</NavLink>
				</div>
				<div className={linksAdmin}>
					<h3 className={titleLinks}>Criar</h3>
					<NavLink
						to="/Admin#criar-comentarios"
						onClick={() => setIsOpen(false)}
					>
						Comentários
					</NavLink>
					<NavLink to="/Admin#criar-noticias" onClick={() => setIsOpen(false)}>
						Notícias
					</NavLink>
				</div>
				<div className={linksAdmin}>
					<h3 className={titleLinks}>Editar</h3>
					<NavLink
						to="/Admin#editar-comentarios"
						onClick={() => setIsOpen(false)}
					>
						Comentários
					</NavLink>
					<NavLink to="/Admin#editar-noticias" onClick={() => setIsOpen(false)}>
						Notícias
					</NavLink>
				</div>
				<div className={linksAdmin}>
					<h3 className={titleLinks}>Deletar</h3>
					<NavLink
						to="/Admin#deletar-comentarios"
						onClick={() => setIsOpen(false)}
					>
						Comentários
					</NavLink>
					<NavLink
						to="/Admin#deletar-noticias"
						onClick={() => setIsOpen(false)}
					>
						Notícias
					</NavLink>
				</div>
				<button
					onClick={logout.logout}
					className="w-full py-2 mt-8 text-sm text-white transition-colors duration-300 bg-red-800 cursor-pointer hover:bg-red-700 hover:ring-2 hover:ring-white rounded-xl"
				>
					Logout
				</button>
			</div>
		</div>
	)
}
