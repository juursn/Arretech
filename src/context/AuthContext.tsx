import {
	createContext,
	useState,
	useEffect,
	useContext,
	type ReactNode,
} from "react"

import { usersData } from "../mock/data/Users"
import { saveToken, getToken, logout as removeToken } from "../api/authService"

// Tipo de usuário
type User = (typeof usersData)[number]

// O que o contexto disponibiliza
interface AuthContextType {
	user: User | null
	loading: boolean
	isAuthenticated: boolean
	login: (email: string, password: string) => void
	logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

const MOCK_TOKEN = "jwt-token-mock"
const USER_EMAIL_KEY = "@arretechpb-user-email"

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)

	// Recupera a sessão simulada ao iniciar
	useEffect(() => {
		const token = getToken()
		const email = localStorage.getItem(USER_EMAIL_KEY)

		if (token === MOCK_TOKEN && email) {
			const userFound = usersData.find(user => user.email === email)

			if (userFound) {
				setUser(userFound)
			} else {
				removeToken()
				localStorage.removeItem(USER_EMAIL_KEY)
			}
		}

		setLoading(false)
	}, [])

	// Login simulado
	function login(email: string, password: string) {
		const userFound = usersData.find(
			user => user.email === email && user.password === password
		)

		if (!userFound) {
			throw new Error("Usuário não encontrado")
		}

		saveToken(MOCK_TOKEN)
		localStorage.setItem(USER_EMAIL_KEY, userFound.email)

		setUser(userFound)
	}

	// Logout
	function logout() {
		removeToken()
		localStorage.removeItem(USER_EMAIL_KEY)
		setUser(null)
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				isAuthenticated: !!user,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error("useAuth deve ser utilizado dentro de AuthProvider")
	}

	return context
}
