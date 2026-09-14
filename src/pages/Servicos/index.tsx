import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/NavBar/NavBar"
import { servicos } from "../../data/servicos"
import { HeroServicos } from "./components/Header/HeroServicos"
import { ServicoCard } from "./components/Servico/ServicoCard"
import { motion } from "motion/react"

export function Servicos() {
	return (
		<section className="flex flex-col bg-light dark:bg-dark min-h-screen">
			<NavBar />
			<HeroServicos />
			<section className="px-8 py-4 sm:px-20 bg-light-glass dark:bg-dark-glass text-text-gray dark:text-white">
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
					<motion.div
						className="w-full p-4 space-y-4 border sm:max-w-10/12 border-primary-blue rounded-2xl"
						initial={{ opacity: 0.2, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: false, amount: 0.3 }}
						transition={{ duration: 0.35 }}
					>
						<ServicoCard
							key={servico.label}
							icon={servico.icon}
							label={servico.label}
							text={servico.text}
							deliveries={servico.deliveries}
							technologies={servico.technologies}
						/>
					</motion.div>
				</section>
			))}
			<Footer />
		</section>
	)
}
