import { Button } from "../../ui/Button"
import { DateInput } from "../../ui/DateInput"
import { FileInput } from "../../ui/FileInput"
import { Input } from "../../ui/Input"
import { Select } from "../../ui/Select"

export function CreateNotice() {
	return (
		<div className="my-6">
			<h2 className="text-2xl font-bold text-primary-blue dark:text-white">
				Notícias
			</h2>
			<form className="bg-card-offWhite dark:bg-card-black my-4 py-6 px-4 rounded-md shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] text-input-tx-L dark:text-input-tx-D flex flex-col gap-4">
				<FileInput id="imagem-noticias" name="imagem-noticias" />

				<Input
					type="text"
					placeholder="Título"
					name="titulo-noticia"
					id="titulo-noticia"
				/>

				<Input
					type="text"
					placeholder="Descrição"
					name="descricao-noticia"
					id="descricao-noticia"
				/>
				<DateInput />
				<Select name="tag-noticia" id="tag-noticia" defaultValue="Todos">
					<option value="" disabled hidden>
						Selecione uma categoria
					</option>
					<option value="Eventos" className="text-black dark:text-white">
						Eventos
					</option>
					<option value="Notícias" className="text-black dark:text-white">
						Notícias
					</option>
					<option value="Projetos" className="text-black dark:text-white">
						Projetos
					</option>
					<option value="Atualizações" className="text-black dark:text-white">
						Atualizações
					</option>
					<option value="Bastidores" className="text-black dark:text-white">
						Bastidores
					</option>
				</Select>

				<Button type="submit">Confirmar</Button>
			</form>
		</div>
	)
}
