import { IconGradient } from "./components/Icon/IconGradient"
import { AppRoutes } from "./router/AppRoutes"
import { ToastContainer } from "react-toastify"

export const App = () => {
	return (
		<>
			<IconGradient />
			<ToastContainer />
			<AppRoutes />
		</>
	)
}
