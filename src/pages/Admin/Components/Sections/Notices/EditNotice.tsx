import { useState } from "react"
import { EditableInput } from "../../ui/EditableInput"

export function EditNotice() {
	const [newValue, setNewValue] = useState(
		"A ArreTech revolucionou a instria de tecnologia"
	)
	return (
		<>
			<h2 className="text-2xl font-bold text-primary-blue dark:text-white">
				Notícias
			</h2>
			<div className="bg-card-offWhite dark:bg-card-black my-4 py-6 px-4 rounded-md shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] text-input-tx-L dark:text-input-tx-D flex flex-col gap-4">
				<EditableInput
					label="Notícia"
					value={newValue}
					onSave={change => setNewValue(change)}
				/>
			</div>
		</>
	)
}
