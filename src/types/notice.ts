export const NOTICE_TAGS = ["Eventos", "Notícias", "Projetos", "Atualizações", "Bastidores"] as const
export type NoticeTag = "Ver Todos" | typeof NOTICE_TAGS[number]

export interface Notice {
	id: string
	title: string
	date: string
	description: string
	imageUrl: string
	tag: Exclude<NoticeTag, "Ver Todos">
}

export function isNotice(value: unknown): value is Notice {
	if (!value || typeof value !== "object" || Array.isArray(value)) return false
	const item = value as Record<string, unknown>
	if (!["id", "title", "description", "imageUrl", "date"].every(key => {
		const field = item[key]
		return typeof field === "string" && field.trim() !== ""
	})) return false
	const date = new Date(`${item.date}T00:00:00Z`)
	return (
		/^\d{4}-\d{2}-\d{2}$/.test(item.date as string) &&
		!Number.isNaN(date.getTime()) &&
		date.toISOString().slice(0, 10) === item.date &&
		NOTICE_TAGS.some(tag => tag === item.tag)
	)
}
