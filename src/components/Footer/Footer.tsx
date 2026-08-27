import { titulo } from "../../assets"
import { Mail, Phone } from "lucide-react"
import { InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

export const Footer = () => {
    return (
        <footer className="flex flex-col gap-10 p-10 bg-[#2F91FF] text-white mt-10 sm:flex-row">
            <div className="flex flex-col gap-4">
                <img src={titulo} alt="" className="w-[60px]"/>
                <p className="w-[85%] font-light text-sm min-w-[45%]">Especialistas em Inteligência Artificial, desenvolvendo soluções inovadoras que transformam negócios e potencializam resultados.</p>
            </div>
            <div className="flex gap-7">
                <div className="flex flex-col">
                    <h3 className="mb-3 text-xl font-bold">Serviços</h3>
                    <p className="font-light whitespace-nowrap">Chatbots Inteligentes</p>
                    <p className="font-light whitespace-nowrap">Visão Computacional</p>
                    <p className="font-light whitespace-nowrap">Segurança por IA</p>
                    <p className="font-light whitespace-nowrap">Análise Preditiva</p>
                    <p className="font-light whitespace-nowrap">Business Intelligence</p>
                    <p className="font-light whitespace-nowrap">Processamento de Texto</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="mb-3 text-xl font-bold">Contato</h3>
                    <div className="flex gap-1.5">
                        <Mail className="size-7"/>
                        <p>arre.tech123@gmail.com</p>
                    </div>
                    <div className="flex gap-2">
                        <Phone className="size-7"/>
                        <p>+55 (83) 99154-4516</p>
                    </div>
                    <div className="flex gap-2">
                        <InstagramLogoIcon className="size-7"/>
                        <p>arretechofc</p>
                    </div>
                    <div className="flex gap-2">
                        <LinkedinLogoIcon className="size-7"/>
                        <p>ARRETECH</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}