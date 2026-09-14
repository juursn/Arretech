import type { tagNotice } from "../../../types/notice"

interface FilterItem {
	id: string
	label: tagNotice
}

interface FilterBlogProps {
	filtroAtivo: string
	setFiltroAtivo: (id: string) => void
}

export function FilterBlog({ filtroAtivo, setFiltroAtivo }: FilterBlogProps) {
	const categorias: FilterItem[] = [
		{ id: "todos", label: "Ver Todos" },
		{ id: "atualizações", label: "Atualizações" },
		{ id: "bastidores", label: "Bastidores" },
		{ id: "projetos", label: "Projetos" },
		{ id: "noticias", label: "Notícias" },
		{ id: "Eventos", label: "Eventos" },
	]

	return (
		<div className="flex flex-wrap items-center justify-center gap-6 px-3 py-8">
			{categorias.map((cat, index) => {
				const isAtivo = filtroAtivo === cat.id

				return (
					<div key={cat.id} className="flex items-center gap-6">
						<button
							onClick={() => setFiltroAtivo(cat.id)}
							className={`transition-all cursor-pointer font-medium ${
								isAtivo
									? "text-primary-blue dark:text-white font-semibold underline underline-offset-8"
									: "text-text-gray dark:text-white/80 hover:opacity-80"
							}`}
						>
							{cat.label}
						</button>

						{/* Adiciona a barra vertical logo após o primeiro item (Ver todos) */}
						{index === 0 && (
							<span className="w-px h-5 bg-gray-300 select-none dark:bg-white/20" />
						)}
					</div>
				)
			})}
		</div>
	)
}
