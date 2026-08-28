import { servicos } from "../Servicos/servicos"
import { NavBar } from "../../components/NavBar/NavBar"
import { HeroServicos } from "./components/Header/HeroServicos"
import { ServicoCard } from "./components/Servico/ServicoCard"

export function Servicos() {
	return (
		// <div className="flex flex-col w-full min-h-screen bg-light dark:bg-dark ">
		<section className="flex flex-col bg-light dark:bg-dark">
			<NavBar />
			<HeroServicos />
			<section className="px-8 py-4 md:px-20 bg-light-glass dark:bg-dark-glass text-text-gray dark:text-white">
				<h2 className="pb-4 text-3xl font-bold text-gradient-blue dark:text-gradient-babyBlue">
					Sumário
				</h2>
				<ol className="space-y-2 font-semibold list-decimal list-inside">
					{servicos.map(service => (
						<li className="cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-2 decoration-sky-500">
							<a href={`#${service.id}`} key={service.id}>
								{service.label}
							</a>
						</li>
					))}
				</ol>
			</section>
			{servicos.map(servico => (
				<section
					className="flex justify-center w-full px-4 py-4 my-4 shadow-[0_0_5px_4px_rgba(0,0,0,0.1)] bg-light-glass dark:bg-dark-glass"
					id={servico.id}
				>
					<div
						className="w-full p-4 space-y-4 border md:max-w-10/12 border-primary-blue rounded-2xl "
						data-aos="fade-right"
					>
						<ServicoCard
							key={servico.label}
							icon={servico.icon}
							label={servico.label}
							text={servico.text}
							deliveries={servico.deliveries}
							technologies={servico.technologies}
						/>
					</div>
				</section>
			))}
		</section>
	)
}
