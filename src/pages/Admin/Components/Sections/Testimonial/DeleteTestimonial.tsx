import { getStoredTestimonials } from "../../../../../mock/handlers/testimonial"
import { StaticInput } from "../../UI/StaticInput"

export function DeleteTestimonial() {
	let testimonial = getStoredTestimonials()
	return (
		<>
			<h2 className="admin-section-title">
				Comentários
			</h2>
			<div className="admin-panel">
				{testimonial.map(item => (
					<StaticInput key={item.id} label={item.author} value={item.content} />
				))}
			</div>
		</>
	)
}
