import {createContext, useState} from "react"

type User = {
	email: string;
	username: string;
}

type UserContextProps = {
	isAuthenticated: () => boolean;
	signInWithEmailPassword: (email: string, password: string) => User;
	isLoggedIn: boolean;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextProps | null>(null);

export {UserContext}

type UserContextProviderProps = {
	children: React.ReactNode
}

export default function UserContextProvider({children}: UserContextProviderProps) {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const isAuthenticated = () => {
		return true;
	}

	const signInWithEmailPassword = (email: string, password: string) => {
		console.log(password)
		const username = 'foy4748';
		return {email, username}
	}
	const payload = {
		isAuthenticated,
		signInWithEmailPassword,
		isLoggedIn,
		setIsLoggedIn
	}

	return (
		<UserContext.Provider value={payload}>
			{children}
		</UserContext.Provider>
	)
}
