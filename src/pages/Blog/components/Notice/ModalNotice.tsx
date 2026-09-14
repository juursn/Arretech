import type { Notice } from "../../../../types/notice"
import { formatarData } from "./dateFormater"

interface ModalNoticeProps {
	notice: Notice | null
	onClose: () => void
}

export function ModalNotice({ notice, onClose }: ModalNoticeProps) {
	// Se notice for null, o modal não é renderizado
	if (!notice) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			{/* Overlay Escuro de fundo*/}
			<div
				onClick={onClose}
				className="fixed inset-0 bg-light/60 dark:bg-dark/60 backdrop-blur-sm transition-opacity"
			/>

			{/* Caixa do Modal */}
			<div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl transition-all dark:border-white/10 dark:bg-zinc-900">
				{/* Botão para fechar o modal */}
				<button
					onClick={onClose}
					className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/70 focus:outline-none"
					aria-label="Fechar modal"
				>
					✕
				</button>

				{/* Notícia completa e com rolagem vertical para textos mais longos */}
				<div className="relative h-36 w-full shrink-0 overflow-hidden sm:h-64">
					{/* Header da notícia */}
					<img
						src={notice.imagemUrl}
						alt={notice.titulo}
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

					<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
						<span className="text-xs  opacity-90 sm:text-sm">
							{formatarData(notice.data)}
						</span>
					</div>
				</div>

				{/* Texto da notícia */}
				<div className="flex-1 overflow-y-auto p-6">
					<h2 className="mb-4 text-2xl font-bold text-primary-blue sm:text-3xl dark:text-white">
						{notice.titulo}
					</h2>

					<div className="prose dark:prose-invert max-w-none text-base leading-relaxed text-text-gray dark:text-white/80">
						<p className="whitespace-pre-line">{notice.descricao}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
