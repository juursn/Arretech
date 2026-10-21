import { createRoot } from "react-dom/client"
// Configurações da lib font-awesome
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import "./index.css"
import { App } from "./App.tsx"
import { HashRouter } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext.tsx"

// Em desenvolvimento, o MSW intercepta a API no navegador; em produção ele não inicia.
async function enableMocking() {
	if (!import.meta.env.DEV) {
		return
	}

	const { worker } = await import("./mock/browser.ts")

	// A renderização aguarda o worker para evitar requisições antes dos mocks estarem prontos.
	return worker.start({
		quiet: true,
		serviceWorker: {
			url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
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
