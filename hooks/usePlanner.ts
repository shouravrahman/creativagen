// Assuming you're using a proper TypeScript setup

import React, {
	createContext,
	useContext,
	useReducer,
	ReactNode,
	useEffect,
} from "react";
import { isToday, parseISO } from "date-fns";
import { DaySchedule, Platform, SocialPost } from "@/types";
import { usePosts } from "./usePost";

// Define the state interface
interface PlannerState {
	schedules: DaySchedule[];
	filter: {
		platform?: Platform;
		showToday: boolean;
	};
}

// Define the action types
type PlannerAction =
	| { type: "SET_SCHEDULES"; schedules: DaySchedule[] }
	| { type: "ADD_POST"; post: SocialPost }
	| { type: "UPDATE_POST"; post: SocialPost }
	| {
			type: "MOVE_POST";
			source: string;
			destination: string;
			sourceIndex: number;
			destinationIndex: number;
	  }
	| { type: "SET_FILTER"; filter: Partial<PlannerState["filter"]> };

// PlannerContext definition
const PlannerContext = createContext<{
	state: PlannerState;
	dispatch: React.Dispatch<PlannerAction>;
} | null>(null);

// Reducer function for updating the state
function plannerReducer(
	state: PlannerState,
	action: PlannerAction
): PlannerState {
	switch (action.type) {
		case "SET_SCHEDULES":
			return { ...state, schedules: action.schedules };
		case "ADD_POST": {
			const existingSchedule = state.schedules.find(
				(s) => s.date === action.post.scheduledDate
			);
			if (existingSchedule) {
				return {
					...state,
					schedules: state.schedules.map((schedule) =>
						schedule.date === action.post.scheduledDate
							? {
									...schedule,
									posts: [...schedule.posts, action.post],
							  }
							: schedule
					),
				};
			}
			return {
				...state,
				schedules: [
					...state.schedules,
					{ date: action.post.scheduledDate, posts: [action.post] },
				],
			};
		}
		case "UPDATE_POST": {
			return {
				...state,
				schedules: state.schedules
					.map((schedule) => ({
						...schedule,
						posts: schedule.posts.map((post) =>
							post.id === action.post.id ? action.post : post
						),
					}))
					.filter((schedule) => schedule.posts.length > 0),
			};
		}
		case "MOVE_POST": {
			const newSchedules = [...state.schedules];
			const sourceSchedule = newSchedules.find(
				(s) => s.date === action.source
			);
			const destSchedule = newSchedules.find(
				(s) => s.date === action.destination
			);

			if (!sourceSchedule) return state;

			const [movedPost] = sourceSchedule.posts.splice(
				action.sourceIndex,
				1
			);
			movedPost.scheduledDate = action.destination;

			if (!destSchedule) {
				newSchedules.push({
					date: action.destination,
					posts: [movedPost],
				});
			} else {
				destSchedule.posts.splice(
					action.destinationIndex,
					0,
					movedPost
				);
			}

			return {
				...state,
				schedules: newSchedules.filter((s) => s.posts.length > 0),
			};
		}
		case "SET_FILTER": {
			return { ...state, filter: { ...state.filter, ...action.filter } };
		}
		default:
			return state;
	}
}

// PlannerProvider component to provide context to the app
export function PlannerProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(plannerReducer, {
		schedules: [],
		filter: { showToday: false },
	});

	const { posts, loading, error, createPost, updatePost } = usePosts();

	useEffect(() => {
		if (posts.length > 0) {
			// Group posts by date
			const schedules: DaySchedule[] = posts.reduce(
				(acc: DaySchedule[], post) => {
					const date = post.scheduledDate.split("T")[0]; // Get date without time
					const existingSchedule = acc.find((s) => s.date === date);

					if (existingSchedule) {
						existingSchedule.posts.push(post);
					} else {
						acc.push({ date, posts: [post] });
					}

					return acc;
				},
				[]
			);

			dispatch({ type: "SET_SCHEDULES", schedules });
		}
	}, [posts]);

	// Context value to be passed down
	const value = {
		state,
		dispatch,
		loading,
		error,
		createPost,
		updatePost,
	};

	return (
		<PlannerContext.Provider value={value}>
			{children}
		</PlannerContext.Provider>
	);
}

// Custom hook for using the planner context
export function usePlanner() {
	const context = useContext(PlannerContext);
	if (!context) {
		throw new Error("usePlanner must be used within a PlannerProvider");
	}

	const { state, dispatch, loading, error, createPost, updatePost } = context;

	// Filter schedules based on the current filter
	const filteredSchedules = state.schedules.filter((schedule) => {
		if (state.filter.showToday && !isToday(parseISO(schedule.date))) {
			return false;
		}
		if (state.filter.platform) {
			return schedule.posts.some(
				(post) => post.platform === state.filter.platform
			);
		}
		return true;
	});

	return {
		schedules: filteredSchedules,
		loading,
		error,
		filter: state.filter,
		setFilter: (filter: Partial<PlannerState["filter"]>) =>
			dispatch({ type: "SET_FILTER", filter }),
		addPost: async (post: Omit<SocialPost, "id">) => {
			const newPost = await createPost(post);
			dispatch({ type: "ADD_POST", post: newPost });
			return newPost;
		},
		updatePost: async (post: SocialPost) => {
			const updatedPost = await updatePost(post);
			dispatch({ type: "UPDATE_POST", post: updatedPost });
			return updatedPost;
		},
		movePost: (
			source: string,
			destination: string,
			sourceIndex: number,
			destinationIndex: number
		) =>
			dispatch({
				type: "MOVE_POST",
				source,
				destination,
				sourceIndex,
				destinationIndex,
			}),
	};
}
