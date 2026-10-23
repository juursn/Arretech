export interface Testimonial {
	id: string | number
	content: string
	author: string
	avatarUrl?: string
	role: string
	company: string
}

// Dados externos precisam ser verificados em execução, além da tipagem.
export function isTestimonial(value: unknown): value is Testimonial {
	if (!value || typeof value !== "object" || Array.isArray(value)) return false
	const item = value as Record<string, unknown>

	return (
		((typeof item.id === "string" && item.id.trim() !== "") ||
			(typeof item.id === "number" && Number.isFinite(item.id))) &&
		["content", "author", "role", "company"].every(key => {
			const field = item[key]
			return typeof field === "string" && field.trim() !== ""
		}) &&
		(item.avatarUrl === undefined || typeof item.avatarUrl === "string")
	)
}
