export function IconGradient() {
	return (
		<svg width="0" height="0">
			<defs>
				<linearGradient
					id="meuGradienteLight"
					x1="0%"
					y1="0%"
					x2="100%"
					y2="100%"
				>
					<stop offset="0%" stopColor="#4FB6FF" />
					<stop offset="50%" stopColor="#2F91FF" />
					<stop offset="100%" stopColor="#2F91FF" />
				</linearGradient>

				<linearGradient
					id="meuGradienteDark"
					x1="0%"
					y1="0%"
					x2="100%"
					y2="100%"
				>
					<stop offset="16%" stopColor="#A4D9FF" />
					<stop offset="61%" stopColor="#B8E2FF" />
					<stop offset="100%" stopColor="#FFFFFF" />
				</linearGradient>
			</defs>
		</svg>
	)
}
