import { useEffect, useState } from "react"
import { NoticeFilter } from "./components/NoticeFilter"
import { NoticeHero } from "./components/NoticeHero"
import { NoticeCard } from "./components/Card/NoticeCard"
import { NavBar } from "../../components/NavBar/NavBar"
import { getNotices } from "../../api/notice"
import { getApiErrorMessage } from "../../api/axios"
import { Footer } from "../../components/Footer/Footer"
import type { Notice } from "../../types/notice"
import { NoticeModal } from "./components/Card/NoticeModal"

export function Blog() {
	const [activeFilter, setActiveFilter] = useState("todos")
	const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null)
	const [postsBlog, setPostsBlog] = useState<Notice[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState("")
	useEffect(() => {
		const controller = new AbortController()
		getNotices(controller.signal).then(setPostsBlog).catch(err => {
			if (!controller.signal.aborted) setError(getApiErrorMessage(err, "Não foi possível carregar as notícias."))
		}).finally(() => {
			if (!controller.signal.aborted) setIsLoading(false)
		})
		return () => controller.abort()
	}, [])

	// Filtra os posts com base no estado atual
	const postsFiltrados =
		activeFilter === "todos"
			? postsBlog
			: postsBlog.filter(
					post => post.tag.toLowerCase() === activeFilter.toLowerCase()
				)

	return (
		<div className="flex flex-col bg-light dark:bg-dark min-h-screen">
			<NavBar />
			<NoticeHero />
			<NoticeFilter
				activeFilter={activeFilter}
				setActiveFilter={setActiveFilter}
			/>
			<div className="flex-1 grid items-start justify-center grid-cols-1 gap-4 p-2 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:px-4">
				{isLoading && <p role="status">Carregando notícias...</p>}
				{error && <p role="alert">{error}</p>}
				{!isLoading && !error && postsFiltrados.length === 0 && <p>Nenhuma notícia encontrada.</p>}
				{postsFiltrados.map(post => (
					<NoticeCard
						key={post.id}
						notice={post}
						onClick={notice => setSelectedNotice(notice)}
					/>
				))}
			</div>
			{selectedNotice && (
				<NoticeModal
					notice={selectedNotice}
					onClose={() => setSelectedNotice(null)}
				/>
			)}
			<Footer />
		</div>
	)
}
