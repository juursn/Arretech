import { Circle } from "lucide-react"

interface NoticeTagProps {
	tag: string
}

export function NoticeTag({ tag }: NoticeTagProps) {
	return (
		<span className="flex items-center gap-2 px-3 py-1 text-white bg-gradient-blueBG dark:bg-darkTag w-fit rounded-xl">
			<Circle size={12} /> {tag}
		</span>
	)
}
