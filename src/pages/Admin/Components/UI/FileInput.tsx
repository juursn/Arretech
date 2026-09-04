import { useState, type InputHTMLAttributes } from "react"
import { FaUpload } from "react-icons/fa6"

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string
}

export function FileInput({ id, onChange, ...props }: FileInputProps) {
	const [fileName, setFileName] = useState("")
	const [preview, setPreview] = useState<string | null>(null)

	const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]

		if (file) {
			setFileName(file.name)
			setPreview(URL.createObjectURL(file))
		}
	}

	return (
		<label
			htmlFor={id}
			className="bg-input-light dark:bg-card-black/50 w-full rounded-lg p-2.5 flex items-center justify-between text-input-tx-L dark:text-input-tx-D text-sm cursor-pointer hover:opacity-90 transition-all gap-3"
		>
			<div className="flex items-center gap-3 overflow-hidden">
				{/* Mostra a imagem enviada OU o ícone padrão */}
				{preview ? (
					<img
						src={preview}
						alt="Preview"
						className="w-7 h-7 object-cover rounded"
					/>
				) : (
					<FaUpload className="text-primary-blue text-lg shrink-0" />
				)}

				{/* Mostra o nome do arquivo OU o texto padrão */}
				<span className="truncate text-gray-400">
					{fileName || "Selecionar imagem..."}
				</span>
			</div>

			<input
				type="file"
				id={id}
				accept="image/*"
				onChange={handleFile}
				className="hidden"
				{...props}
			/>
		</label>
	)
}
