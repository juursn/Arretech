import { createRoot } from "react-dom/client"
// Configurações da lib font-awesome
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import "./index.css"
import { App } from "./App.tsx"
import { HashRouter } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext.tsx"
import { bypass } from "msw"

//Inicializando o Mock MSW
async function enableMocking() {
	if (!import.meta.env.DEV) {
		return
	}

	const { worker } = await import("../src/mock/browser.ts")

	// Retorna a promessa de inicialização
	return worker.start({
		serviceWorker: {
			url: "/Arretech/mockServiceWorker.js",
		},
		onUnhandledRequest: "bypass",
	})
}
enableMocking().then(() => {
	createRoot(document.getElementById("root")!).render(
		<ThemeProvider>
			<HashRouter>
				<App />
			</HashRouter>
		</ThemeProvider>
	)
})
