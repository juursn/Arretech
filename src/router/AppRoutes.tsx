import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { LoadingScreen } from "./LoadingScreen"

const Home = lazy(() =>
	import("../pages/Home").then(m => ({ default: m.Home }))
)
const Blog = lazy(() =>
	import("../pages/Blog").then(m => ({ default: m.Blog }))
)
const Services = lazy(() =>
	import("../pages/Services").then(m => ({ default: m.Services }))
)
const Admin = lazy(() =>
	import("../pages/Admin").then(m => ({ default: m.Admin }))
)

export function AppRoutes() {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Routes>
				<Route path="/Arretech" element={<Home />} />
				<Route path="/Arretech/Noticias" element={<Blog />} />
				<Route path="/Arretech/Servicos" element={<Services />} />
				<Route path="/Arretech/Admin" element={<Admin />} />
			</Routes>
		</Suspense>
	)
}
