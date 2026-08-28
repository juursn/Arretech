import headerServicos from "../../../../assets/Servicos/header-servicos.png"

export function HeroServicos() {
	return (
		<div
			className="w-full bg-center bg-cover py-14"
			style={{
				backgroundImage: `
                        linear-gradient(
                        to bottom,
                        rgba(0,0,0,0) 0%,
                        rgba(14,14,14,0.50) 37%,
                        rgba(16,16,16,0.56) 51%,
                        rgba(18,18,18,0.63) 63%,
                        rgba(21,21,21,0.75) 75%,
                        rgba(27,27,27,1) 92%),
                        url(${headerServicos})`,
			}}
		>
			<div className="flex flex-col items-start justify-center h-full px-8 mt-14 gap-y-6">
				<h1 className="text-4xl font-extrabold text-gradient-blue">
					Nossos Serviços
				</h1>
				<p className="font-normal text-white max-w-9/12">
					Soluções inteligentes sob medida para o seu negócio. Unimos tecnologia
					de ponta, automação e desenvolvimento ágil para transformar desafios
					em eficiência e colocar a sua empresa no próximo nível.
				</p>
			</div>
		</div>
	)
}
