import { useState } from "react"
import { FaCheck } from "react-icons/fa6"
import { IoCloseOutline } from "react-icons/io5"
import { TbEditFilled } from "react-icons/tb"

interface EditableInputProps {
	value: string
	onSave: (newValue: string) => void
	label?: string
}

export const EditableInput = ({ value, onSave, label }: EditableInputProps) => {
	const [isEditing, setIsEditing] = useState(false)
	const [inputValue, setInputValue] = useState(value)

	// Salva o valor editado e retorna ao estado estático
	const handleSave = () => {
		onSave(inputValue)
		setIsEditing(false)
	}

	// Cancela a edição, restaura o valor original e retorna ao estado estático
	const handleCancel = () => {
		setInputValue(value)
		setIsEditing(false)
	}
	return (
		<div className="flex flex-col w-full max-w-xs gap-1">
			<label className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
				{label}
			</label>

			{!isEditing ? (
				/* 1. MODO ESTÁTICO (Estado Inicial) */
				<div className="flex flex-col gap-2 text-justify bg-input-light dark:bg-input-dark w-full rounded-lg p-2.5 text-sm">
					<span className="text-sm font-medium text-slate-800 dark:text-slate-200">
						{value}
					</span>
					<button
						type="button"
						onClick={() => setIsEditing(true)}
						className="p-1 transition-opacity cursor-pointer text-primary-blue hover:opacity-80"
						title="Editar campo"
					>
						<TbEditFilled />
					</button>
				</div>
			) : (
				/* 2. MODO EDITÁVEL (Após clicar no ícone de editar) */
				<div className="flex flex-wrap bg-input-light dark:bg-input-dark w-full rounded-lg p-2.5 transition-all duration-200 text-sm outline-primary-blue outline-2">
					<textarea
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						className="w-full h-10 pr-2 text-sm bg-transparent outline-none text-slate-900 max-h-60 dark:text-white"
						autoFocus
						onKeyDown={e => {
							if (e.key === "Enter") handleSave()
							if (e.key === "Escape") handleCancel()
						}}
					/>
					<div className="flex items-center gap-1">
						<button
							type="button"
							onClick={handleSave}
							className="p-1 cursor-pointer text-emerald-500 hover:text-emerald-600"
							title="Salvar"
						>
							<FaCheck />
						</button>
						<button
							type="button"
							onClick={handleCancel}
							className="p-1 cursor-pointer text-rose-500 hover:text-rose-600"
							title="Cancelar"
						>
							<IoCloseOutline />
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
