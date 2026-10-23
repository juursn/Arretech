import axios from "axios"
import { getToken } from "./authService"

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL?.trim() || import.meta.env.BASE_URL,
	timeout: 1000,
	responseType: "json",
	transitional: { silentJSONParsing: false },
})

// Interceptor de requisições: adiciona o token JWT ao header Authorization, se existir
api.interceptors.request.use(config => {
	const token = getToken()
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

export default api

export function getApiErrorMessage(error: unknown, fallback: string): string {
	if (axios.isAxiosError(error)) {
		if (error.response?.status === 401)
			return "Autenticação necessária. Entre novamente."
		if (error.response?.status === 403)
			return "Você não tem permissão para realizar esta ação."
		if (error.response?.status === 400)
			return "Confira os campos informados e tente novamente."
		if (error.response?.status === 404)
			return "O registro solicitado não foi encontrado."
		if (error.response?.status === 429)
			return "Muitas tentativas. Aguarde e tente novamente."
		if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
			return "O servidor demorou para responder. Tente novamente."
		}
		return fallback
	}
	return error instanceof Error ? error.message : fallback
}
