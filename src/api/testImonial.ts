import { isTestimonial, type Testimonial } from "../types/testImonial"
import { api } from "./axios"

// 1. GET (Listar todos os depoimentos)
export async function getTestimonial(signal?: AbortSignal): Promise<Testimonial[]> {
	const response = await api.get<unknown>("/depoimentos", { signal })
	if (
		!Array.isArray(response.data) ||
		!response.data.every(isTestimonial) ||
		new Set(response.data.map(item => String(item.id))).size !== response.data.length
	) {
		throw new Error("A API retornou uma lista de depoimentos inválida.")
	}
	return response.data
}
// 2. POST (Criar um novo depoimento)
export async function createTestimonial(
	data: Omit<Testimonial, "id">
): Promise<Testimonial> {
	const response = await api.post<unknown>("/depoimentos", data)
	if (!isTestimonial(response.data)) {
		throw new Error("A API retornou um depoimento inválido.")
	}
	return response.data
}
// 3. PATCH (Atualizar dados de um depoimento existente)
export async function updateTestimonial(
	id: string | number,
	data: Partial<Omit<Testimonial, "id">>
): Promise<Testimonial> {
	const response = await api.patch<unknown>(`/depoimentos/${encodeURIComponent(id)}`, data)
	if (!isTestimonial(response.data)) {
		throw new Error("A API retornou um depoimento inválido.")
	}
	return response.data
}
// 4. DELETE (Remover um depoimento pelo ID)
export async function deleteTestimonial(id: string | number): Promise<void> {
	await api.delete(`/depoimentos/${encodeURIComponent(id)}`)
}
