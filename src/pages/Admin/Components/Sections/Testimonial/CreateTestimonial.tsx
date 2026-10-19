import React, { useState } from "react"
import { Button } from "../../ui/Button"
import { FileInput } from "../../ui/FileInput"
import { Input } from "../../ui/Input"
import type { Testimonial } from "../../../../../types/testImonial"
import { toast } from "react-toastify"
import { createTestimonial } from "../../../../../api/testImonial"

const INITIAL_STATE = {
	author: "",
	content: "",
	avatarUrl: "",
	role: "",
	company: "",
} as Testimonial

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
	async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault()
		setIsLoading(true)
		setError(false)
		try {
			createTestimonial(formData)
			toast.success("Depoimento Enviado com sucesso!")
		} catch (err) {
			setError(true)
		}
	}

	return (
		<div className="my-6">
			<h2 className="text-2xl font-bold text-primary-blue dark:text-white">
				Comentários
			</h2>
			<form
				onSubmit={handleSubmit}
				className="bg-card-offWhite dark:bg-card-black my-4 py-6 px-4 rounded-md shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] text-input-tx-L dark:text-input-tx-D flex flex-col gap-4"
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
