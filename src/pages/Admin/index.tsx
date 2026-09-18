import { AdminNavBar } from "./Components/AdminNavBar"
import { AdminHero } from "./Components/AdminHero"
import { Badge } from "./Components/ui/Badge"
import { CreateComents } from "./Components/Sections/Comments/CreateComents"
import { CreateNotices } from "./Components/Sections/Notices/CreateNotices"

export function AdminPage() {
	return (
		<div className="flex flex-col min-h-screen lg:flex-row bg-light dark:bg-dark">
			{/* Sidebar / Menu Lateral */}
			<nav className="w-full shrink-0 lg:w-64">
				<AdminNavBar />
			</nav>

			{/* Conteúdo Principal */}
			<main className="flex-1 w-full p-4 lg:p-6">
				<AdminHero />

				{/* Seção de Criação */}
				<section className="mt-6">
					<Badge text="Criar" />
					<CreateComents />
					<CreateNotices />
				</section>
			</main>
		</div>
	)
}
