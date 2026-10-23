import { useState } from "react"
import { EditableInput } from "../../UI/EditableInput"
import { updateNotice } from "../../../../../api/notice"
import { getApiErrorMessage } from "../../../../../api/axios"
import { NOTICE_TAGS, type Notice } from "../../../../../types/notice"
import { FileInput } from "../../UI/FileInput"
import { toast } from "react-toastify"
import type { Testimonial } from "../../../../../types/testImonial"

export function EditNotice({
	notices,
	onUpdated,
	disabled,
}: {
	notices: Notice[]
	onUpdated: (item: Notice) => void
	disabled?: boolean
}) {
	const [isVisible, setIsVisible] = useState<Testimonial["id"] | null>(null)
	const [isSaving, setIsSaving] = useState(false)
	const [error, setError] = useState("")
	async function handleUpdate(id: string, data: Partial<Omit<Notice, "id">>) {
		setIsSaving(true)
		setError("")
		try {
			const updated = await updateNotice(id, data)
			onUpdated(updated)
			toast.success("Notícia atualizada!")
		} finally {
			setIsSaving(false)
		}
	}
	return (
		<>
			<h2 className="admin-section-title">Notícias</h2>
			<div className="admin-panel">
				{notices.length === 0 && !disabled && (
					<p>Nenhuma notícia cadastrada.</p>
				)}
				{notices.map(item => (
					<div
						key={item.id}
						className={`${isVisible === item.id ? `overflow-visible block` : `overflow-hidden relative max-h-65`} flex flex-col gap-2.5 bg-card-gray dark:bg-card-dark px-2.5 py-3 rounded-md   `}
					>
						<EditableInput
							label="Título"
							value={item.title}
							onSave={title => handleUpdate(item.id, { title })}
							disabled={disabled || isSaving}
						/>
						<EditableInput
							label="Descrição"
							value={item.description}
							onSave={description => handleUpdate(item.id, { description })}
							disabled={disabled || isSaving}
						/>

						<EditableInput
							label="Data"
							type="date"
							value={item.date}
							onSave={date => handleUpdate(item.id, { date })}
							disabled={disabled || isSaving}
						/>
						<EditableInput
							label="Categoria"
							options={NOTICE_TAGS}
							value={item.tag}
							onSave={tag =>
								handleUpdate(item.id, { tag: tag as Notice["tag"] })
							}
							disabled={disabled || isSaving}
						/>
						<FileInput
							id={`noticia-imagem-${item.id}`}
							imageUrl={item.imageUrl}
							disabled={disabled || isSaving}
							onImageChange={imageUrl => {
								handleUpdate(item.id, { imageUrl }).catch(err =>
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
							className={`${isVisible === item.id ? `block` : `z-50 absolute bottom-0 left-0 shadow-[0px_-31px_100px_20px_rgba(0,0,0,0.7)] backdrop-blur-md bg-black/40`} cursor-pointer w-full py-1.5 text-sm transition-colors duration-200 ease-in hover:text-primary-blue`}
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
