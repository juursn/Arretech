import type { SelectHTMLAttributes, ReactNode } from "react"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	children: ReactNode
}

export function Select({ children, className = "", ...props }: SelectProps) {
	return (
		<select
			{...props}
			className={`bg-input-light dark:bg-input-dark w-full rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary-blue transition-all text-sm text-gray-400 cursor-pointer ${className}`}
		>
			{children}
		</select>
	)
}
