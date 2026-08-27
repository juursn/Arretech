interface CardsProps {
    imagem: string
    subtitulo: string
    texto: string
}

export const Cards = ({ imagem, subtitulo, texto }: CardsProps) => {
    return (
        <div className="flex justify-center items-center text-center flex-1 flex-col gap-4 py-4 px-6 rounded-xl shadow-xl  hover:scale-105 transition-transform duration-300">
            <img src={imagem} alt="" className="w-[50px]" />
            <h3 className="text-2xl font-medium bg-gradient-to-r from-[#4FB6FF]
                            via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent">{subtitulo}</h3>
            <p className="w-[85%] text-xl font-light">{texto}</p>
        </div>

    )
}

interface CardsProps2 {
    imagem: string
    subtitulo: string
    texto: string
    botao: string
}

export const Cards2 = ({ imagem, subtitulo, texto, botao }: CardsProps2) => {
    return (
        <div className="flex justify-center items-center text-center flex-1 flex-col gap-4 py-6 px-6 rounded-xl shadow-xl  hover:scale-105 transition-transform duration-300">
            <img src={imagem} alt="" className="w-[50px]"/>
            <h3 className="text-2xl font-medium bg-gradient-to-r from-[#4FB6FF] via-[#235FC7] to-[#3E5BDD] bg-clip-text text-transparent">{subtitulo}</h3>
            <p className="w-[85%] text-xl font-light">{texto}</p>
            <button className="py-1 px-4 text-white bg-[#2F91FF] rounded-lg hover:bg-[#1e70d2] cursor-pointer">{botao}</button>
        </div>
    )
}

interface CardsProps3 {
    texto: string
    logo: string
    subtitulo: string
    cargo: string
}

import { aspas } from "../../assets"

export const Cards3 = ({ texto, logo, subtitulo, cargo  }: CardsProps3) => {
    return (
        <div className="flex justify-center flex-1 flex-col gap-10 py-20 px-6 rounded-xl shadow-xl  hover:scale-105 transition-transform duration-300">
            <img src={aspas} alt="" className="w-[50px]"/>
            <div className="w-full flex flex-col items-center gap-10">
                <p className="w-[90%] text-lg font-light">{texto}</p>
                <div className="flex w-full gap-10">
                    <img src={logo} alt="" className="rounded-full" />
                    <div className="flex flex-col items-start">
                        <h3 className="font-bold">{subtitulo}</h3>
                        <p className="font-light">{cargo}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface CardsProps4 {
    imagem: string 
    data: string
    tipo: string
    texto: string
}

export const Cards4 = ({ imagem, data, tipo, texto  }: CardsProps4) => {
    return (
        <div className="flex justify-center flex-1 flex-col gap-5 pb-5 rounded-xl shadow-xl  hover:scale-105 transition-transform duration-300 ">
            <img src={imagem} alt="" className="w-full rounded-t-xl" />
            <div className="flex justify-between px-6 py-2">
                <p>{data}</p>
                <p className="py-1 px-4 text-white bg-[#2F91FF] rounded-lg hover:bg-[#1e70d2] cursor-pointer">{tipo}</p>
            </div>
            <p className="px-6">{texto}</p>
        </div>
    )
}

interface CardsProps5 {
    texto: string
}

export const Cards5 = ({ texto }: CardsProps5) => {
    return (
        <div className="flex py-4 p-7 rounded-3xl border border-[#2F91FF]">
            <p className="font-normal">{texto}</p>
        </div>
    )
}

