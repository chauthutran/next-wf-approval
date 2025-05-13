'use client';

import { useState } from "react";

export default function LoginPage() {

	const [email, setEmail] = useState("test1@gmail.com");
	const [password, setPassword] = useState("1234");

	const handleLoginBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
        console.log("Not implement yet !");
	};

	return (
		<div className="max-w-md mx-auto p-8 flex flex-col">

			<h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
			<div className="mb-4">
				<label
					className="block text-xs font-medium text-gray-900"
					htmlFor="email"
				>
					Email
				</label>
				<div className="relative">
					<input
						className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 "
						id="email"
						type="email"
						name="email"
						value={email}
						placeholder="Enter your email"
						required
						onChange={(e) => { setEmail(e.target.value) }}
					/>
				</div>
			</div>
			<div className="mb-4">
				<label
					className="block text-xs font-medium text-gray-900"
					htmlFor="password"
				>
					Password
				</label>
				<div className="relative">
					<input
						className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
						id="password"
						type="password"
						name="password"
						placeholder="Enter password"
						value={password}
						required
						minLength={4}
						onChange={(e) => { setPassword(e.target.value) }}
					/>
				</div>
			</div>

			<div className="mb-4">
				<button className="flex w-full flex-row bg-gold px-4 py-2 rounded hover:bg-yellow-300" onClick={(e) => handleLoginBtn(e)} >
					<span className="flex-1">Log in</span>
 				</button>
			</div>

		</div>
	);
}