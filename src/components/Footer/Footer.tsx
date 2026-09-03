import { titulo } from "../../assets"
import { servicos } from "../../data/servicos"
import { NavLink } from "react-router"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
	return (
		<footer className="flex flex-col gap-10 p-6 text-white border-t bg-primary-blue dark:bg-dark border-t-white/5">
			<div className="flex flex-col justify-between gap-10 lg:flex-row">
				<div className="flex flex-col gap-4">
					<img src={titulo} alt="" className="w-15" />
					<p className="w-11/12 sm:w-1/2 font-light text-sm min-w-[45%]">
						Especialistas em Inteligência Artificial, desenvolvendo soluções
						inovadoras que transformam negócios e potencializam resultados.
					</p>
				</div>

				<div className="flex flex-col gap-10 sm:flex-row">
					{/* Serviços */}
					<div className="flex flex-col">
						<h3 className="mb-3 text-xl font-bold">Serviços</h3>
						{servicos.map(servico => (
							<NavLink
								key={servico.label}
								to="/Arretech/Servicos"
								className="font-medium transition-opacity hover:underline hover:opacity-80 whitespace-nowrap"
							>
								{servico.label}
							</NavLink>
						))}
					</div>
					{/* Contato */}
					<div className="flex flex-col gap-2" id="contato">
						<h3 className="mb-3 text-xl font-bold">Contato</h3>
						<div className="flex flex-col gap-2">
							<a
								href="mailto:arre.tech123@gmail.com"
								className="flex items-center gap-2 transition-opacity hover:underline hover:opacity-80"
							>
								<FontAwesomeIcon icon={faEnvelope} />
								<span>arre.tech123@gmail.com</span>
							</a>
							<a
								href="tel:+5583991544516"
								className="flex items-center gap-2 transition-opacity hover:underline hover:opacity-80"
							>
								<FontAwesomeIcon icon={faPhone} />
								<span>+55 (83) 99154-4516</span>
							</a>
							<a
								href="https://instagram.com/arretechofc"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 transition-opacity hover:underline hover:opacity-80"
							>
								<FontAwesomeIcon icon={faInstagram} />
								<span>arretechofc</span>
							</a>
							<a
								href="https://linkedin.com/company/ARRETECH"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 transition-opacity hover:underline hover:opacity-80"
							>
								<FontAwesomeIcon icon={faLinkedin} />
								<span>ARRETECH</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* Termos */}
			<div className="py-4 text-sm font-light border-t border-white/5">
				<p>© 2024 ArreTech. Todos os direitos reservados.</p>
			</div>
		</footer>
	)
}
