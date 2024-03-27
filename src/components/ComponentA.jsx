import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const ComponentA = () =>
	// { username, setUsername, setUserData }
	{
		const { username, setUsername, setUserData } = useContext(UserContext);

		const handleSubmit = () => {
			setUserData(username);
			setUsername("");
		};

		return (
			<div className="h-[200px] w-[300px] border border-black p-2">
				<h1>Component A</h1>
				<div className="flex flex-col gap-2">
					<input
						type="text"
						className="h-8 border px-2 border-black outline outline-black"
						placeholder="Enter your username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>

					<button
						className="mx-auto p-2 bg-slate-500 rounded"
						onClick={handleSubmit}
					>
						Submit
					</button>
				</div>
			</div>
		);
	};

export default ComponentA;
