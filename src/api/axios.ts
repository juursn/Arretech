import axios from "axios"

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL?.trim() || import.meta.env.BASE_URL,
	timeout: 1000,
	responseType: "json",
	transitional: { silentJSONParsing: false },
})

export function getApiErrorMessage(error: unknown, fallback: string): string {
	if (axios.isAxiosError(error)) {
		if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
			return "A requisição demorou demais. Tente novamente."
		}
		const status = error.response?.status
		if (!error.response) return "Não foi possível conectar à API. Tente novamente."
		if (status === 400 || status === 422) return "Verifique os dados informados e tente novamente."
		if (status === 401 || status === 403) return "Você não tem permissão para realizar esta operação."
		if (status === 404) return "O registro solicitado não foi encontrado."
		if (status === 409) return "Os dados estão em conflito. Atualize a página e tente novamente."
		if (status === 429) return "Muitas tentativas. Aguarde um pouco e tente novamente."
		return fallback
	}
	return error instanceof Error && error.message.trim() ? error.message : fallback
}
