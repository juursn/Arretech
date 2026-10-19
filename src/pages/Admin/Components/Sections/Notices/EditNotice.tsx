import { useState } from "react"
import { EditableInput } from "../../UI/EditableInput"

export function EditNotice() {
	// Esta edição altera apenas o estado da tela; ainda não persiste a notícia em uma API.
	const [newValue, setNewValue] = useState(
		"A ArreTech revolucionou a instria de tecnologia"
	)
	return (
		<>
			<h2 className="admin-section-title">
				Notícias
			</h2>
			<div className="admin-panel">
				<EditableInput
					label="Notícia"
					value={newValue}
					onSave={change => setNewValue(change)}
				/>
			</div>
		</>
	)
}
