export function dateFormater(dateString: string) {
	// Adiciona um horário fixo para evitar problemas de fuso horário (UTC) ao interpretar a string "YYYY-MM-DD"
	const date = new Date(dateString + "T00:00:00")

	const formater = new Intl.DateTimeFormat("pt-BR", {
		day: "numeric",
		month: "long",
		year: "numeric",
	})

	// O resultado padrão será algo como "26 de junho de 2026"
	const dateFormate = formater.format(date)

	// Substitui " de " por " DE " e transforma tudo em maiúsculas para ficar idêntico ao design
	return dateFormate.replace(/ de /g, " DE ").toUpperCase()
}
