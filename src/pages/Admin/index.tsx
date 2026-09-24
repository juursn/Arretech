import { AdminNavBar } from "./Components/AdminNavBar"
import { AdminHero } from "./Components/AdminHero"
import { Badge } from "./Components/ui/Badge"
import { CreateComment } from "./Components/Sections/Comments/CreateComment"
import { CreateNotice } from "./Components/Sections/Notices/CreateNotice"
import { EditComment } from "./Components/Sections/Comments/EditComment"
import { EditNotice } from "./Components/Sections/Notices/EditNotice"
import { DeleteComment } from "./Components/Sections/Comments/DeleteComment"
import { DeleteNotice } from "./Components/Sections/Notices/DeleteNotice"

export function Admin() {
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
					<CreateComment />
					<CreateNotice />
				</section>

				{/* Seção de Edição */}
				<Badge text="Editar" />
				<section>
					<EditComment />
					<EditNotice />
				</section>
				{/* Seção de Exclusão */}
				<Badge text="Deletar" />
				<DeleteComment />
				<DeleteNotice />
			</main>
		</div>
	)
}
