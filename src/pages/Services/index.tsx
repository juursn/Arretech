import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/NavBar/NavBar"
import { services } from "../../data/services"
import { ServiceHero } from "./components/ServiceHero"
import { ServiceCard } from "./components/Card/ServiceCard"
import { motion } from "motion/react"

export function Services() {
	return (
		<section className="flex flex-col bg-light dark:bg-dark min-h-screen">
			<NavBar />
			<ServiceHero />
			<section className="px-8 py-4 sm:px-20 bg-light-glass dark:bg-dark-glass text-text-gray dark:text-white">
				<h2 className="pb-4 text-3xl font-bold text-gradient-blue dark:text-gradient-babyBlue">
					Sumário
				</h2>
				<ol className="space-y-2 font-semibold list-decimal list-inside">
					{services.map(service => (
						<li
							className="cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-2 decoration-sky-500"
							key={service.id}
						>
							<a href={`#${service.id}`}>{service.label}</a>
						</li>
					))}
				</ol>
			</section>
			{services.map(service => (
				<section
					className="flex justify-center w-full px-4 py-4 my-4 shadow-[0_0_5px_4px_rgba(0,0,0,0.1)] bg-light-glass dark:bg-dark-glass"
					id={service.id}
					key={service.id}
				>
					<motion.div
						className="w-full p-4 space-y-4 border sm:max-w-10/12 border-primary-blue rounded-2xl"
						initial={{ opacity: 0.2, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: false, amount: 0.3 }}
						transition={{ duration: 0.35 }}
					>
						<ServiceCard
							icon={service.icon}
							label={service.label}
							text={service.text}
							deliveries={service.deliveries}
							technologies={service.technologies}
						/>
					</motion.div>
				</section>
			))}
			<Footer />
		</section>
	)
}
