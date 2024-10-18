/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: [
			"googleusercontent.com",
			"oaidalleapiprodscus.blob.core.windows.net",
			"cdn.openai.com",
		],
	},
};

module.exports = nextConfig
