import type { InputHTMLAttributes } from "react"

interface InputAuthProps extends Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"onChange"
> {
	value: string
	onChange: (value: string) => void
}

export function InputAuth({ value, onChange, ...props }: InputAuthProps) {
	return (
		<input
			{...props}
			value={value}
			onChange={e => onChange(e.target.value)}
			className="w-full px-3 py-2 text-sm text-gray-800 bg-gray-100 rounded-md focus:ring-1 focus:ring-sky-600"
		/>
	)
}
