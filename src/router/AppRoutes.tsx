import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { LoadingScreen } from "./LoadingScreen"
import { ProtectedRoute } from "./ProtectedRoute"

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

const Login = lazy(() =>
	import("../pages/Login").then(m => ({ default: m.Login }))
)

export function AppRoutes() {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Routes>
				{/* Rotas públicas */}
				<Route path="/" element={<Home />} />
				<Route path="/Noticias" element={<Blog />} />
				<Route path="/Servicos" element={<Services />} />
				<Route path="/Login" element={<Login />} />

				{/* Rotas protegidas */}
				<Route element={<ProtectedRoute />}>
					<Route path="/Admin/*" element={<Admin />} />
				</Route>

				{/* Rota inexistente */}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</Suspense>
	)
}
