import { formatarData } from "./dateFormater"
import { TagNotice } from "./TagNotice"

interface CardNoticeProps {
	titulo: string
	data: string
	imagem: string
	descricao: string
	tag: string
}

export function CardNotice({
	titulo,
	data,
	descricao,
	tag,
	imagem,
}: CardNoticeProps) {
	return (
		<div className="p-4 border border-black/6 shadow-[0_0_8px_rgba(0,0,0,0.1)] max-w-full h-full box-border sm:max-w-110 rounded-2xl flex flex-col gap-3 hover:ring hover:ring-primary-blue/5 transition-all hover:-translate-y-1.5 duration-300 ease-out hover:shadow-[0_0_35px_rgba(0,0,0,0.1)]">
			<div>
				<h2 className="pb-2 text-xl font-bold text-primary-blue dark:text-white">
					{titulo}
				</h2>
				<p className="text-sm text-text-gray dark:text-white/60">{descricao}</p>
			</div>
			<img src={imagem} alt="" className="rounded-2xl" />
			<div className="inline-flex items-center justify-between text-sm  text-text-gray dark:text-white/60">
				<span>{formatarData(data)}</span>
				<TagNotice tag={tag} />
			</div>
		</div>
	)
}
