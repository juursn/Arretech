import type { InputHTMLAttributes } from "react"

export function DateInput(props: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<>
			<input
				type="date"
				{...props}
				className="bg-input-light dark:bg-input-dark w-full rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary-blue text-gray-400 cursor-pointer transition-all text-sm dark:scheme-dark"
			/>
		</>
	)
}
