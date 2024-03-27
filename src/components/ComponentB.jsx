import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = () =>
	// { userData }
	{
		return (
			<div className="h-[300px] w-[300px] border border-black p-2">
				<h3>Component B</h3>
				<ComponentC
				// userData={userData}
				/>
			</div>
		);
	};

export default ComponentB;
