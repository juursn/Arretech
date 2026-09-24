interface LabelProps {
	id: string
	title: string
}

export function Label({ id, title }: LabelProps) {
	return (
		<label htmlFor={id} className="text-xs font-light tracking-wider uppercase">
			{title}
		</label>
	)
}
