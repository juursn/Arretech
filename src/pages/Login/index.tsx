import { useState, type SyntheticEvent } from "react"
import { InputAuth } from "./InputLogin"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { logoAzul } from "../../assets"

export function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const navigate = useNavigate()
	const { login } = useAuth()

	function handleSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
		e.preventDefault()
		setError("")

		try {
			login(email, password)
			navigate("/Admin", { replace: true })
			toast.success("Login efetuado com sucesso")
		} catch {
			setError("Usuário não encontrado. Email ou senha incorretos.")
			toast.error("Corrija suas credenciais")
		}
	}

	return (
		<div className="flex items-center justify-center h-dvh text-slate-100">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center justify-center w-full gap-2 px-4 py-6 rounded-md sm:w-5/11 h-4/6 bg-linear-to-tr from-primary-blue to-sky-500 ring-4 ring-blue-500/80"
			>
				<div className="flex justify-center w-full">
					<div className="p-6 rounded-full bg-slate-100 w-fit">
						<img src={logoAzul} alt="" className="w-9.5 h-9" />
					</div>
				</div>
				<h1 className="py-2 text-lg font-bold text-center uppercase">
					Arretech Admin
				</h1>
				<InputAuth
					type="email"
					name="email"
					placeholder="Digite seu email"
					value={email}
					onChange={setEmail}
				/>
				<InputAuth
					type="password"
					name="password"
					placeholder="Digite sua senha"
					value={password}
					onChange={setPassword}
				/>
				{error && <p className="text-sm text-red-600">{error}</p>}
				<button
					type="submit"
					className="w-2/3 px-6 py-2 my-2 font-bold bg-blue-500 rounded-lg cursor-pointer text-slate-100 hover:ring-2 hover:ring-white"
				>
					Entrar
				</button>
			</form>
		</div>
	)
}
