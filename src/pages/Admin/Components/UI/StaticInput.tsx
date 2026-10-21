import { Button } from "./Button"

interface CardFieldProps {
	label: string
	content: string
}

interface StaticCardProps {
	primaryField: CardFieldProps // Ex: Comentário ou Título
	secondaryField: CardFieldProps // Ex: Autor ou Data
	onDelete?: () => void
	isDeleting?: boolean
	disabled?: boolean
}

export function StaticInput({
	primaryField,
	secondaryField,
	onDelete,
	isDeleting,
	disabled,
}: StaticCardProps) {
	return (
		<div className="flex flex-col w-full max-w-xs gap-2 bg-card-gray dark:bg-card-dark py-4 px-2 rounded-xl justify-center wrap-break-word">
			{/* Campo Primário (Caixa Grande / Destaque) */}
			<div className="flex flex-col gap-2">
				<label className="label-input">{primaryField.label}</label>
				<div className="bg-white dark:bg-input-dark w-full rounded-lg p-3 text-sm text-gray-800 dark:text-slate-200 min-h-20 max-h-40 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-width:none">
					{primaryField.content}
				</div>
			</div>

			{/* Campo Secundário (Caixa Menor) */}
			<div className="flex flex-col gap-2">
				<label className="label-input">{secondaryField.label}</label>
				<div className="bg-white dark:bg-input-dark w-full rounded-lg p-3 text-sm text-gray-800 dark:text-slate-200">
					{secondaryField.content}
				</div>
			</div>
			{onDelete && (
				<Button type="button" onClick={onDelete} disabled={disabled}>
					{isDeleting ? "Excluindo..." : "Excluir"}
				</Button>
			)}
		</div>
	)
}
