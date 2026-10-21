import React, { useState } from "react"
import { Button } from "../../UI/Button"
import { FileInput } from "../../UI/FileInput"
import { Input } from "../../UI/Input"
import type { Testimonial } from "../../../../../types/testImonial"
import { toast } from "react-toastify"
import { createTestimonial } from "../../../../../api/testImonial"
import { getApiErrorMessage } from "../../../../../api/axios"

type TestimonialFormData = Omit<Testimonial, "id">
const INITIAL_STATE: TestimonialFormData = {
	author: "",
	content: "",
	avatarUrl: "",
	role: "",
	company: "",
}

export function CreateTestimonial({
	onCreated,
	disabled,
}: {
	onCreated: (item: Testimonial) => void
	disabled?: boolean
}) {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState("")
	const [formData, setFormData] = useState(INITIAL_STATE)
	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target

		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (isLoading || disabled) return
		if (
			[formData.content, formData.author, formData.role, formData.company].some(
				value => !value.trim()
			)
		) {
			setError("Preencha os campos obrigatórios com texto válido.")
			return
		}
		setIsLoading(true)
		setError("")
		try {
			const testimonial = await createTestimonial({
				...formData,
				content: formData.content.trim(),
				author: formData.author.trim(),
				role: formData.role.trim(),
				company: formData.company.trim(),
			})
			onCreated(testimonial)
			setFormData(INITIAL_STATE)
			toast.success("Depoimento Enviado com sucesso!")
		} catch (err) {
			setError(getApiErrorMessage(err, "Não foi possível enviar o depoimento."))
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="my-6">
			<h2 className="admin-section-title">Comentários</h2>
			<form onSubmit={handleSubmit} className="admin-panel">
				<textarea
					value={formData.content}
					disabled={isLoading || disabled}
					name="content"
					id="comentario"
					placeholder="Digite o comentário"
					required
					className="bg-input-light dark:bg-input-dark w-full h-20 max-h-60 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary-blue transition-all text-sm"
					onChange={handleChange}
				/>

				<Input
					value={formData.author}
					disabled={isLoading || disabled}
					type="text"
					placeholder="Autor"
					name="author"
					id="autor-comentario"
					onChange={handleChange}
					required
				/>

				<FileInput
					id="imagem-comentario"
					name="avatarUrl"
					imageUrl={formData.avatarUrl}
					onImageChange={avatarUrl =>
						setFormData(prev => ({ ...prev, avatarUrl }))
					}
					disabled={isLoading || disabled}
				/>

				<Input
					type="text"
					name="role"
					value={formData.role}
					disabled={isLoading || disabled}
					id="cargo-comentario"
					placeholder="Cargo"
					onChange={handleChange}
					required
				/>

				<Input
					type="text"
					placeholder="Empresa"
					name="company"
					value={formData.company}
					disabled={isLoading || disabled}
					id="empresa-comentario"
					onChange={handleChange}
					required
				/>

				<Button disabled={isLoading || disabled} type="submit">
					{isLoading ? "Carregando..." : "Enviar"}
				</Button>
				{error && (
					<p role="alert" className="text-red-800 text-xs uppercase">
						{error}
					</p>
				)}
			</form>
		</div>
	)
}
