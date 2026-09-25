import {
	createContext,
	useCallback,
	useEffect,
	useMemo,
	useState,
	type ReactNode,
} from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
	theme: Theme
	toggleTheme: () => void
}
interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
)

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(() => {
		const savedTheme = localStorage.getItem("theme") as Theme
		if (savedTheme === "light" || savedTheme === "dark") return savedTheme

		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light"
	})

	useEffect(() => {
		const root = document.documentElement

		if (theme === "dark") {
			root.classList.add("dark")
		} else {
			root.classList.remove("dark")
		}
		localStorage.setItem("theme", theme)
	}, [theme])

	const toggleTheme = useCallback(() => {
		setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
	}, [])

	const value = useMemo(
		() => ({
			theme,
			toggleTheme,
		}),
		[theme, toggleTheme]
	)

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
