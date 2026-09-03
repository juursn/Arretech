import type { ComponentType, ReactNode } from "react"

interface badgeServicoProps {
	icon: ReactNode | ComponentType<{ className?: string }>
	label: string
}

export function BadgeServico({
	icon: IconComponent,
	label,
}: badgeServicoProps) {
	return (
		<div className="flex items-center gap-1.5 py-2 w-full sm:w-38 px-2 bg-light-badge dark:bg-dark-badge text-L-icon-badge dark:text-D-icon-badge rounded-xl">
			<div className="flex items-center justify-center text-xl">
				{typeof IconComponent === "function" ? (
					<IconComponent />
				) : (
					IconComponent
				)}
			</div>
			<p className="text-[14px] font-light text-black dark:text-white">
				{label}
			</p>
		</div>
	)
}
