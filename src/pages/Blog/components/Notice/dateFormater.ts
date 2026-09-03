export function formatarData(dataString: string) {
	// Adiciona um horário fixo para evitar problemas de fuso horário (UTC) ao interpretar a string "YYYY-MM-DD"
	const data = new Date(dataString + "T00:00:00")

	const formatador = new Intl.DateTimeFormat("pt-BR", {
		day: "numeric",
		month: "long",
		year: "numeric",
	})

	// O resultado padrão será algo como "26 de junho de 2026"
	const dataFormatada = formatador.format(data)

	// Substitui " de " por " DE " e transforma tudo em maiúsculas para ficar idêntico ao design
	return dataFormatada.replace(/ de /g, " DE ").toUpperCase()
}
