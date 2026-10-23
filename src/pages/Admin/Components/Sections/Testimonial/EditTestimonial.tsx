import { EditableInput } from "../../UI/EditableInput"
import { useState } from "react"
import { updateTestimonial } from "../../../../../api/testImonial"
import type { Testimonial } from "../../../../../types/testImonial"
import { FileInput } from "../../UI/FileInput"
import { getApiErrorMessage } from "../../../../../api/axios"
import { toast } from "react-toastify"

export function EditTestimonial({
	testimonials,
	onUpdated,
	disabled,
}: {
	testimonials: Testimonial[]
	onUpdated: (item: Testimonial) => void
	disabled?: boolean
}) {
	const [isVisible, setIsVisible] = useState<Testimonial["id"] | null>(null)
	const [isSaving, setIsSaving] = useState(false)
	const [error, setError] = useState("")
	async function handleUpdate(
		id: Testimonial["id"],
		data: Partial<Omit<Testimonial, "id">>
	) {
		setIsSaving(true)
		setError("")
		try {
			const updated = await updateTestimonial(id, data)
			onUpdated(updated)
			toast.success("Depoimento atualizado!")
		} finally {
			setIsSaving(false)
		}
	}
	return (
		<>
			<h2 className="admin-section-title">Comentários</h2>
			<div className="admin-panel">
				{testimonials.length === 0 && !disabled && (
					<p>Nenhum depoimento cadastrado.</p>
				)}
				{testimonials.map(item => (
					<div
						key={item.id}
						className={`${isVisible === item.id ? `overflow-visible block` : `overflow-hidden relative max-h-65`} flex flex-col gap-2.5 bg-card-gray dark:bg-card-dark px-2.5 py-3 rounded-md   `}
					>
						<EditableInput
							label="Comentário"
							value={item.content}
							onSave={content => handleUpdate(item.id, { content })}
							disabled={disabled || isSaving}
						/>
						<EditableInput
							label="Autor"
							value={item.author}
							onSave={author => handleUpdate(item.id, { author })}
							disabled={disabled || isSaving}
						/>
						<EditableInput
							label="Cargo"
							value={item.role}
							onSave={role => handleUpdate(item.id, { role })}
							disabled={disabled || isSaving}
						/>
						<EditableInput
							label="Empresa"
							value={item.company}
							onSave={company => handleUpdate(item.id, { company })}
							disabled={disabled || isSaving}
						/>
						<FileInput
							id={`avatar-${item.id}`}
							imageUrl={item.avatarUrl}
							disabled={disabled || isSaving}
							onImageChange={avatarUrl => {
								handleUpdate(item.id, { avatarUrl }).catch(err =>
									setError(
										getApiErrorMessage(
											err,
											"Não foi possível atualizar a imagem."
										)
									)
								)
							}}
						/>

						<button
							className={`${isVisible === item.id ? `block` : `z-50 absolute bottom-0 left-0  shadow-[0px_-31px_100px_20px_rgba(0,0,0,0.2)] dark:shadow-[0px_-31px_100px_20px_rgba(0,0,0,0.7)] backdrop-blur-md bg-white/10 dark:bg-black/40`} cursor-pointer text-gray-900 dark:text-gray-200 w-full py-1.5 text-sm transition-colors duration-200 ease-in hover:text-primary-blue`}
							onClick={() =>
								setIsVisible(currentId =>
									currentId === item.id ? null : item.id
								)
							}
						>
							{isVisible === item.id ? "Ver menos" : "Ver mais"}
						</button>
					</div>
				))}
				{error && <p role="alert">{error}</p>}
			</div>
		</>
	)
}
