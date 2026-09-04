import { Button } from "../../UI/Button"
import { FileInput } from "../../UI/FileInput"
import { Input } from "../../UI/Input"

export function CreateComents() {
	return (
		<div className="my-6">
			<h2 className="text-2xl font-bold text-primary-blue dark:text-white">
				Comentários
			</h2>
			<form className="bg-card-offWhite dark:bg-card-black my-4 py-6 px-4 rounded-md shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] text-input-tx-L dark:text-input-tx-D flex flex-col gap-4">
				<textarea
					name="comentario"
					id="comentario"
					placeholder="Digite o comentário"
					className="bg-input-light dark:bg-input-dark w-full h-20 max-h-60 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary-blue transition-all text-sm"
				></textarea>

				<Input
					type="text"
					placeholder="Autor"
					name="autor-comentario"
					id="autor-comentario"
				/>

				<FileInput id="imagem-comentario" name="imagem-comentario" />

				<Input
					type="text"
					name="cargo-comentario"
					id="cargo-comentario"
					placeholder="Cargo"
				/>

				<Input
					type="text"
					placeholder="Empresa"
					name="empresa-comentario"
					id="empresa-comentario"
				/>

				<Button type="submit">Confirmar</Button>
			</form>
		</div>
	)
}
