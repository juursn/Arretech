import { useState } from "react"
import { NoticeFilter } from "./components/NoticeFilter"
import { NoticeHero } from "./components/NoticeHero"
import { NoticeCard } from "./components/Card/NoticeCard"
import { NavBar } from "../../components/NavBar/NavBar"
import { postsBlog } from "../../data/notice"
import { Footer } from "../../components/Footer/Footer"
import type { Notice } from "../../types/notice"
import { NoticeModal } from "./components/Card/NoticeModal"

export function Blog() {
	const [activeFilter, setActiveFilter] = useState("todos")
	const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null)

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
