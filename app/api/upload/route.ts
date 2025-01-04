import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export async function POST(req: Request) {
	try {
		const { file, upload_preset } = await req.json();

		const result = await cloudinary.uploader.upload(file, {
			upload_preset,
			resource_type: "auto",
		});

		return NextResponse.json({
			url: result.secure_url,
			public_id: result.public_id,
		});
	} catch (error) {
		console.error("Upload error:", error);
		return NextResponse.json(
			{ error: "Failed to upload file" },
			{ status: 500 }
		);
	}
}
