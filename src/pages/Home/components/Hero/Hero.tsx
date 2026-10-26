import { titulo } from "../../../../assets"


export const Hero = () => {
    const listaSolucoes = ["Machine Learning", "Automação Inteligente", "Soluções Personalizadas"]

    return (

        <div className="absolute top-45 sm:top-40 flex w-[90%] max-w-full flex-col items-center gap-10 text-center text-white sm:items-start sm:text-start">
            <div className="flex items-baseline">
                <img src={titulo} alt="Logo Arretech" className="w-[60px] sm:w-[80px]" />
                <h1 className="text-4xl font-semibold">RRETECH</h1>
            </div>

            <div className="flex w-full min-w-0 flex-col items-center gap-5 sm:items-start">
                <h3 className="text-2xl font-normal">
                    Soluções Inteligentes em IA
                </h3>

                <p className="w-full max-w-[70%] text-lg font-light max-sm:max-w-full">
                    Somos uma software house especializada em sistemas de Inteligência Artificial, criando soluções inovadoras que transformam negócios e potencializam resultados.
                </p>

                <ul className="flex w-full min-w-0 flex-wrap items-center justify-center gap-3 font-light text-[#2f91ff] sm:justify-start">
                    {listaSolucoes.map((solucao, index) => (
                        <li
                            key={index}
                            className="max-w-full rounded-full border border-[#2f91ff] bg-[#1f1e27] px-3 py-1 text-center text-[10px] transition-transform duration-300 hover:scale-105 cursor-default"
                        >
                            {solucao}
                        </li>
                    ))}
                </ul>

                <button className="w-full max-w-[360px] rounded-2xl bg-[#2f91ff] px-4 py-3 text-xl text-white transition-colors duration-300 hover:bg-[#1e70d2] cursor-pointer sm:w-auto sm:text-2xl">
                    Conheça nossas soluções
                </button>
            </div>
        </div>

    )
}