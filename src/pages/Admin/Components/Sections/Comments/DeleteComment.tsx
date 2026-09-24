import { StaticInput } from "../../ui/StaticInput"

export function DeleteComment() {
	return (
		<>
			<h2 className="text-2xl font-bold text-primary-blue dark:text-white">
				Comentários
			</h2>
			<div className="bg-card-offWhite dark:bg-card-black my-4 py-6 px-4 rounded-md shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] text-input-tx-L dark:text-input-tx-D flex flex-col gap-4">
				<StaticInput
					label="Comentário"
					value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi deleniti, laborum vero hic itaque consequuntur nesciunt sunt odit ipsam a amet ducimus esse totam doloremque recusandae, atque minus optio!"
				/>
			</div>
		</>
	)
}
