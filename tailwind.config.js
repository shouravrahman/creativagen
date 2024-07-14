/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			
			colors: {
				border: "hsl(var(--border))", // Borders for all components
				input: "hsl(var(--input))", // Background for input fields
				ring: "hsl(var(--ring))", // Focus ring color for interactive elements
				background: "hsl(var(--background))", // General background color
				foreground: "hsl(var(--foreground))", // General text color
				primary: {
					 DEFAULT: "hsl(var(--primary))", // Primary buttons and links
					 foreground: "hsl(var(--primary-foreground))", // Text on primary buttons and links
				},
				secondary: {
					 DEFAULT: "hsl(var(--secondary))", // Secondary buttons and links
					 foreground: "hsl(var(--secondary-foreground))", // Text on secondary buttons and links
				},
				accent: {
					 DEFAULT: "hsl(var(--accent))", // Accent elements like badges or highlights
					 foreground: "hsl(var(--accent-foreground))", // Text on accent elements
				},
				destructive: {
					 DEFAULT: "hsl(var(--destructive))", // Destructive actions like delete buttons
					 foreground: "hsl(var(--destructive-foreground))", // Text on destructive elements
				},
				muted: {
					 DEFAULT: "hsl(var(--muted))", // Muted background elements
					 foreground: "hsl(var(--muted-foreground))", // Text on muted background elements
				},
				card: {
					 DEFAULT: "hsl(var(--card))", // Background for card components
					 foreground: "hsl(var(--card-foreground))", // Text on card components
				},
				sidebar: {
					 DEFAULT: "hsl(var(--sidebar-background))", // Sidebar background
					 text: "hsl(var(--sidebar-text))", // Sidebar text
				},
				dashboard: {
					 DEFAULT: "hsl(var(--dashboard-background))", // Dashboard background
					 text: "hsl(var(--dashboard-text))", // Dashboard text
				},
				landingpage: {
					 DEFAULT: "hsl(var(--landingpage-background))", // Landing page background
					 text: "hsl(var(--landingpage-text))", // Landing page text
				},
				popover: {
					 DEFAULT: "hsl(var(--popover))", // Popovers and tooltips background
					 foreground: "hsl(var(--popover-foreground))", // Text on popovers and tooltips
				},
		  },
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};
