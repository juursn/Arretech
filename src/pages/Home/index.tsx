import { Header } from "../../components/Header/Header"
import {
	painel,
	inteligencia,
	agil,
	auto,
	suporte,
	nvidia,
	pesquisaai,
	processamneto,
	chatbot,
	visao,
	analise,
	business,
	seguranca,
	coment,
	img3,
} from "../../assets"
import { Cards, Cards2, Cards3, Cards4, Cards5 } from "../../components/cards"
import { Eventos } from "../../components/eventos"
import { Footer } from "../../components/Footer/Footer"
import { Hero } from "../../components/Hero/Hero"
import { NavBar } from "../../components/NavBar/NavBar"
import { useState, useEffect, useRef } from "react"
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react"

export const Home = () => {
	const [showElement, setShowElement] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 300 ? setShowElement(true) : setShowElement(false)
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const carrosselRef = useRef<HTMLDivElement>(null)
	const [showLeft, setShowLeft] = useState(false)

	const irParaDireita = () => {
		carrosselRef.current?.scrollBy({
			left: 390,
			behavior: "smooth",
		})
	}

	const irParaEsquerda = () => {
		carrosselRef.current?.scrollBy({
			left: -390,
			behavior: "smooth",
		})
	}

	const verificarScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const elemento = e.currentTarget

		setShowLeft(elemento.scrollLeft > 0)
	}

	return (
		<body className="w-full">
			{showElement && <NavBar />}
			<header className=" flex flex-col items-center relative w-full mt-7">
				<nav className="flex justify-center w-[95%]">
					<img
						src={painel}
						alt="painel"
						className="w-full h-[650px] rounded-4xl sm:h-[550px]"
					/>
					<Header />
				</nav>
			</header>
			<main className="flex justify-center">
				<Hero />
			</main>
			<aside className="flex flex-col items-center w-full mt-15">
				<div className="flex flex-col gap-15 w-[95%]">
					<div className="flex flex-col items-center py-7 gap-10 border border-[#2F91FF] rounded-lg">
						<h1
							className="text-4xl font-bold bg-gradient-to-r from-[#4FB6FF]
                        via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent"
						>
							Nossa missão
						</h1>
						<p className="w-[80%] text-center text-xl font-light">
							Democratizar o acesso à Inteligência Artificial, desenvolvendo
							soluções inovadoras que empoderam empresas a alcançar novos
							patamares de eficiência e competitividade no mercado digital.
						</p>
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="w-full ">
							<h1 className="text-4xl font-bold bg-gradient-to-r from-[#4FB6FF] via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent">
								O que oferecemos ?
							</h1>
						</div>
						<div
							className="relative flex sm:flex-col gap-5 mt-15 overflow-x-auto scroll-smooth w-full"
							ref={carrosselRef}
							onScroll={verificarScroll}
						>
							<Cards
								imagem={inteligencia}
								subtitulo="Inteligência Artificial"
								texto="Desenvolvemos sistemas de IA personalizados que aprendem e se adaptam às necessidades do seu negócio."
							/>
							<Cards
								imagem={agil}
								subtitulo="Desenvolvimento Ágil"
								texto="Metodologias modernas de desenvolvimento para entregar soluções robustas e escaláveis rapidamente."
							/>
							<Cards
								imagem={auto}
								subtitulo="Automação Inteligente"
								texto="Automatizamos processos complexos usando IA para aumentar eficiência e reduzir custos operacionais."
							/>
							<Cards
								imagem={suporte}
								subtitulo="Suporte Especializado"
								texto="Equipe dedicada de especialistas em IA para garantir o sucesso dos seus projetos."
							/>
						</div>
						<button className="absolute flex right-10" onClick={irParaDireita}>
							<CaretRightIcon />
						</button>
						{showLeft && (
							<button
								className="absolute flex left-10"
								onClick={irParaEsquerda}
							>
								<CaretLeftIcon />
							</button>
						)}
					</div>
					<div className="flex flex-col items-center">
						<div className="flex flex-col items-center gap-10">
							<h1 className="text-4xl text-center font-bold bg-gradient-to-r from-[#4FB6FF] via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent">
								Nossa Trajetória no Ecossistema{" "}
							</h1>
							<p className="w-[70%] text-center text-xl font-normal">
								Construindo parcerias fortes e levando presença arretada para os
								palcos da inovação tecnológica.
							</p>
							<div className="flex gap-10">
								<img
									src={pesquisaai}
									alt=""
									className="border border-[#235FC7] p-2 px-12 rounded-3xl transition-transform duration-300 hover:scale-110 cursor-default"
								/>
								<img
									src={nvidia}
									alt=""
									className="border border-[#235FC7] p-2 px-3 rounded-3xl transition-transform duration-300 hover:scale-110 cursor-default"
								/>
							</div>
						</div>
						<div className="flex flex-col items-center gap-7 w-full mt-15">
							<h3 className="text-lg font-normal bg-gradient-to-r from-[#4FB6FF] via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent border border-[#235FC7] py-1 px-3 rounded-full transition-transform duration-300 hover:scale-110 cursor-default">
								MARCANDO PRESENÇA
							</h3>
							<div className="w-full overflow-hidden">
								<Eventos />
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<h1 className="text-4xl text-center font-bold bg-gradient-to-r from-[#4FB6FF] via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent">
							Conheça Nossos Serviços
						</h1>
						<div className="flex flex-col gap-5 mt-15 max-w-[400px] sm:grid grid-cols-2 min-w-[658px]  lg:grid-cols-3 min-w-full">
							<Cards2
								imagem={chatbot}
								subtitulo="Chatbots Inteligentes"
								texto="Desenvolvimento de assistentes virtuais com processamento de linguagem natural para atendimento automatizado."
								botao="Saiba mais"
							/>
							<Cards2
								imagem={visao}
								subtitulo="Visão Computacional"
								texto="Sistemas de reconhecimento de imagem e análise visual para automação de processos industriais."
								botao="Saiba mais"
							/>
							<Cards2
								imagem={analise}
								subtitulo="Análise Preditiva"
								texto="Modelos de machine learning para previsão de tendências e otimização de decisões estratégicas."
								botao="Saiba mais"
							/>
							<Cards2
								imagem={business}
								subtitulo="Business Intelligence"
								texto="Dashboards inteligentes com insights automatizados para tomada de decisão baseada em dados."
								botao="Saiba mais"
							/>
							<Cards2
								imagem={processamneto}
								subtitulo="Processamento de Texto"
								texto="Análise semântica e processamento de grandes volumes de texto para extração de insights."
								botao="Saiba mais"
							/>
							<Cards2
								imagem={seguranca}
								subtitulo="Segurança por IA"
								texto="Sistemas de detecção de anomalias e prevenção de fraudes usando algoritmos avançados."
								botao="Saiba mais"
							/>
						</div>
					</div>
					<div>
						<h1 className="text-4xl text-center font-bold bg-gradient-to-r from-[#4FB6FF] via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent">
							O que Nossos Clientes Dizem
						</h1>
						<div className="flex flex-col gap-5 mt-15 max-w-[400px] sm:grid grid-cols-2 min-w-[658px]  lg:grid-cols-3 min-w-full">
							<Cards3
								texto="A ArreTech revolucionou nossos processos com Sistemas Inteligentes. Com tecnologia nossos processos aumentaram nossa eficiência em 40% e melhorou significativamente a experiência dos associados."
								logo={coment}
								subtitulo="Daniel Bruno"
								cargo="Coordenador, Amerifa -PB"
							/>
							<Cards3
								texto="A ArreTech revolucionou nossos processos com Sistemas Inteligentes. Com tecnologia nossos processos aumentaram nossa eficiência em 40% e melhorou significativamente a experiência dos associados."
								logo={coment}
								subtitulo="Daniel Bruno"
								cargo="Coordenador, Amerifa -PB"
							/>
							<Cards3
								texto="A ArreTech revolucionou nossos processos com Sistemas Inteligentes. Com tecnologia nossos processos aumentaram nossa eficiência em 40% e melhorou significativamente a experiência dos associados."
								logo={coment}
								subtitulo="Daniel Bruno"
								cargo="Coordenador, Amerifa -PB"
							/>
						</div>
					</div>
					<div className="flex flex-col items-center gap-10">
						<h1 className="text-4xl text-center font-bold bg-gradient-to-r from-[#4FB6FF] via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent">
							Pronto para Revolucionar seu Negócio?
						</h1>
						<p className="text-center text-xl font-light">
							Entre em contato conosco e descubra como a IA pode transformar
							seus processos e impulsionar seus resultados.
						</p>
						<div className="flex justify-center gap-5">
							<button className="py-1 px-4 text-white bg-[#2F91FF] rounded-lg hover:bg-[#1e70d2] cursor-pointer">
								Agendar consulta
							</button>
							<button className="py-1 px-4 border rounded-lg hover:bg-[#1e70d2] border-[#2F91FF] font-light cursor-pointer">
								Solicitar orçamento
							</button>
						</div>
					</div>
					<div className="flex flex-col gap-10">
						<h1 className="text-4xl font-bold bg-gradient-to-r from-[#4FB6FF] via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent">
							Notícias Recentes
						</h1>
						<div className="flex flex-col gap-5 mt-5 max-w-[400px] sm:grid grid-cols-2 min-w-[658px]  lg:grid-cols-3 min-w-full">
							<Cards4
								imagem={img3}
								data="16 de junho, 2025"
								tipo="Reunião"
								texto="Encontro voltado para análise de indicadores do projeto em desenvolvimento"
							/>
							<Cards4
								imagem={img3}
								data="16 de junho, 2025"
								tipo="Reunião"
								texto="Encontro voltado para análise de indicadores do projeto em desenvolvimento"
							/>
							<Cards4
								imagem={img3}
								data="16 de junho, 2025"
								tipo="Reunião"
								texto="Encontro voltado para análise de indicadores do projeto em desenvolvimento"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-10">
						<h1 className="text-4xl font-bold bg-gradient-to-r from-[#4FB6FF] via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent">
							FAQ
						</h1>
						<div className="flex flex-col gap-4">
							<Cards5 texto="Quanto tempo leva para implementar um projeto de Inteligência Artificial?" />
							<Cards5 texto="Quanto tempo leva para implementar um projeto de Inteligência Artificial?" />
							<Cards5 texto="Quanto tempo leva para implementar um projeto de Inteligência Artificial?" />
						</div>
					</div>
				</div>
			</aside>
		</body>
	)
}
