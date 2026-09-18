import { createRoot } from "react-dom/client"
// Configurações da lib font-awesome
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import "./index.css"
import { App } from "./App.tsx"
import { HashRouter } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext.tsx"

createRoot(document.getElementById("root")!).render(
	<ThemeProvider>
		<HashRouter>
			<App />
		</HashRouter>
	</ThemeProvider>
)
