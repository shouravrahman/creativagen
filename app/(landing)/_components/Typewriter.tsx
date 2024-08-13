"use client";

import TypewriterComponent from "typewriter-effect";

const Typewriter = () => {
	return (
		<div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
			<TypewriterComponent
				options={{
					strings: ["Chatbot.", "Photo.", "Blog.", "Mail."],
					autoStart: true,
					loop: true,
				}}
			/>
		</div>
	);
};

export default Typewriter;
