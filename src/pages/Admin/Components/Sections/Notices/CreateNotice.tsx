import { Button } from "../../UI/Button"
import { DateInput } from "../../UI/DateInput"
import { FileInput } from "../../UI/FileInput"
import { Input } from "../../UI/Input"
import { Select } from "../../UI/Select"

export function CreateNotice() {
	return (
		<div className="my-6">
			<h2 className="admin-section-title">
				Notícias
			</h2>
			<form className="admin-panel">
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
