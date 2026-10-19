import React, { useState } from "react"
import { Button } from "../../UI/Button"
import { FileInput } from "../../UI/FileInput"
import { Input } from "../../UI/Input"
import type { Testimonial } from "../../../../../types/testImonial"
import { toast } from "react-toastify"
import { createTestimonial } from "../../../../../api/testImonial"

type TestimonialFormData = Omit<Testimonial, "id">
const INITIAL_STATE: TestimonialFormData = {
	author: "",
	content: "",
	avatarUrl: "",
	role: "",
	company: "",
}

export function CreateTestimonial() {
	const [isLoading, setIsLoading] = useState(false)
	const [Error, setError] = useState(false)
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
		setIsLoading(true)
		setError(false)
		try {
			await createTestimonial(formData)
			setFormData(INITIAL_STATE)
			toast.success("Depoimento Enviado com sucesso!")
		} catch (err) {
			setError(true)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="my-6">
			<h2 className="admin-section-title">
				Comentários
			</h2>
			<form
				onSubmit={handleSubmit}
				className="admin-panel"
			>
				<textarea
					name="content"
					id="comentario"
					placeholder="Digite o comentário"
					required
					className="bg-input-light dark:bg-input-dark w-full h-20 max-h-60 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary-blue transition-all text-sm"
					onChange={handleChange}
				/>

				<Input
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
					onChange={handleChange}
				/>

				<Input
					type="text"
					name="role"
					id="cargo-comentario"
					placeholder="Cargo"
					onChange={handleChange}
					required
				/>

				<Input
					type="text"
					placeholder="Empresa"
					name="company"
					id="empresa-comentario"
					onChange={handleChange}
					required
				/>

				<Button disabled={isLoading} type="submit">
					{isLoading ? "Carregando..." : "Enviar"}
				</Button>
				{Error && (
					<p className="text-red-800 text-xs uppercase">Erro ao enviar!</p>
				)}
			</form>
		</div>
	)
}
