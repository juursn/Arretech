import { useState } from "react"
import { FilterBlog } from "./components/Filters/FilterBlog"
import { HeroBlog } from "./components/Header/HeroBlog"
import { CardNotice } from "./components/Notice/CardNotice"

export function Blog() {
	const [filtroAtivo, setFiltroAtivo] = useState("todos")
	const postsBlog = [
		{
			id: "1",
			titulo: "Lançamento da nova versão da plataforma",
			data: "2026-06-06",
			descricao:
				"Confira todas as novidades, melhorias de performance e ferramentas que acabamos de liberar.",
			imagem:
				"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
			tag: "Atualizações",
		},
		{
			id: "2",
			titulo: "Bastidores do desenvolvimento do nosso app",
			data: "2026-06-04",
			descricao:
				"Descubra como nossa equipe superou desafios técnicos complexos durante a criação do produto.",
			imagem:
				"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
			tag: "Bastidores",
		},
		{
			id: "3",
			titulo: "Novo projeto em parceria com grandes empresas",
			data: "2026-06-01",
			descricao:
				"Estamos expandindo nossos horizontes e trazendo soluções ainda mais robustas para o mercado.",
			imagem:
				"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
			tag: "Projetos",
		},
	]

	// 2. Filtra os posts dinamicamente com base no estado atual
	const postsFiltrados =
		filtroAtivo === "todos"
			? postsBlog
			: postsBlog.filter(
					post => post.tag.toLowerCase() === filtroAtivo.toLowerCase()
				)

	return (
		<div className="flex flex-col pb-10 bg-light dark:bg-dark">
			<HeroBlog />
			<FilterBlog filtroAtivo={filtroAtivo} setFiltroAtivo={setFiltroAtivo} />
			<div className="grid items-center justify-center grid-cols-1 gap-4 p-2 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:px-4">
				{postsFiltrados.map(post => (
					<CardNotice
						key={post.id}
						titulo={post.titulo}
						data={post.data}
						descricao={post.descricao}
						imagem={post.imagem}
						tag={post.tag}
					/>
				))}
			</div>
		</div>
	)
}
