import { IconGradient } from "./components/Icon/IconGradient"
import { AuthProvider } from "./context/AuthContext"
import { AppRoutes } from "./router/AppRoutes"
import { ToastContainer } from "react-toastify"

export const App = () => {
	return (
		<>
			<IconGradient />
			<ToastContainer />
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</>
	)
}
