import { useState } from "react"
import { deleteNotice } from "../../../../../api/notice"
import { getApiErrorMessage } from "../../../../../api/axios"
import type { Notice } from "../../../../../types/notice"
import { StaticInput } from "../../UI/StaticInput"
import { toast } from "react-toastify"

export function DeleteNotice({ notices, onDeleted, disabled }: { notices: Notice[]; onDeleted: (id: string) => void; disabled?: boolean }) {
	const [deletingId, setDeletingId] = useState<string | null>(null)
	const [error, setError] = useState("")
	async function handleDelete(id: string) {
		if (deletingId !== null || disabled) return
		setDeletingId(id)
		setError("")
		try {
			await deleteNotice(id)
			onDeleted(id)
			toast.success("Notícia excluída!")
		} catch (err) {
			setError(getApiErrorMessage(err, "Não foi possível excluir a notícia."))
		} finally {
			setDeletingId(null)
		}
	}
	return (
		<>
			<h2 className="admin-section-title">
				Notícias
			</h2>
			<div className="admin-panel">
				{notices.length === 0 && !disabled && <p>Nenhuma notícia cadastrada.</p>}
				{notices.map(item => (
					<StaticInput key={item.id} primaryField={{ label: "Notícia", content: item.title }} secondaryField={{ label: "Categoria", content: item.tag }} onDelete={() => handleDelete(item.id)} isDeleting={deletingId === item.id} disabled={disabled || deletingId !== null} />
				))}
				{error && <p role="alert">{error}</p>}
			</div>
		</>
	)
}
