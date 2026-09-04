import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export function Button({ children, className = "", ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={`bg-gradient-blueBG rounded-xl justify-center gap-2 flex text-white items-center font-medium px-3 py-2 hover:shadow-[0px_0px_25px_-5px_#2f91ff] transition-all ease-linear duration-300 cursor-pointer w-full mt-2 ${className}`}
		>
			{children}
		</button>
	)
}
