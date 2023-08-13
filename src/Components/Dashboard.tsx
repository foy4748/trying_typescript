import {useContext} from "react";
import {UserContext} from "../Contexts/UserContext";
import Button from "../StyledComponents/Button";

export default function Dashboard() {
	const {isLoggedIn, setIsLoggedIn} = useContext(UserContext);
	console.log(isLoggedIn)

	return (
		<section>
			<p>{isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
			<Button onClick={() => setIsLoggedIn((curr) => !curr)}>Testing</Button>
		</section>
	)
}
