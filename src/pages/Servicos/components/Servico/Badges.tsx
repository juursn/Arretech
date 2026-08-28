import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface badgeServicoProps {
	icon: IconDefinition
	label: string
}

export function BadgeServico({ icon, label }: badgeServicoProps) {
	return (
		<div className="flex items-center gap-2 px-1.8 py-2 text-xl w-full md:w-38 md: px-2.5 bg-light-badge dark:bg-dark-badge text-L-icon-badge dark:text-D-icon-badge rounded-xl">
			<FontAwesomeIcon icon={icon} />
			<p className="text-sm font-light text-black dark:text-white">{label}</p>
		</div>
	)
}
