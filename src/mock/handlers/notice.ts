import { http, HttpResponse } from "msw"
import { api } from "../../api/axios"
import { postsBlog } from "../../data/notice"
import { isNotice, type Notice } from "../../types/notice"

const STORAGE_KEY = "@arretech:notices"
const BASE_URL = api.getUri({ url: "/noticias" })
const EDITABLE_FIELDS = ["title", "description", "date", "imageUrl", "tag"]

function getStoredNotices(): Notice[] {
	const saved = localStorage.getItem(STORAGE_KEY)
	if (saved === null) return [...postsBlog]
	const notices: unknown = JSON.parse(saved)
	if (
		!Array.isArray(notices) ||
		!notices.every(isNotice) ||
		new Set(notices.map(item => item.id)).size !== notices.length
	) {
		throw new Error("As notícias salvas são inválidas.")
	}
	return notices
}

export const noticeHandlers = [
	http.get(BASE_URL, () => {
		try {
			return HttpResponse.json(getStoredNotices())
		} catch {
			return HttpResponse.json(
				{ message: "Não foi possível ler as notícias salvas." },
				{ status: 500 }
			)
		}
	}),
	http.post(BASE_URL, async ({ request }) => {
		const body: unknown = await request.json().catch(() => null)

		if (
			!body ||
			typeof body !== "object" ||
			Array.isArray(body) ||
			Object.keys(body).some(key => !EDITABLE_FIELDS.includes(key))
		) {
			return HttpResponse.json(
				{ message: "Dados da notícia inválidos." },
				{ status: 400 }
			)
		}
		const notice = { ...body, id: crypto.randomUUID() }
		if (!isNotice(notice)) {
			return HttpResponse.json(
				{ message: "Preencha os campos da notícia com valores válidos." },
				{ status: 400 }
			)
		}
		try {
			const notices = getStoredNotices()
			localStorage.setItem(STORAGE_KEY, JSON.stringify([...notices, notice]))
			return HttpResponse.json(notice, { status: 201 })
		} catch {
			return HttpResponse.json(
				{ message: "Não foi possível salvar a notícia." },
				{ status: 500 }
			)
		}
	}),
	http.patch(`${BASE_URL}/:id`, async ({ request, params }) => {
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
			const notices = getStoredNotices()
			const index = notices.findIndex(item => item.id === params.id)
			if (index === -1)
				return HttpResponse.json(
					{ message: "Notícia não encontrada." },
					{ status: 404 }
				)
			const notice = { ...notices[index], ...body }
			if (!isNotice(notice))
				return HttpResponse.json(
					{ message: "Os campos atualizados são inválidos." },
					{ status: 400 }
				)
			notices[index] = notice
			localStorage.setItem(STORAGE_KEY, JSON.stringify(notices))
			return HttpResponse.json(notice)
		} catch {
			return HttpResponse.json(
				{ message: "Não foi possível atualizar a notícia." },
				{ status: 500 }
			)
		}
	}),
	http.delete(`${BASE_URL}/:id`, async ({ params }) => {
		try {
			const notices = getStoredNotices()
			const updated = notices.filter(item => item.id !== params.id)
			if (updated.length === notices.length)
				return HttpResponse.json(
					{ message: "Notícia não encontrada." },
					{ status: 404 }
				)
			localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
			return HttpResponse.json({ message: "Notícia removida com sucesso." })
		} catch {
			return HttpResponse.json(
				{ message: "Não foi possível remover a notícia." },
				{ status: 500 }
			)
		}
	}),
]
