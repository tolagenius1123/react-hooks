import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import UserContextProvider from "./context/UserContext";

function App() {
	// const [username, setUsername] = useState("");
	// const [userData, setUserData] = useState("");

	return (
		<UserContextProvider>
			<main className="h-screen w-full flex flex-col items-center gap-3 p-4">
				<ComponentA
				// username={username}
				// setUsername={setUsername}
				// setUserData={setUserData}
				/>
				<ComponentB
				// userData={userData}
				/>
			</main>
		</UserContextProvider>
	);
}

export default App;
