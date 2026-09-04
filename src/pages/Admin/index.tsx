import { NavBarAdmin } from "./Components/NavBarAdmin"
import { HeroAdmin } from "./Components/HeroAdmin"
import { Badge } from "./Components/UI/Badge"
import { CreateComents } from "./Components/AdminSections/Comments/CreateComents"
import { CreateNotices } from "./Components/AdminSections/Notices/CreateNotices"

export function AdminPage() {
	return (
		<div className="flex flex-col min-h-screen lg:flex-row bg-light dark:bg-dark">
			{/* Sidebar / Menu Lateral */}
			<nav className="w-full shrink-0 lg:w-64">
				<NavBarAdmin />
			</nav>

			{/* Conteúdo Principal */}
			<main className="flex-1 w-full p-4 lg:p-6">
				<HeroAdmin />

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
