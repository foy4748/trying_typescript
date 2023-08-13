import {useContext} from "react";
import {UserContext} from "../Contexts/UserContext";
import Button from "../StyledComponents/Button";

export default function Dashboard() {
	const context = useContext(UserContext);
	console.log(context?.isLoggedIn)

	return (
		<section>
			<p>{context?.isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
			<Button onClick={() => context?.setIsLoggedIn((curr) => !curr)}>Testing</Button>
		</section>
	)
}
