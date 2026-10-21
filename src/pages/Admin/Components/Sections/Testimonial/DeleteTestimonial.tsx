import { useState } from "react"
import { deleteTestimonial } from "../../../../../api/testImonial"
import { getApiErrorMessage } from "../../../../../api/axios"
import { toast } from "react-toastify"
import { StaticInput } from "../../UI/StaticInput"
import type { Testimonial } from "../../../../../types/testImonial"

export function DeleteTestimonial({ testimonials, onDeleted, disabled }: { testimonials: Testimonial[]; onDeleted: (id: Testimonial["id"]) => void; disabled?: boolean }) {
	const [deletingId, setDeletingId] = useState<Testimonial["id"] | null>(null)
	const [error, setError] = useState("")
	async function handleDelete(id: Testimonial["id"]) {
		if (deletingId !== null || disabled) return
		setDeletingId(id)
		setError("")
		try {
			await deleteTestimonial(id)
			onDeleted(id)
			toast.success("Depoimento excluído!")
		} catch (err) {
			setError(getApiErrorMessage(err, "Não foi possível excluir o depoimento."))
		} finally {
			setDeletingId(null)
		}
	}
	return (
		<>
			<h2 className="admin-section-title">
				Comentários
			</h2>
			<div className="admin-panel flex-row flex-wrap">
				{testimonials.length === 0 && !disabled && <p>Nenhum depoimento cadastrado.</p>}
				{testimonials.map(item => (
					<StaticInput
						key={item.id}
						onDelete={() => handleDelete(item.id)}
						isDeleting={deletingId === item.id}
						disabled={disabled || deletingId !== null}
						primaryField={{
							label: "Comentário",
							content: item.content || "",
						}}
						secondaryField={{
							label: "Autor",
							content: item.author || "",
						}}
					/>
				))}
				{error && <p role="alert">{error}</p>}
			</div>
		</>
	)
}
