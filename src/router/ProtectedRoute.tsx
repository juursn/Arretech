import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { LoadingScreen } from "./LoadingScreen"

export function ProtectedRoute() {
	const { isAuthenticated, loading } = useAuth()

	if (loading) {
		return <LoadingScreen />
	}

	if (!isAuthenticated) {
		return <Navigate to="/Login" replace />
	}

	return <Outlet />
}
