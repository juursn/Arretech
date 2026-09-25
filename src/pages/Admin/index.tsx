import { AdminNavBar } from "./Components/AdminNavBar"
import { AdminHero } from "./Components/AdminHero"
import { Badge } from "./Components/ui/Badge"
import { CreateTestimonial } from "./Components/Sections/Testimonial/CreateTestimonial"
import { CreateNotice } from "./Components/Sections/Notices/CreateNotice"
import { EditTestimonial } from "./Components/Sections/Testimonial/EditTestimonial"
import { EditNotice } from "./Components/Sections/Notices/EditNotice"
import { DeleteTestimonial } from "./Components/Sections/Testimonial/DeleteTestimonial"
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
					<CreateTestimonial />
					<CreateNotice />
				</section>

				{/* Seção de Edição */}
				<Badge text="Editar" />
				<section>
					<EditTestimonial />
					<EditNotice />
				</section>
				{/* Seção de Exclusão */}
				<Badge text="Deletar" />
				<DeleteTestimonial />
				<DeleteNotice />
			</main>
		</div>
	)
}
