interface IBadgesSection {
	text: string
}

export function Badge({ text }: IBadgesSection) {
	return (
		<span className="w-fit inline-block mb-6 px-3 py-1 rounded-xl bg-gradient-blueBG text-[14px] text-white uppercase tracking-wider">
			{text}
		</span>
	)
}
