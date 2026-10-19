import { EditableInput } from "../../UI/EditableInput"
import { useState } from "react"
export function EditTestimonial() {
	const [newValue, setNewValue] = useState(
		"A ArreTech revolucionou nossos processos com Sistemas Inteligentes. Com tecnologia nossos processos aumentaram nossa eficiência em 40% e melhorou significativamente a experiência dos associados."
	)
	return (
		<>
			<h2 className="admin-section-title">
				Comentários
			</h2>
			<div className="admin-panel">
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
