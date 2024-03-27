import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [username, setUsername] = useState("");
	const [userData, setUserData] = useState("");

	const userContextValue = { username, setUsername, userData, setUserData };

	return (
		<UserContext.Provider value={userContextValue}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
