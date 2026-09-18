import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import type { ComponentType, ReactNode } from "react"

export interface Service {
	id: string
	icon: IconDefinition
	label: string
	text: string
	deliveries: string[]
	technologies: {
		icon: ReactNode | ComponentType<{ className?: string }>
		label: string
	}[]
}
