import { isNotice, type Notice } from "../types/notice"
import { api } from "./axios"

export async function getNotices(signal?: AbortSignal): Promise<Notice[]> {
	const { data } = await api.get<unknown>("/noticias", { signal })
	if (!Array.isArray(data) || !data.every(isNotice) || new Set(data.map(item => item.id)).size !== data.length) {
		throw new Error("A API retornou uma lista de notícias inválida.")
	}
	return data
}

export async function createNotice(notice: Omit<Notice, "id">): Promise<Notice> {
	const { data } = await api.post<unknown>("/noticias", notice)
	if (!isNotice(data)) throw new Error("A API retornou uma notícia inválida.")
	return data
}

export async function updateNotice(id: string, notice: Partial<Omit<Notice, "id">>): Promise<Notice> {
	const { data } = await api.patch<unknown>(`/noticias/${encodeURIComponent(id)}`, notice)
	if (!isNotice(data)) throw new Error("A API retornou uma notícia inválida.")
	return data
}

export async function deleteNotice(id: string): Promise<void> {
	await api.delete(`/noticias/${encodeURIComponent(id)}`)
}
