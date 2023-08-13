import "./App.css";
import Counter from "./Components/Counter";
import Dashboard from "./Components/Dashboard";
import UserContextProvider from "./Contexts/UserContext";
import MainLayout from "./StyledComponents/Layouts/MainLayout";

function App() {

	return (
		<>
			<UserContextProvider>
				<MainLayout>
					<Counter />
					<Dashboard />
				</MainLayout>
			</UserContextProvider>
		</>
	);
}

export default App;
