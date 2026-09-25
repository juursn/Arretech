import { http, HttpResponse } from "msw"
import { testImonialMock } from "../data/testImonialMock"
import type { Testimonial } from "../../types/testImonial"

export function getStoredTestimonials(): Testimonial[] {
	const data = localStorage.getItem(STORAGE_KEY)
	if (!data) {
		const initialData = testImonialMock
		localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData))
		return initialData
	}
	return JSON.parse(data)
}

const STORAGE_KEY = "@arretech:testimonials"

// Rota base para manter o padrão em todas as chamadas
const BASE_URL = "/Arretech/depoimentos"

export const testImonialHandlers = [
	// GET (Buscar todos os dados atualizados do LocalStorage)
	http.get(BASE_URL, () => {
		const testimonials = getStoredTestimonials() //JSON com os comentários
		return HttpResponse.json(testimonials)
	}),

	// POST (Criar novo item e salvar no LocalStorage)
	http.post(BASE_URL, async ({ request }) => {
		const body = (await request.json()) as Omit<Testimonial, "id">
		const testimonials = getStoredTestimonials()

		const newTestimonial: Testimonial = {
			id: String(Date.now()),
			...body,
		}

		const updatedList = [...testimonials, newTestimonial]
		localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList))

		return HttpResponse.json(newTestimonial, { status: 201 })
	}),

	// PATCH (Atualizar parcialmente e salvar no LocalStorage)
	http.patch(`${BASE_URL}/:id`, async ({ request, params }) => {
		const { id } = params
		const body = (await request.json()) as Partial<Testimonial> //Pega a lista de depoimentos e tipa eles de forma opcional

		let testimonials = getStoredTestimonials()

		testimonials = testimonials.map(item =>
			String(item.id) === String(id) ? { ...item, ...body } : item
		) //Atualiza a lista

		// IMPORTANTE: Persistir a atualização no localStorage
		localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials))

		const updatedItem = testimonials.find(
			item => String(item.id) === String(id) //pega apenas o item que foi alterado
		)
		return HttpResponse.json(updatedItem)
	}),

	// DELETE (Remover um item e atualizar o LocalStorage)
	http.delete(`${BASE_URL}/:id`, async ({ params }) => {
		const { id } = params

		const testimonials = getStoredTestimonials()

		// Filtra a lista removendo o item que possui o ID passado
		const updatedList = testimonials.filter(
			item => String(item.id) !== String(id)
		)

		// Salva a nova lista sem o item deletado
		localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList))

		// Retorna status 200 (com mensagem/item removido)
		return HttpResponse.json(
			{ message: "Depoimento removido com sucesso", id },
			{ status: 200 }
		)
	}),
]
