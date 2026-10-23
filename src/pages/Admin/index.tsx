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
import { useEffect, useState } from "react"
import { getTestimonial } from "../../api/testImonial"
import { getNotices } from "../../api/notice"
import { getApiErrorMessage } from "../../api/axios"
import type { Testimonial } from "../../types/testImonial"
import type { Notice } from "../../types/notice"
import { RxReload } from "react-icons/rx"

export function Admin() {
	useSectionScroll()
	const [testimonials, setTestimonials] = useState<Testimonial[]>([])
	const [notices, setNotices] = useState<Notice[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [errors, setErrors] = useState({ testimonials: "", notices: "" })
	const [reload, setReload] = useState(0)

	useEffect(() => {
		const controller = new AbortController()
		setIsLoading(true)
		setErrors({ testimonials: "", notices: "" })
		Promise.allSettled([
			getTestimonial(controller.signal),
			getNotices(controller.signal),
		]).then(([comments, news]) => {
			if (controller.signal.aborted) return
			if (comments.status === "fulfilled") setTestimonials(comments.value)
			if (news.status === "fulfilled") setNotices(news.value)
			setErrors({
				testimonials:
					comments.status === "rejected"
						? getApiErrorMessage(
								comments.reason,
								"Não foi possível carregar os depoimentos."
							)
						: "",
				notices:
					news.status === "rejected"
						? getApiErrorMessage(
								news.reason,
								"Não foi possível carregar as notícias."
							)
						: "",
			})
			setIsLoading(false)
		})
		return () => controller.abort()
	}, [reload])
	const testimonialsDisabled = isLoading || !!errors.testimonials
	const noticesDisabled = isLoading || !!errors.notices
	return (
		<div className="flex flex-col min-h-screen lg:flex-row bg-light dark:bg-dark">
			{/* Sidebar / Menu Lateral */}
			<nav className="w-full shrink-0 lg:w-64">
				<AdminNavBar />
			</nav>

			{/* Conteúdo Principal */}
			<main className="flex-1 w-full p-4 lg:p-6">
				<AdminHero />
				{isLoading && <p role="status">Carregando os dados... </p>}
				{errors.testimonials && <p role="alert">{errors.testimonials}</p>}
				{errors.notices && <p role="alert">{errors.notices}</p>}
				{(errors.testimonials || errors.notices) && (
					<button
						type="button"
						className="px-4 py-2 text-white rounded-md bg-emerald-500"
						onClick={() => setReload(value => value + 1)}
					>
						Tentar novamente <RxReload />
					</button>
				)}

				{/* Seção de Criação */}

				<section className="mt-6">
					<Badge text="Criar" />
					<div id="criar-comentarios" className="scroll-mt-24">
						<CreateTestimonial
							disabled={testimonialsDisabled}
							onCreated={item => setTestimonials(current => [...current, item])}
						/>
					</div>
					<div id="criar-noticias" className="scroll-mt-24">
						<CreateNotice
							disabled={noticesDisabled}
							onCreated={item => setNotices(current => [...current, item])}
						/>
					</div>
				</section>

				{/* Seção de Edição */}
				<Badge text="Editar" />
				<section>
					<div id="editar-comentarios" className="scroll-mt-24">
						<EditTestimonial
							testimonials={testimonials}
							disabled={testimonialsDisabled}
							onUpdated={updated =>
								setTestimonials(current =>
									current.map(item =>
										String(item.id) === String(updated.id) ? updated : item
									)
								)
							}
						/>
					</div>
					<div id="editar-noticias" className="scroll-mt-24">
						<EditNotice
							notices={notices}
							disabled={noticesDisabled}
							onUpdated={updated =>
								setNotices(current =>
									current.map(item => (item.id === updated.id ? updated : item))
								)
							}
						/>
					</div>
				</section>
				{/* Seção de Exclusão */}
				<Badge text="Deletar" />
				<div id="deletar-comentarios" className="scroll-mt-24">
					<DeleteTestimonial
						testimonials={testimonials}
						disabled={testimonialsDisabled}
						onDeleted={id =>
							setTestimonials(current =>
								current.filter(item => String(item.id) !== String(id))
							)
						}
					/>
				</div>
				<div id="deletar-noticias" className="scroll-mt-24">
					<DeleteNotice
						notices={notices}
						disabled={noticesDisabled}
						onDeleted={id =>
							setNotices(current => current.filter(item => item.id !== id))
						}
					/>
				</div>
			</main>
		</div>
	)
}
