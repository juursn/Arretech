import { CheckCircle } from "lucide-react"

interface ServiceListProps {
	label: string
}

export function ServiceList({ label }: ServiceListProps) {
	return (
		<>
			<li className="flex items-center gap-2 text-sm font-medium text-text-gray dark:text-white">
				<span className="text-xl text-primary-blue">
					<CheckCircle />
				</span>
				<span>{label}</span>
			</li>
		</>
	)
}
