import { Button } from "../../UI/Button"
import { DateInput } from "../../UI/DateInput"
import { FileInput } from "../../UI/FileInput"
import { Input } from "../../UI/Input"
import { Select } from "../../UI/Select"
import { useState } from "react"
import { createNotice } from "../../../../../api/notice"
import { getApiErrorMessage } from "../../../../../api/axios"
import { NOTICE_TAGS, type Notice } from "../../../../../types/notice"
import { toast } from "react-toastify"

const INITIAL_STATE = { title: "", description: "", imageUrl: "", date: "", tag: "" as Notice["tag"] | "" }

export function CreateNotice({ onCreated, disabled }: { onCreated: (item: Notice) => void; disabled?: boolean }) {
	const [formData, setFormData] = useState(INITIAL_STATE)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState("")
	function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (isLoading || disabled) return
		const { tag, ...data } = formData
		if (!tag || !data.title.trim() || !data.description.trim() || !data.imageUrl || !data.date) {
			setError("Preencha todos os campos da notícia.")
			return
		}
		setIsLoading(true)
		setError("")
		try {
			const notice = await createNotice({ ...data, title: data.title.trim(), description: data.description.trim(), tag })
			onCreated(notice)
			setFormData(INITIAL_STATE)
			toast.success("Notícia criada!")
		} catch (err) {
			setError(getApiErrorMessage(err, "Não foi possível criar a notícia."))
		} finally {
			setIsLoading(false)
		}
	}
	return (
		<div className="my-6">
			<h2 className="admin-section-title">
				Notícias
			</h2>
			<form onSubmit={handleSubmit} className="admin-panel">
				<FileInput id="imagem-noticias" name="imageUrl" imageUrl={formData.imageUrl} onImageChange={imageUrl => setFormData(prev => ({ ...prev, imageUrl }))} required disabled={isLoading || disabled} />

				<Input
					type="text"
					placeholder="Título"
					name="title"
					value={formData.title}
					onChange={handleChange}
					required
					disabled={isLoading || disabled}
					id="titulo-noticia"
				/>

				<Input
					type="text"
					placeholder="Descrição"
					name="description"
					value={formData.description}
					onChange={handleChange}
					required
					disabled={isLoading || disabled}
					id="descricao-noticia"
				/>
				<DateInput name="date" id="data-noticia" aria-label="Data da notícia" value={formData.date} onChange={handleChange} required disabled={isLoading || disabled} />
				<Select name="tag" id="tag-noticia" aria-label="Categoria da notícia" value={formData.tag} onChange={handleChange} required disabled={isLoading || disabled}>
					<option value="" disabled hidden>
						Selecione uma categoria
					</option>
					{NOTICE_TAGS.map(tag => <option key={tag} value={tag} className="text-black dark:text-white">{tag}</option>)}
				</Select>

				<Button type="submit" disabled={isLoading || disabled}>{isLoading ? "Enviando..." : "Confirmar"}</Button>
				{error && <p role="alert">{error}</p>}
			</form>
		</div>
	)
}
