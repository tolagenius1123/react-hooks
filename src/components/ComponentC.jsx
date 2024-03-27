import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ComponentC = () =>
	// { userData }
	{
		const { userData } = useContext(UserContext);

		return (
			<div className="mt-10 h-[100px] w-[200px] border border-black p-2">
				Component C
				<div className="flex items-center gap-2">
					<h3>Username:</h3>
					<p>{userData}</p>
				</div>
			</div>
		);
	};

export default ComponentC;
