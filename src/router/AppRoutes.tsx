import { Route, Routes } from "react-router"
import { Servicos } from "../pages/Servicos"
import { Blog } from "../pages/Blog"
import { Home } from "../pages/Home"
import { AdminPage } from "../pages/Admin/index"

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/Arretech" element={<Home />} />
			<Route path="/Arretech/Servicos" element={<Servicos />} />
			<Route path="/Arretech/Noticias" element={<Blog />} />
			<Route path="/Arretech/Admin" element={<AdminPage />} />
		</Routes>
	)
}
