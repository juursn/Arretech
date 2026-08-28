import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import {
	faRobot,
	faEye,
	faBolt,
	// outros ícones
} from "@fortawesome/free-solid-svg-icons"
import { faOpenai, faPython, faMeta } from "@fortawesome/free-brands-svg-icons"

interface IService {
	id: string
	icon: IconDefinition
	label: string
	text: string
	deliveries: string[]
	technologies: {
		icon: IconDefinition
		label: string
	}[]
}
export const servicos: IService[] = [
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
				icon: faOpenai,
				label: "Openai",
			},
			{
				icon: faPython,
				label: "Python",
			},
			{
				icon: faMeta,
				label: "LLaMA",
			},
			{
				icon: faBolt,
				label: "FastAPI",
			},
		],
	},
	{
		id: "visao-computacional",
		icon: faRobot,
		label: "Visão Computacional",
		text: "Desenvolvemos sistemas capazes de interpretar imagens e vídeos para automatizar processos, identificar padrões e aumentar a eficiência operacional.",
		deliveries: [
			"Detecção e identificação automatizada de objetos",
			"Inspeção visual e análise de qualidade",
			"Automação de processos industriais por visão",
		],
		technologies: [
			{
				icon: faOpenai,
				label: "Python",
			},
			{
				icon: faPython,
				label: "OpenCV",
			},
			{
				icon: faMeta,
				label: "YOLO",
			},
			{
				icon: faBolt,
				label: "TensorFlow",
			},
		],
	},
	{
		id: "analise-preditiva",
		icon: faRobot,
		label: "Análise Preditiva",
		text: "Desenvolvemos modelos de machine learning capazes de analisar dados históricos, prever tendências e apoiar decisões estratégicas com maior precisão.",
		deliveries: [
			"Previsão de demanda e tendências",
			"Modelos de análise e avaliação de riscos",
			"Otimização de recursos e processos",
		],
		technologies: [
			{
				icon: faOpenai,
				label: "Python",
			},
			{
				icon: faPython,
				label: "ScikitLearn",
			},
			{
				icon: faMeta,
				label: "PyTorch",
			},
			{
				icon: faBolt,
				label: "TensorFlow",
			},
		],
	},
	{
		id: "business-intelligence",
		icon: faRobot,
		label: "Business Intelligence",
		text: "Transformamos dados complexos em dashboards interativos e insights automatizados que facilitam o acompanhamento de indicadores e a tomada de decisões.",
		deliveries: [
			"Dashboards interativos e personalizados",
			"Relatórios automatizados",
			"Alertas inteligentes baseados em indicadores",
		],
		technologies: [
			{
				icon: faOpenai,
				label: "Python",
			},
			{
				icon: faPython,
				label: "SQL",
			},
			{
				icon: faMeta,
				label: "Tableau",
			},
			{
				icon: faBolt,
				label: "Data Analytics",
			},
		],
	},
	{
		id: "processamento-de-texto",
		icon: faRobot,
		label: "Processamento de Texto",
		text: "Aplicamos inteligência artificial para compreender, classificar e transformar grandes volumes de texto em informações relevantes para o negócio.",
		deliveries: [
			"Classificação automática de documentos",
			"Resumo inteligente de conteúdos",
			"Análise semântica de grandes volumes de texto",
		],
		technologies: [
			{
				icon: faOpenai,
				label: "Python",
			},
			{
				icon: faPython,
				label: "NLP",
			},
			{
				icon: faMeta,
				label: "OpenAI",
			},
			{
				icon: faBolt,
				label: "SpaCy",
			},
		],
	},
	{
		id: "seguranca-por-ia",
		icon: faRobot,
		label: "Segurança por IA",
		text: "Utilizamos inteligência artificial para identificar comportamentos suspeitos, detectar anomalias e auxiliar na prevenção de fraudes em diferentes operações.",
		deliveries: [
			"Detecção automatizada de fraudes",
			"Monitoramento contínuo de atividades",
			"Identificação de comportamentos anômalos",
		],
		technologies: [
			{
				icon: faOpenai,
				label: "Python",
			},
			{
				icon: faPython,
				label: "Scikit-learn",
			},
			{
				icon: faMeta,
				label: "TensorFlow",
			},
			{
				icon: faBolt,
				label: "Data Analytics",
			},
		],
	},
]
