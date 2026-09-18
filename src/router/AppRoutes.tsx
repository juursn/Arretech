import { Route, Routes } from "react-router"
import { Services } from "../pages/Services"
import { Blog } from "../pages/Blog"
import { Home } from "../pages/Home"
import { AdminPage } from "../pages/Admin/index"

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/Arretech" element={<Home />} />
			<Route path="/Arretech/Servicos" element={<Services />} />
			<Route path="/Arretech/Noticias" element={<Blog />} />
			<Route path="/Arretech/Admin" element={<AdminPage />} />
		</Routes>
	)
}
