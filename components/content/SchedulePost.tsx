import React, { useState } from "react";

const SchedulePost = ({
	onSchedule,
}: {
	onSchedule: (content: string, scheduledTime: Date) => void;
}) => {
	const [scheduledTime, setScheduledTime] = useState<Date | null>(null);
	const [content, setContent] = useState<string>("");

	const handleSchedule = () => {
		if (scheduledTime && content) {
			onSchedule(content, scheduledTime);
		}
	};

	return (
		<div>
			<input
				type="datetime-local"
				onChange={(e) => setScheduledTime(new Date(e.target.value))}
			/>
			<textarea
				value={content}
				onChange={(e) => setContent(e.target.value)}
				placeholder="Enter your content here..."
			/>
			<button onClick={handleSchedule}>Schedule Post</button>
		</div>
	);
};

export default SchedulePost;
