import { FiPlus } from "react-icons/fi"

export function CreateSection() {
	return (
		<>
			<section className="px-4 py-6">
				<div className="flex justify-between gap-2 items-center">
					<h2 className="text-2xl font-bold">Comentários</h2>
					<button className="bg-gradient-blueBG rounded-xl gap-2 flex text-sm text-white items-center font-mediumn px-2 py-1 hover:shadow-[0px_0px_25px_-5px_#2f91ff] transition-all ease-linear duration-300 cursor-pointer">
						Confirmar <FiPlus />
					</button>
				</div>
				<div>
					<textarea name="" id="" placeholder="Digite o comentário"></textarea>
				</div>
			</section>
		</>
	)
}
