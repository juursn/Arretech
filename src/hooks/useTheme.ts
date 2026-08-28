import { useEffect, useState } from "react"

export function useTheme() {
	//inicializa lendo o localStorage
	const [isDark, setIsDark] = useState<boolean>(() => {
		return localStorage.getItem("theme") === "dark"
	})

	//sincronizar o tema olhando a tag HTML
	useEffect(() => {
		const root = document.documentElement

		if (isDark) {
			root.classList.add("dark")
			localStorage.setItem("theme", "dark")
		} else {
			root.classList.remove("dark")
			localStorage.setItem("theme", "light")
		}
	}, [isDark])

	// Função simples que inverte o booleano (true vira false, false vira true)
	const toggleTheme = () => setIsDark(prev => !prev)

	return { isDark, toggleTheme }
}
