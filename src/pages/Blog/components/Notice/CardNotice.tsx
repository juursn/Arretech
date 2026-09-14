import type { Notice } from "../../../../types/notice"
import { formatarData } from "./dateFormater"
import { TagNotice } from "./TagNotice"

interface CardNoticeProps {
	notice: Notice
	onClick: (notice: Notice) => void
}

export function CardNotice({ notice, onClick }: CardNoticeProps) {
	const { titulo, data, descricao, tag, imagemUrl } = notice
	return (
		<div
			className="p-4 border border-black/5 dark:border-white/5 shadow-[0_0_8px_rgba(0,0,0,0.1)] max-w-full h-full box-border sm:max-w-110 rounded-2xl flex flex-col gap-4 hover:ring hover:ring-primary-blue/5 transition-all hover:-translate-y-1.5 duration-300 ease-out hover:shadow-[0_0_35px_rgba(0,0,0,0.1)] hover:cursor-pointer"
			onClick={() => onClick(notice)}
		>
			<div className="flex-1">
				<h2 className="pb-2 text-xl font-bold text-primary-blue dark:text-white">
					{titulo}
				</h2>
				<p className="text-sm text-text-gray line-clamp-3 dark:text-white/60 flex-1">
					{descricao}
				</p>
			</div>
			<img src={imagemUrl} alt="" className="rounded-2xl h-48 object-cover" />
			<div className="inline-flex items-center justify-between text-sm  text-text-gray dark:text-white/60">
				<span>{formatarData(data)}</span>
				<TagNotice tag={tag} />
			</div>
		</div>
	)
}
