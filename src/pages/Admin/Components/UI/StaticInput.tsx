interface StaticInputProps {
	value: string
	label: string
}

export function StaticInput({ value, label }: StaticInputProps) {
	return (
		<div className="flex flex-col w-full max-w-xs gap-1">
			<label className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
				{label}
			</label>

			<div className="flex flex-col gap-2 text-justify bg-input-light dark:bg-input-dark w-full rounded-lg p-2.5 text-sm">
				<span className="text-sm font-medium text-slate-800 dark:text-slate-200">
					{value}
				</span>
			</div>
		</div>
	)
}
