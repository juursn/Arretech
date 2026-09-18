import { motion } from "motion/react"
import LogoArreTech from "../assets/logo-arretech.png"

export function LoadingScreen() {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-full bg-light dark:bg-dark text-primary-blue transition-colors duration-300">
			<div className="relative flex items-center justify-center">
				{/* Anel exterior com animação de rotação suave */}
				<motion.div
					className="w-24 h-24 rounded-full border-2 border-primary-blue/20 border-t-primary-blue"
					animate={{ rotate: 360 }}
					transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
				/>

				{/* Logótipo da Arretech */}
				<div className="absolute flex items-center justify-center">
					<img
						src={LogoArreTech}
						alt="Arretech Logo"
						className="w-12 h-12 object-contain"
					/>
				</div>
			</div>
			<p className="mt-6 text-sm font-semibold tracking-widest uppercase text-slate-600 dark:text-slate-300">
				Carregando...
			</p>
		</div>
	)
}
