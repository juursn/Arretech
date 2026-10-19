import { useSectionScroll } from "../../hooks/useSectionScroll"
import { AdminNavBar } from "./Components/AdminNavBar"
import { AdminHero } from "./Components/AdminHero"
import { Badge } from "./Components/UI/Badge"
import { CreateTestimonial } from "./Components/Sections/Testimonial/CreateTestimonial"
import { CreateNotice } from "./Components/Sections/Notices/CreateNotice"
import { EditTestimonial } from "./Components/Sections/Testimonial/EditTestimonial"
import { EditNotice } from "./Components/Sections/Notices/EditNotice"
import { DeleteTestimonial } from "./Components/Sections/Testimonial/DeleteTestimonial"
import { DeleteNotice } from "./Components/Sections/Notices/DeleteNotice"

export function Admin() {
	useSectionScroll()
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
					<div id="criar-comentarios" className="scroll-mt-24">
						<CreateTestimonial />
					</div>
					<div id="criar-noticias" className="scroll-mt-24">
						<CreateNotice />
					</div>
				</section>

				{/* Seção de Edição */}
				<Badge text="Editar" />
				<section>
					<div id="editar-comentarios" className="scroll-mt-24">
						<EditTestimonial />
					</div>
					<div id="editar-noticias" className="scroll-mt-24">
						<EditNotice />
					</div>
				</section>
				{/* Seção de Exclusão */}
				<Badge text="Deletar" />
				<div id="deletar-comentarios" className="scroll-mt-24">
						<DeleteTestimonial />
					</div>
				<div id="deletar-noticias" className="scroll-mt-24">
						<DeleteNotice />
					</div>
			</main>
		</div>
	)
}
