import { titulo } from "../../assets"


export const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center w-[85%] gap-5 top-45 text-white absolute sm:top-40 sm:items-start sm:text-start">
            <div className="flex items-baseline">
                <img src={titulo} alt="titulo" className="w-[80px]" />
                <h1 className="font-semibold text-4xl">RRETECH</h1>
            </div>
            <div className="flex flex-col items-center gap-5 sm:items-start">
                <h3 className="font-normal text-2xl">Soluções Inteligentes em IA</h3>
                <p className="max-w-[70%] font-light text-lg">Somos uma software house especializada em sistemas de Inteligência Artificial, criando soluções inovadoras que transformam negócios e potencializam resultados.</p>
                <div>
                    <ul className="flex flex-wrap gap-5 justify-center items-center w-130 font-light text-xs text-[#2f91ff] list-disc list-inside sm:flex-nowrap sm:justify-start sm:w-145">
                        <li className=" w-44 p-0.5 px-4  rounded-full border border-[#2f91ff] bg-[#1f1e27] transition-transform duration-300 hover:scale-110 cursor-default">Machine Learning</li>
                        <li className="w-44 p-0.5 px-4 rounded-full border border-[#2f91ff] bg-[#1f1e27] transition-transform duration-300 hover:scale-110 cursor-default">Automação Inteligente</li>
                        <li className="w-44 p-0.5 px-4 rounded-full border border-[#2f91ff] bg-[#1f1e27] transition-transform duration-300 hover:scale-110 cursor-default">Soluções Personalizadas</li>
                    </ul>
                </div>
                <button className="max-w-90 bg-[#2f91ff] text-white text-2xl py-3 px-5 rounded-2xl transition-transform duration-300 hover:bg-[#1e70d2] cursor-pointer">Conheça nossas soluções</button>
            </div>
        </div>
    )
}