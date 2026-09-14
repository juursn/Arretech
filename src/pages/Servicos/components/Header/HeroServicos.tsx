// import backgroundLight from "../../../../assets/Servicos/header-servicos-claro.png"
import backgroundDark from "../../../../assets/Servicos/header-servicos-escuro.png"

export function HeroServicos() {
	return (
		<div
			className={`w-full bg-center bg-cover py-8 sm:py-16 lg:py-18`}
			style={{
				backgroundImage: `
                    linear-gradient(
                        to bottom,
                        rgba(0,0,0,0) 0%,
                        rgba(14,14,14,0.50) 37%,
                        rgba(16,16,16,0.56) 51%,
                        rgba(18,18,18,0.63) 63%,
                        rgba(21,21,21,0.75) 75%,
                        rgba(27,27,27,1) 92%
                    ),
                    url(${backgroundDark})
                `,
			}}
		>
			<div className="flex flex-col items-start justify-center h-full px-8 gap-y-6">
				<h1 className="text-4xl font-extrabold text-gradient-blue">
					Nossos Serviços
				</h1>
				<p className="w-11/12 font-normal text-white max-w-2xl">
					Soluções inteligentes sob medida para o seu negócio. Unimos tecnologia
					de ponta, automação e desenvolvimento ágil para transformar desafios
					em eficiência e colocar a sua empresa no próximo nível.
				</p>
			</div>
		</div>
	)
}
