import { BrowserRouter, Route, Routes } from "react-router"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { Servicos } from "./pages/Servicos"
import { IconGradient } from "./components/Icon/IconGradient"

import { Home } from "./pages/Home/index"

export const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 600,
			once: false,
			easing: "ease",
		})
	}, [])
	return (
		<>
			<IconGradient />

			<Routes>
				<Route path="/Arretech" element={<Home />} />
				<Route path="/Arretech/Servicos" element={<Servicos />} />
			</Routes>
		</>
	)
}
