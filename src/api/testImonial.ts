import type { Testimonial } from "../types/testImonial"
import { api } from "./axios"

// 1. GET (Listar todos os depoimentos)
export async function getTestimonial(): Promise<Testimonial[]> {
	const response = await api.get<Testimonial[]>("/depoimentos")
	return response.data
}
// 2. POST (Criar um novo depoimento)
export async function createTestimonial(
	data: Omit<Testimonial, "id">
): Promise<Testimonial> {
	const response = await api.post<Testimonial>("/depoimentos", data)
	return response.data
}
// 3. PATCH (Atualizar dados de um depoimento existente)
export async function updateTestimonial(
	id: string | number,
	data: Partial<Testimonial>
): Promise<Testimonial> {
	const response = await api.patch<Testimonial>(`/depoimentos/${id}`, data)
	return response.data
}
// 4. DELETE (Remover um depoimento pelo ID)
export async function deleteTestimonial(id: string | number): Promise<void> {
	await api.delete(`/depoimentos/${id}`)
}
