export type NoticeTag =
	| "Ver Todos"
	| "Eventos"
	| "Notícias"
	| "Projetos"
	| "Atualizações"
	| "Bastidores"

export interface Notice {
	id: string
	title: string
	date: string
	description: string
	imageUrl: string
	tag: NoticeTag
}
