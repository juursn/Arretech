import { logoAzul } from "../../assets"
import { NavLink } from "react-router"

export const Header = () => {
	return (
		<div className="flex justify-between items-center absolute w-[85%] mt-10 text-white text-sm sm:text-base">
			<div>
				<NavLink to="/">
					<img src={logoAzul} alt="logo azul hidden" />
				</NavLink>
			</div>
			<div className="flex hidden gap-15 sm:flex">
				<NavLink to="/">Sobre nós</NavLink>
				<NavLink to="/">Contatos</NavLink>
				<NavLink to="/Arretech/Servicos">Serviços</NavLink>
			</div>
			<div>
				<button className=" p-1.5 rounded-2xl bg-white text-black ">
					Entre em contato
				</button>
			</div>
			<div className="hidden">
				<NavLink to="/">Sobre nós</NavLink>
				<NavLink to="/">Contatos</NavLink>
				<NavLink to="/">Serviços</NavLink>
				<button>Entre em contato</button>
			</div>
		</div>
	)
}


