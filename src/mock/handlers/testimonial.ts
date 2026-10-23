import { http, HttpResponse } from "msw"
import { testImonialMock } from "../data/testImonialMock"
import { isTestimonial, type Testimonial } from "../../types/testImonial"
import { api } from "../../api/axios"

export function getStoredTestimonials(): Testimonial[] {
	// Usa os dados iniciais só no primeiro acesso; depois lê as alterações deste navegador.
	const data = localStorage.getItem(STORAGE_KEY)
	if (data === null) {
		const initialData = [...testImonialMock]
		localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData))
		return initialData
	}
	const testimonials: unknown = JSON.parse(data)
	if (
		!Array.isArray(testimonials) ||
		!testimonials.every(isTestimonial) ||
		new Set(testimonials.map(item => String(item.id))).size !==
			testimonials.length
	) {
		throw new Error("Os depoimentos salvos são inválidos.")
	}
	return testimonials
}

const STORAGE_KEY = "@arretech:testimonials"

// Rota base para manter o padrão em todas as chamadas
const BASE_URL = api.getUri({ url: "/depoimentos" })
const EDITABLE_FIELDS = ["content", "author", "avatarUrl", "role", "company"]

export const testImonialHandlers = [
	// GET (Buscar todos os dados atualizados do LocalStorage)
	http.get(BASE_URL, () => {
		try {
			const testimonials = getStoredTestimonials()
			return HttpResponse.json(testimonials)
		} catch {
			return HttpResponse.json(
				{ message: "Não foi possível ler os depoimentos salvos." },
				{ status: 500 }
			)
		}
	}),

	// POST (Criar novo item e salvar no LocalStorage)
	http.post(BASE_URL, async ({ request }) => {
		const body: unknown = await request.json().catch(() => null)
		if (
			!body ||
			typeof body !== "object" ||
			Array.isArray(body) ||
			Object.keys(body).some(key => !EDITABLE_FIELDS.includes(key))
		) {
			return HttpResponse.json(
				{ message: "Dados do depoimento inválidos." },
				{ status: 400 }
			)
		}
		const newTestimonial = { ...body, id: crypto.randomUUID() }
		if (!isTestimonial(newTestimonial)) {
			return HttpResponse.json(
				{ message: "Preencha os campos obrigatórios com texto válido." },
				{ status: 400 }
			)
		}

		try {
			const testimonials = getStoredTestimonials()
			const updatedList = [...testimonials, newTestimonial]
			localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList))
			return HttpResponse.json(newTestimonial, { status: 201 })
		} catch {
			return HttpResponse.json(
				{ message: "Não foi possível salvar o depoimento." },
				{ status: 500 }
			)
		}
	}),

	// PATCH (Atualizar parcialmente e salvar no LocalStorage)
	http.patch(`${BASE_URL}/:id`, async ({ request, params }) => {
		const { id } = params
		const body: unknown = await request.json().catch(() => null)
		if (
			!body ||
			typeof body !== "object" ||
			Array.isArray(body) ||
			Object.keys(body).length === 0 ||
			Object.keys(body).some(key => !EDITABLE_FIELDS.includes(key))
		) {
			return HttpResponse.json(
				{ message: "Dados de atualização inválidos." },
				{ status: 400 }
			)
		}

		try {
			const testimonials = getStoredTestimonials()
			const index = testimonials.findIndex(
				item => String(item.id) === String(id)
			)
			if (index === -1) {
				return HttpResponse.json(
					{ message: "Depoimento não encontrado." },
					{ status: 404 }
				)
			}
			const updatedItem = { ...testimonials[index], ...body }
			if (!isTestimonial(updatedItem)) {
				return HttpResponse.json(
					{ message: "Os campos atualizados são inválidos." },
					{ status: 400 }
				)
			}
			testimonials[index] = updatedItem
			localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials))
			return HttpResponse.json(updatedItem)
		} catch {
			return HttpResponse.json(
				{ message: "Não foi possível atualizar o depoimento." },
				{ status: 500 }
			)
		}
	}),

	// DELETE (Remover um item e atualizar o LocalStorage)
	http.delete(`${BASE_URL}/:id`, async ({ params }) => {
		const { id } = params

		try {
			const testimonials = getStoredTestimonials()
			const updatedList = testimonials.filter(
				item => String(item.id) !== String(id)
			)
			if (updatedList.length === testimonials.length) {
				return HttpResponse.json(
					{ message: "Depoimento não encontrado." },
					{ status: 404 }
				)
			}
			localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList))
			return HttpResponse.json({
				message: "Depoimento removido com sucesso",
				id,
			})
		} catch {
			return HttpResponse.json(
				{ message: "Não foi possível remover o depoimento." },
				{ status: 500 }
			)
		}
	}),
]
