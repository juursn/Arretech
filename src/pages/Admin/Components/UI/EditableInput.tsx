import { useState } from "react"
import { FaCheck } from "react-icons/fa6"
import { IoCloseOutline } from "react-icons/io5"
import { TbEditFilled } from "react-icons/tb"
import { getApiErrorMessage } from "../../../../api/axios"

interface EditableInputProps {
	value: string
	onSave: (newValue: string) => void | Promise<void>
	label?: string
	disabled?: boolean
	type?: "text" | "date"
	options?: readonly string[]
}

export const EditableInput = ({
	value,
	onSave,
	label,
	disabled,
	type = "text",
	options,
}: EditableInputProps) => {
	const [isEditing, setIsEditing] = useState(false)
	const [inputValue, setInputValue] = useState(value)
	const [isSaving, setIsSaving] = useState(false)
	const [error, setError] = useState("")

	// Salva o valor editado e retorna ao estado estático
	const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (isSaving || disabled) return
		if (!inputValue.trim()) {
			setError("Preencha o campo com um valor válido.")
			return
		}
		setIsSaving(true)
		setError("")
		try {
			await onSave(inputValue.trim())
			setIsEditing(false)
		} catch (err) {
			setError(getApiErrorMessage(err, "Não foi possível salvar a alteração."))
		} finally {
			setIsSaving(false)
		}
	}

	// Cancela a edição, restaura o valor original e retorna ao estado estático
	const handleCancel = () => {
		setInputValue(value)
		setError("")
		setIsEditing(false)
	}
	return (
		<div className="flex flex-col w-full max-w-xs gap-1">
			<label className="label-input">{label}</label>

			{!isEditing ? (
				/* 1. MODO ESTÁTICO (Estado Inicial) */
				<div className="flex justify-between gap-2 text-justify bg-input-light dark:bg-input-dark w-full rounded-lg p-2.5 text-sm">
					<span className="text-sm font-medium text-slate-800 dark:text-slate-200">
						{value}
					</span>
					<button
						type="button"
						onClick={() => {
							setInputValue(value)
							setError("")
							setIsEditing(true)
						}}
						disabled={disabled}
						className="p-1 transition-opacity cursor-pointer text-primary-blue hover:opacity-80"
						title="Editar campo"
					>
						<TbEditFilled />
					</button>
				</div>
			) : (
				/* 2. MODO EDITÁVEL (Após clicar no ícone de editar) */
				<form
					onSubmit={handleSave}
					onKeyDown={e => {
						if (e.key === "Escape" && !isSaving && !disabled) handleCancel()
					}}
					className="flex flex-wrap bg-input-light dark:bg-input-dark w-full rounded-lg p-2.5 transition-all duration-200 text-sm outline-primary-blue outline-2"
				>
					{options ? (
						<select
							aria-label={label}
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
							required
							disabled={disabled || isSaving}
							className="w-full h-10 pr-2 text-sm bg-transparent outline-none text-slate-900 max-h-60 dark:text-white"
						>
							{options.map(option => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					) : type === "date" ? (
						<input
							aria-label={label}
							type="date"
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
							required
							disabled={disabled || isSaving}
							className="w-full h-10 pr-2 text-sm bg-transparent outline-none text-slate-900 max-h-60 dark:text-white"
						/>
					) : (
						<textarea
							aria-label={label}
							value={inputValue}
							required
							disabled={disabled || isSaving}
							onChange={e => setInputValue(e.target.value)}
							className="w-full h-10 pr-2 text-sm bg-transparent outline-none text-slate-900 max-h-60 dark:text-white"
							autoFocus
							onKeyDown={e => {
								if (
									e.key === "Enter" &&
									!e.shiftKey &&
									!e.nativeEvent.isComposing
								) {
									e.preventDefault()
									e.currentTarget.form?.requestSubmit()
								}
							}}
						/>
					)}
					<div className="flex items-center gap-1">
						<button
							type="submit"
							disabled={disabled || isSaving}
							className="p-1 cursor-pointer text-emerald-500 hover:text-emerald-600"
							title="Salvar"
						>
							<FaCheck />
						</button>
						<button
							type="button"
							onClick={handleCancel}
							disabled={disabled || isSaving}
							className="p-1 cursor-pointer text-rose-500 hover:text-rose-600"
							title="Cancelar"
						>
							<IoCloseOutline />
						</button>
					</div>
					{error && <p role="alert">{error}</p>}
				</form>
			)}
		</div>
	)
}
