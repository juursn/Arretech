interface CardFieldProps {
	label: string
	content: string
}

interface StaticCardProps {
	primaryField: CardFieldProps // Ex: Comentário ou Título
	secondaryField: CardFieldProps // Ex: Autor ou Data
}

export function StaticInput({ primaryField, secondaryField }: StaticCardProps) {
	return (
		<form className="flex flex-col w-full max-w-xs gap-2 bg-card-gray dark:bg-card-dark py-4 px-2 rounded-xl justify-center wrap-break-word">
			{/* Campo Primário (Caixa Grande / Destaque) */}
			<div className="flex flex-col gap-2">
				<label className="text-xs font-light tracking-wider uppercase text-gray-600 dark:text-gray-300">
					{primaryField.label}
				</label>
				<div className="bg-white dark:bg-input-dark w-full rounded-lg p-3 text-sm text-gray-800 dark:text-slate-200 min-h-20 max-h-40 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-width:none">
					{primaryField.content}
				</div>
			</div>

			{/* Campo Secundário (Caixa Menor) */}
			<div className="flex flex-col gap-2">
				<label className="text-xs font-light tracking-wider uppercase text-gray-600 dark:text-gray-300">
					{secondaryField.label}
				</label>
				<div className="bg-white dark:bg-input-dark w-full rounded-lg p-3 text-sm text-gray-800 dark:text-slate-200">
					{secondaryField.content}
				</div>
			</div>
		</form>
	)
}
