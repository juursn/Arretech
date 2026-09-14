import { useState } from "react"
import { FilterBlog } from "./components/FilterBlog"
import { HeroBlog } from "./components/HeroBlog"
import { CardNotice } from "./components/Notice/CardNotice"
import { NavBar } from "../../components/NavBar/NavBar"
import { postsBlog } from "../../data/notice"
import { Footer } from "../../components/Footer/Footer"
import type { Notice } from "../../types/notice"
import { ModalNotice } from "./components/Notice/ModalNotice"

export function Blog() {
	const [filtroAtivo, setFiltroAtivo] = useState("todos")
	const [noticeSelecionada, setNoticeSelecionada] = useState<Notice | null>(
		null
	)

	// Filtra os posts com base no estado atual
	const postsFiltrados =
		filtroAtivo === "todos"
			? postsBlog
			: postsBlog.filter(
					post => post.tag.toLowerCase() === filtroAtivo.toLowerCase()
				)

	return (
		<div className="flex flex-col bg-light dark:bg-dark min-h-screen">
			<NavBar />
			<HeroBlog />
			<FilterBlog filtroAtivo={filtroAtivo} setFiltroAtivo={setFiltroAtivo} />
			<div className="flex-1 grid items-start justify-center grid-cols-1 gap-4 p-2 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:px-4">
				{postsFiltrados.map(post => (
					<CardNotice
						key={post.id}
						notice={post}
						onClick={notice => setNoticeSelecionada(notice)}
					/>
				))}
			</div>
			{noticeSelecionada && (
				<ModalNotice
					notice={noticeSelecionada}
					onClose={() => setNoticeSelecionada(null)}
				/>
			)}
			<Footer />
		</div>
	)
}
