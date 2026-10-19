import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// No HashRouter, /Servicos#chatbots é uma rota com uma seção, não uma âncora nativa.
// O hook roda na página de destino, depois que seus elementos foram renderizados.
export function useSectionScroll() {
	const { hash, key } = useLocation()

	useEffect(() => {
		if (!hash) return
		document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" })
	}, [hash, key])
}
