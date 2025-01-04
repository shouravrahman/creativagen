"use server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true,
});

export const uploadToCloudinary = async (file: File) => {
	try {
		// Convert file to base64
		const base64data = await new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});

		// Upload to Cloudinary
		const result = await fetch("/api/upload", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				file: base64data,
				upload_preset: "social_posts", // Create this in your Cloudinary dashboard
			}),
		}).then((r) => r.json());

		return result.url;
	} catch (error) {
		console.error("Upload error:", error);
		throw new Error("Failed to upload file");
	}
};
