import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
	return (
		<input
			{...props}
			className={`bg-input-light dark:bg-input-dark w-full rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary-blue transition-all text-sm ${className}`}
		/>
	)
}
