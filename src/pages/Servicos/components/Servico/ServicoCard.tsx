import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { LiServicos } from "./LiServicos"
import { BadgeServico } from "./Badges"

interface ITechnology {
	icon: IconDefinition
	label: string
}

interface ServiceCardProps {
	icon: IconDefinition
	label: string
	text: string
	deliveries: string[]
	technologies: ITechnology[]
}

export function ServicoCard({
	icon,
	label,
	text,
	deliveries,
	technologies,
}: ServiceCardProps) {
	return (
		<>
			<div className="flex gap-x-4">
				<span className="inline-flex items-center justify-center w-auto p-3 text-3xl bg-light-badge rounded-xl dark:bg-dark-badge">
					<FontAwesomeIcon icon={icon} className="icon-gradient" />
				</span>
				<h2 className="text-xl font-extrabold text-gradient-blue dark:text-gradient-babyBlue">
					{label}
				</h2>
			</div>
			<p className="font-light text-text-gray max-w-9/12 dark:text-white">
				{text}
			</p>
			<div className="grid items-start grid-cols-1 gap-4 lg:grid-cols-2 ">
				<div>
					<h2 className="pb-2.5 font-bold text-md text-primary-blue dark:text-white">
						O que entregamos
					</h2>
					{deliveries.map(delivery => (
						<LiServicos key={delivery} label={delivery} />
					))}
				</div>
				<div>
					<h2 className="pb-2.5 font-bold text-primary-blue dark:text-white">
						Tecnologias
					</h2>
					<div className="grid grid-cols-2 gap-2 md:w-fit">
						{technologies.map(technology => (
							<BadgeServico
								key={technology.label}
								icon={technology.icon}
								label={technology.label}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
