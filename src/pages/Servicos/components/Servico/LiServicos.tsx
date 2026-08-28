import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface LiServicosProps {
	label: string
}

export function LiServicos({ label }: LiServicosProps) {
	return (
		<>
			<li className="flex items-center gap-2 text-sm font-medium text-text-gray dark:text-white">
				<span className="text-xl text-primary-blue">
					<FontAwesomeIcon icon={faCircleCheck} />
				</span>
				<span>{label}</span>
			</li>
		</>
	)
}
