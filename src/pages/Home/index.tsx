import { Header } from "../../components/Header/Header"
import {
	painel,
	nvidia,
	pesquisaai,
	coment,
	img3,
	pesquisaaiDark,
	nvidiaDark,
	painelDark,
} from "../../assets"
import { Cards, Cards2, Cards3, Cards4, Cards5 } from "./components/cards"
import { Eventos } from "./components/eventos"
import { Footer } from "../../components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { NavBar } from "../../components/NavBar/NavBar"
import { useState, useEffect, useRef } from "react"
import { CaretLeftIcon, CaretRightIcon, LightningIcon, NetworkIcon, UsersThreeIcon, RobotIcon, FileTextIcon } from "@phosphor-icons/react"
import { FaBrain, FaEye, FaChartDiagram, FaShield  } from "react-icons/fa6";
import { LuChartLine } from "react-icons/lu";
import { IoChevronDownSharp } from "react-icons/io5";

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

	const carrosselRef1 = useRef<HTMLDivElement>(null)
	const carrosselRef2 = useRef<HTMLDivElement>(null)
	const carrosselRef3 = useRef<HTMLDivElement>(null)
	const [showLeft, setShowLeft] = useState(false)

	const rolar = (
		ref: React.RefObject<HTMLDivElement | null>,
		distancia: number
	) => {
		ref.current?.scrollBy({
			left: distancia,
			behavior: "smooth",
		});
	};

	const verificarScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const elemento = e.currentTarget

		setShowLeft(elemento.scrollLeft > 0)
	}

	return (
		<body className="w-full dark:bg-[#1f1e27] dark:text-white">
			{showElement && <NavBar />}
			<header className=" flex flex-col items-center relative w-full mt-7">
				<nav className="flex justify-center w-[95%]">
					<img
						src={painel}
						alt="painel" 
						className="w-full h-[650px] rounded-4xl sm:h-[550px] block dark:hidden"
					/>
					<img
						src={painelDark}
						alt="painel"
						className="w-full h-[650px] rounded-4xl sm:h-[550px] hidden dark:block"
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
							className="relative flex sm:flex-wrap  flex-row gap-5 mt-15 overflow-x-auto sm:overflow-x-visible scroll-smooth w-full" ref={carrosselRef1} onScroll={verificarScroll}
						>
							<Cards
								imagem={<FaBrain size={38} className="text-blue-500" />}
								subtitulo="Inteligência Artificial"
								texto="Desenvolvemos sistemas de IA personalizados que aprendem e se adaptam às necessidades do seu negócio."
							/>
							<Cards
								imagem={<LightningIcon size={38} weight="fill" className="text-blue-500" />}
								subtitulo="Desenvolvimento Ágil"
								texto="Metodologias modernas de desenvolvimento para entregar soluções robustas e escaláveis rapidamente."
							/>
							<Cards
								imagem={<NetworkIcon size={38} weight="fill" className="text-blue-500" />}
								subtitulo="Automação Inteligente"
								texto="Automatizamos processos complexos usando IA para aumentar eficiência e reduzir custos operacionais."
							/>
							<Cards
								imagem={<UsersThreeIcon size={38} weight="fill" className="text-blue-500" />}
								subtitulo="Suporte Especializado"
								texto="Equipe dedicada de especialistas em IA para garantir o sucesso dos seus projetos."
							/>
						</div>
						<button className="absolute flex right-10" onClick={() => rolar(carrosselRef1, 300)}>
							<CaretRightIcon />
						</button>
						{showLeft && (
							<button
								className="absolute flex left-10"
								onClick={() => rolar(carrosselRef1, -300)}
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
									className="border border-[#235FC7] p-2 px-12 w-[200px]  rounded-3xl transition-transform duration-300 hover:scale-110 cursor-default block dark:hidden"
								/>
								<img
									src={nvidia}
									alt=""
									className="border border-[#235FC7] p-2 px-12 w-[200px]  rounded-3xl transition-transform duration-300 hover:scale-110 cursor-default forced-color-adjust-auto text-white block dark:hidden"
								/>
								<img
									src={pesquisaaiDark}
									alt=""
									className="border border-[#235FC7] p-2 px-12 w-[200px] rounded-3xl transition-transform duration-300 hover:scale-110 cursor-defaul hidden dark:block dark:justify-center"
								/>
								<img
									src={nvidiaDark}
									alt=""
									className="border border-[#235FC7] p-2 px-12 w-[200px] rounded-3xl transition-transform duration-300 hover:scale-110 cursor-default forced-color-adjust-auto text-white hidden dark:block"
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
					<div className="flex flex-col items-center justify-center">
						<h1 className="text-4xl text-center font-bold bg-gradient-to-r from-[#4FB6FF] via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent">
							Conheça Nossos Serviços
						</h1>
						<div className="relative flex sm:flex-wrap  flex-row gap-5 mt-15 overflow-x-auto sm:overflow-x-visible scroll-smooth w-full" ref={carrosselRef2} onScroll={verificarScroll}>
							<Cards2
								imagem={<RobotIcon size={38} weight="fill" className="text-blue-500" />}
								subtitulo="Chatbots Inteligentes"
								texto="Desenvolvimento de assistentes virtuais com processamento de linguagem natural para atendimento automatizado."
								botao="Saiba mais"
							/>
							<Cards2
								imagem={<FaEye size={38} className="text-blue-500" />}
								subtitulo="Visão Computacional"
								texto="Sistemas de reconhecimento de imagem e análise visual para automação de processos industriais."
								botao="Saiba mais"
							/>
							<Cards2
								imagem={<FaChartDiagram size={38} className="text-blue-500" />}
								subtitulo="Análise Preditiva"
								texto="Modelos de machine learning para previsão de tendências e otimização de decisões estratégicas."
								botao="Saiba mais"
							/>
							<Cards2
								imagem={<LuChartLine size={38} className="text-blue-500" />}
								subtitulo="Business Intelligence"
								texto="Dashboards inteligentes com insights automatizados para tomada de decisão baseada em dados."
								botao="Saiba mais"
							/>
							<Cards2
								imagem={<FileTextIcon size={38} weight="fill" className="text-blue-500" />}
								subtitulo="Processamento de Texto"
								texto="Análise semântica e processamento de grandes volumes de texto para extração de insights."
								botao="Saiba mais"
							/>
							<Cards2
								imagem={<FaShield size={38} className="text-blue-500" />}
								subtitulo="Segurança por IA"
								texto="Sistemas de detecção de anomalias e prevenção de fraudes usando algoritmos avançados."
								botao="Saiba mais"
							/>
						</div>
						<button className="absolute flex right-10 mt-30" onClick={() => rolar(carrosselRef2, 300)}>
							<CaretRightIcon />
						</button>
						{showLeft && (
							<button
								className="absolute flex left-10 mt-30"
								onClick={() => rolar(carrosselRef2, -300)}
							>
								<CaretLeftIcon />
							</button>
						)}
					</div>
					<div className="flex flex-col justify-center">
						<h1 className="text-4xl text-center font-bold bg-gradient-to-r from-[#4FB6FF] via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent">
							O que Nossos Clientes Dizem
						</h1>
						<div className="relative flex sm:flex-wrap  flex-row gap-5 mt-15 overflow-x-auto sm:overflow-x-visible scroll-smooth w-full" ref={carrosselRef3} onScroll={verificarScroll}>
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
						<button className="absolute flex right-10 mt-30" onClick={() => rolar(carrosselRef3, 300)}>
							<CaretRightIcon />
						</button>
						{showLeft && (
							<button
								className="absolute flex left-10 mt-30"
								onClick={() => rolar(carrosselRef3, -300)}
							>
								<CaretLeftIcon />
							</button>
						)}
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
					<div className="flex flex-col gap-10 mb-10">
						<h1 className="text-4xl font-bold bg-gradient-to-r from-[#4FB6FF] via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent">
							FAQ
						</h1>
						<div className="flex flex-col gap-4">
							<Cards5 
								texto="Quanto tempo leva para implementar um projeto de Inteligência Artificial?"
								imagem={<IoChevronDownSharp className="text-blue-500" />}
							/>
							<Cards5 
								texto="Quanto tempo leva para implementar um projeto de Inteligência Artificial?" 
								imagem={<IoChevronDownSharp className="text-blue-500" />}
							/>
							<Cards5 
								texto="Quanto tempo leva para implementar um projeto de Inteligência Artificial?" 
								imagem={<IoChevronDownSharp className="text-blue-500" />}
							/>
						</div>
					</div>
				</div>
			</aside>
			<Footer />
		</body>
	)
}
