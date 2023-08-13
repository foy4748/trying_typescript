import {useContext, useEffect, useRef, useState} from "react";
import {UserContext} from "../Contexts/UserContext";
import Button from "../StyledComponents/Button";

export default function Dashboard() {
	const {isLoggedIn, setIsLoggedIn} = useContext(UserContext);
	const [timer, setTimer] = useState(0)

	// Added null! , if you are sure your DOM is always truthy
	const someRef = useRef<HTMLParagraphElement>(null!)
	const someTimer = useRef<number | null>(null);
	const stopTimer = () => {
		if (someTimer.current) window.clearInterval(someTimer.current);
	}

	useEffect(() => {
		window.setInterval(() => {
			setTimer(curr => curr + 1);
		}, 1000)
		return stopTimer;
	}, [])

	useEffect(() => {
		if (isLoggedIn) {
			someRef.current.style.backgroundColor = 'blue';
			someRef.current.style.color = '#fff';
		} else {

			someRef.current.style.backgroundColor = 'red';
			someRef.current.style.color = '#fff';
		}
	}, [isLoggedIn])

	return (
		<section>
			<h2>{timer}</h2>
			<p ref={someRef}>{isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
			<Button onClick={() => setIsLoggedIn((curr) => !curr)}>Testing</Button>
		</section>
	)
}
