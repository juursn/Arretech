import { useEffect, useRef, useState, type InputHTMLAttributes } from "react"
import { FaUpload } from "react-icons/fa6"

interface FileInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "defaultValue"> {
	id: string
	imageUrl?: string
	onImageChange: (imageUrl: string) => void
}

export function FileInput({ id, onChange, imageUrl = "", onImageChange, required, ...props }: FileInputProps) {
	const [fileName, setFileName] = useState("")
	const [error, setError] = useState("")
	const inputRef = useRef<HTMLInputElement>(null)
	const readerRef = useRef<FileReader | null>(null)
	const readId = useRef(0)

	useEffect(() => () => {
		readId.current++
		readerRef.current?.abort()
	}, [])
	useEffect(() => {
		if (!imageUrl && inputRef.current) {
			inputRef.current.value = ""
			setFileName("")
		}
	}, [imageUrl])

	const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentRead = ++readId.current
		readerRef.current?.abort()
		const input = e.currentTarget
		const file = e.target.files?.[0]
		setError("")
		input.setCustomValidity("")
		if (!file) {
			setFileName("")
			onImageChange("")
			onChange?.(e)
			return
		}
		if (!["image/jpeg", "image/png", "image/webp", "image/gif"].includes(file.type) || file.size === 0 || file.size > 2 * 1024 * 1024) {
			const message = "Selecione uma imagem PNG, JPEG, WebP ou GIF de até 2 MB."
			input.setCustomValidity(message)
			setError(message)
			return
		}
		const reader = new FileReader()
		readerRef.current = reader
		input.setCustomValidity("Aguarde a leitura da imagem.")
		reader.onload = () => {
			if (currentRead !== readId.current) return
			const image = new Image()
			image.onload = () => {
				if (currentRead !== readId.current) return
				try {
					if (!image.naturalWidth || !image.naturalHeight || image.naturalWidth * image.naturalHeight > 20_000_000) throw new Error()
					const canvas = document.createElement("canvas")
					canvas.width = image.naturalWidth
					canvas.height = image.naturalHeight
					const context = canvas.getContext("2d")
					if (!context) throw new Error()
					context.drawImage(image, 0, 0)
					// Uma nova imagem descarta os metadados do arquivo original (como EXIF/GPS).
					const cleanImage = canvas.toDataURL("image/webp", 0.9)
					if (cleanImage.length > 3 * 1024 * 1024) throw new Error()
					input.setCustomValidity("")
					input.value = ""
					setFileName(file.name)
					onImageChange(cleanImage)
				} catch {
					const message = "Não foi possível preparar a imagem. Selecione um arquivo menor e válido."
					input.setCustomValidity(message)
					setError(message)
				}
			}
			image.onerror = () => {
				if (currentRead !== readId.current) return
				const message = "O arquivo selecionado não é uma imagem válida."
				input.setCustomValidity(message)
				setError(message)
			}
			image.src = String(reader.result)
		}
		reader.onerror = () => {
			if (currentRead !== readId.current) return
			const message = "Não foi possível ler a imagem. Selecione o arquivo novamente."
			input.setCustomValidity(message)
			setError(message)
		}
		reader.readAsDataURL(file)
		onChange?.(e)
	}

	return (
		<>
		<label
			htmlFor={id}
			className="bg-input-light dark:bg-card-black/50 w-full rounded-lg p-2.5 flex items-center justify-between text-input-tx-L dark:text-input-tx-D text-sm cursor-pointer hover:opacity-90 transition-all gap-3"
		>
			<div className="flex items-center gap-3 overflow-hidden">
				{/* Mostra a imagem enviada OU o ícone padrão */}
				{imageUrl ? (
					<img
						src={imageUrl}
						alt="Preview"
						className="w-7 h-7 object-cover rounded"
					/>
				) : (
					<FaUpload className="text-primary-blue text-lg shrink-0" />
				)}

				{/* Mostra o nome do arquivo OU o texto padrão */}
				<span className="truncate text-gray-400">
					{fileName || (imageUrl ? "Imagem selecionada" : "Selecionar imagem...")}
				</span>
			</div>

			<input
				ref={inputRef}
				type="file"
				id={id}
				accept="image/png,image/jpeg,image/webp,image/gif"
				onChange={handleFile}
				className="absolute w-px h-px opacity-0"
				required={required && !imageUrl}
				{...props}
			/>
		</label>
		{error && <p role="alert">{error}</p>}
		</>
	)
}
