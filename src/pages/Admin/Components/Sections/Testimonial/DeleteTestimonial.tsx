import { getStoredTestimonials } from "../../../../../mock/handlers/testimonial"
import { StaticInput } from "../../UI/StaticInput"

export function DeleteTestimonial() {
	let testimonial = getStoredTestimonials()
	return (
		<>
			<h2 className="admin-section-title">
				Comentários
			</h2>
			<div className="admin-panel flex-row flex-wrap">
				{testimonial.map(item => (
					<StaticInput
						key={item.id}
						primaryField={{
							label: "Comentário",
							content: item.content || "",
						}}
						secondaryField={{
							label: "Autor",
							content: item.author || "",
						}}
					/>
				))}
			</div>
		</>
	)
}
