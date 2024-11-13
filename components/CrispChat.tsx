"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
	useEffect(() => {
		Crisp.configure("8b3995b9-733a-4ef2-ad06-6f79b31302d1");
	}, []);

	return null;
};
