import { getStoredTestimonials } from "../../../../../mock/handlers/testimonial"
import { StaticInput } from "../../ui/StaticInput"

export function DeleteTestimonial() {
	let testimonial = getStoredTestimonials()
	return (
		<>
			<h2 className="text-2xl font-bold text-primary-blue dark:text-white">
				Comentários
			</h2>
			<div className="bg-card-offWhite dark:bg-card-black my-4 py-6 px-4 rounded-md shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] text-input-tx-L dark:text-input-tx-D flex flex-col gap-4">
				{testimonial.map(item => (
					<StaticInput label={item.author} value={item.content} />
				))}
			</div>
		</>
	)
}
