import { EditableInput } from "../../ui/EditableInput"
import { useState } from "react"
export function EditComment() {
	const [newValue, setNewValue] = useState(
		"A ArreTech revolucionou nossos processos com Sistemas Inteligentes. Com tecnologia nossos processos aumentaram nossa eficiência em 40% e melhorou significativamente a experiência dos associados."
	)
	return (
		<>
			<h2 className="text-2xl font-bold text-primary-blue dark:text-white">
				Comentários
			</h2>
			<div className="bg-card-offWhite dark:bg-card-black my-4 py-6 px-4 rounded-md shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] text-input-tx-L dark:text-input-tx-D flex flex-col gap-4">
				<EditableInput
					label="Comentário"
					value={newValue}
					onSave={change => setNewValue(change)}
				/>
				<EditableInput
					label="Autor"
					value="Ronaldinho Gaucho"
					onSave={change => setNewValue(change)}
				/>
			</div>
		</>
	)
}
