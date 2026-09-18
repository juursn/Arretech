import { logoAzul } from "../../assets"
import { NavLink } from "react-router-dom"

export const Header = () => {
	return (
		<div className="flex justify-between items-center absolute w-[85%] mt-10 text-white text-sm sm:text-base">
			<div>
				<NavLink to="/">
					<img src={logoAzul} alt="logo azul hidden" />
				</NavLink>
			</div>
			<div className="hidden gap-15 sm:flex">
				<NavLink to="/Arretech/Noticias">Notícias</NavLink>
				<NavLink to="/Arretech/#contato">Contatos</NavLink>
				<NavLink to="/Arretech/Servicos">Serviços</NavLink>
			</div>
			<div>
				<button className=" p-1.5 rounded-2xl bg-white text-black ">
					Entre em contato
				</button>
			</div>
			<div className="hidden">
				<NavLink to="/Arretech/Noticias">Notícias</NavLink>
				<NavLink to="/Arretech/#contato">Contatos</NavLink>
				<NavLink to="/Arretech/Servicos">Serviços</NavLink>
				<button>Entre em contato</button>
			</div>
		</div>
	)
}
