import { CreateSection } from "./Components/AdminSection/CreateCard"
import { HeroAdmin } from "./Components/Header/HeroAdmin"
import { NavBarAdmin } from "./Components/NavBar/NavBarAdmin"

export function AdminPage() {
	return (
		<>
			<NavBarAdmin />
			<HeroAdmin />
			<CreateSection />
		</>
	)
}
