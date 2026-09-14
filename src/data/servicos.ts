import {
	faRobot,
	faEye,
	faChartDiagram,
	faFileLines,
	faShield,
	faChartLine,
	// outros ícones
} from "@fortawesome/free-solid-svg-icons"

import { FaPython } from "react-icons/fa"
import { AiOutlineOpenAI } from "react-icons/ai"
import { FaMeta } from "react-icons/fa6"
import {
	SiFastapi,
	SiOpencv,
	SiYolo,
	SiTensorflow,
	SiPytorch,
	SiScikitlearn,
	SiGoogleanalytics,
	SiSpacy,
} from "react-icons/si"
import { IoLogoTableau, IoCode } from "react-icons/io5"
import { TbSql } from "react-icons/tb"
import type { Service } from "../types/service"

export const servicos: Service[] = [
	{
		id: "chatbot-inteligente",
		icon: faRobot,
		label: "Chatbots Inteligentes",
		text: "Desenvolvimento de assistentes virtuais com processamento de linguagem natural para atendimento automatizado.",
		deliveries: [
			"Atendimento automatizado e personalizado",
			"Assistentes virtuais com processamento de linguagem natural",
			"Disponibilidade de atendimento 24 horas",
		],
		technologies: [
			{
				icon: AiOutlineOpenAI,
				label: "Openai",
			},
			{
				icon: FaPython,
				label: "Python",
			},
			{
				icon: FaMeta,
				label: "LLaMA",
			},
			{
				icon: SiFastapi,
				label: "FastAPI",
			},
		],
	},
	{
		id: "visao-computacional",
		icon: faEye,
		label: "Visão Computacional",
		text: "Desenvolvemos sistemas capazes de interpretar imagens e vídeos para automatizar processos, identificar padrões e aumentar a eficiência operacional.",
		deliveries: [
			"Detecção e identificação automatizada de objetos",
			"Inspeção visual e análise de qualidade",
			"Automação de processos industriais por visão",
		],
		technologies: [
			{
				icon: FaPython,
				label: "Python",
			},
			{
				icon: SiOpencv,
				label: "OpenCV",
			},
			{
				icon: SiYolo,
				label: "YOLO",
			},
			{
				icon: SiTensorflow,
				label: "TensorFlow",
			},
		],
	},
	{
		id: "analise-preditiva",
		icon: faChartDiagram,
		label: "Análise Preditiva",
		text: "Desenvolvemos modelos de machine learning capazes de analisar dados históricos, prever tendências e apoiar decisões estratégicas com maior precisão.",
		deliveries: [
			"Previsão de demanda e tendências",
			"Modelos de análise e avaliação de riscos",
			"Otimização de recursos e processos",
		],
		technologies: [
			{
				icon: FaPython,
				label: "Python",
			},
			{
				icon: SiScikitlearn,
				label: "ScikitLearn",
			},
			{
				icon: SiPytorch,
				label: "PyTorch",
			},
			{
				icon: SiTensorflow,
				label: "TensorFlow",
			},
		],
	},
	{
		id: "business-intelligence",
		icon: faChartLine,
		label: "Business Intelligence",
		text: "Transformamos dados complexos em dashboards interativos e insights automatizados que facilitam o acompanhamento de indicadores e a tomada de decisões.",
		deliveries: [
			"Dashboards interativos e personalizados",
			"Relatórios automatizados",
			"Alertas inteligentes baseados em indicadores",
		],
		technologies: [
			{
				icon: FaPython,
				label: "Python",
			},
			{
				icon: TbSql,
				label: "SQL",
			},
			{
				icon: IoLogoTableau,
				label: "Tableau",
			},
			{
				icon: SiGoogleanalytics,
				label: "Data Analytics",
			},
		],
	},
	{
		id: "processamento-de-texto",
		icon: faFileLines,
		label: "Processamento de Texto",
		text: "Aplicamos inteligência artificial para compreender, classificar e transformar grandes volumes de texto em informações relevantes para o negócio.",
		deliveries: [
			"Classificação automática de documentos",
			"Resumo inteligente de conteúdos",
			"Análise semântica de grandes volumes de texto",
		],
		technologies: [
			{
				icon: FaPython,
				label: "Python",
			},
			{
				icon: IoCode,
				label: "NLP",
			},
			{
				icon: AiOutlineOpenAI,
				label: "OpenAI",
			},
			{
				icon: SiSpacy,
				label: "SpaCy",
			},
		],
	},
	{
		id: "seguranca-por-ia",
		icon: faShield,
		label: "Segurança por IA",
		text: "Utilizamos inteligência artificial para identificar comportamentos suspeitos, detectar anomalias e auxiliar na prevenção de fraudes em diferentes operações.",
		deliveries: [
			"Detecção automatizada de fraudes",
			"Monitoramento contínuo de atividades",
			"Identificação de comportamentos anômalos",
		],
		technologies: [
			{
				icon: FaPython,
				label: "Python",
			},
			{
				icon: SiScikitlearn,
				label: "Scikit-learn",
			},
			{
				icon: SiTensorflow,
				label: "TensorFlow",
			},
			{
				icon: SiGoogleanalytics,
				label: "Data Analytics",
			},
		],
	},
]
