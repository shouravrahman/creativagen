"use server";

import prismadb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "@/constants";
import { currentUser } from "./auth.ts";

export const incrementApiLimit = async () => {
	const user = await currentUser();
	console.log(user);

	if (!user) {
		return;
	}

	const userApiLimit = await prismadb.userApiLimit.findUnique({
		where: { userId: user.id },
	});

	if (userApiLimit) {
		await prismadb.userApiLimit.update({
			where: { userId: user.id },
			data: { count: userApiLimit.count + 1 },
		});
	} else {
		if (user.id) {
			await prismadb.userApiLimit.create({
				data: { userId: user.id, count: 1 },
			});
		} else {
			throw new Error("User ID is undefined");
		}
	}
};

export const checkApiLimit = async () => {
	const user = await currentUser();
	console.log(user);

	if (!user) {
		return false;
	}

	const userApiLimit = await prismadb.userApiLimit.findUnique({
		where: { userId: user.id },
	});

	if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
		return true;
	} else {
		return false;
	}
};

export const getApiLimitCount = async () => {
	const user = await currentUser();
	if (!user) {
		return 0;
	}

	const userApiLimit = await prismadb.userApiLimit.findUnique({
		where: {
			userId: user.id,
		},
	});

	if (!userApiLimit) {
		return 0;
	}

	return userApiLimit.count;
};
