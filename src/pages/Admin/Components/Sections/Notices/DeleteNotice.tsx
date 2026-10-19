import { StaticInput } from "../../UI/StaticInput"

export function DeleteNotice() {
	return (
		<>
			<h2 className="admin-section-title">
				Notícias
			</h2>
			<div className="admin-panel">
				<StaticInput
					label="Comentário"
					value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi deleniti, laborum vero hic itaque consequuntur nesciunt sunt odit ipsam a amet ducimus esse totam doloremque recusandae, atque minus optio!"
				/>
			</div>
		</>
	)
}
