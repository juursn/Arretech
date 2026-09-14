export type tagNotice =
	| "Ver Todos"
	| "Eventos"
	| "Notícias"
	| "Projetos"
	| "Atualizações"
	| "Bastidores"

export interface Notice {
	id: string
	titulo: string
	data: string
	descricao: string
	imagemUrl: string
	tag: tagNotice
}
