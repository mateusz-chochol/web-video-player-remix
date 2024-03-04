import { Config } from "tailwindcss";

const config = {
	mode: "jit",
	darkMode: ["class"],
	content: ["./pages/**/*.{ts,tsx}", "./@/components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				spaceGrotesk: ["Space Grotesk", "sans-serif"],
				exo: ["Exo", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			height: {
				"40rem": "40rem",
			},
			maxWidth: {
				"40rem": "40rem",
			},
			colors: {
				playerControlsBackground: "hsla(0, 4%, 1%, 0.3)",
				playerControlsBorder: "hsla(0, 0%, 100%, 0.2)",
				progress: "hsla(75, 72%, 68%, 1)",
				progressBackground: "hsla(0, 0%, 15%, 1)",
				heroBadge: "hsla(0, 7%, 25%, 1)",
				discountCode: "hsla(227, 35%, 38%, 1)",
				headerBackground: "hsla(0, 0%, 85%, 1)",
				footerBackground: "hsla(0, 0%, 85%, 1)",
				activeNavButton: "hsla(58, 12%, 89%, 1)",
				inactiveNavButton: "hsla(0, 0%, 85%, 1)",
				buttonBorder: "hsla(0, 2%, 50%, 1)",
				darkGray: "hsla(0, 2%, 11%, 1)",
				lightGray: "hsla(0, 0%, 85%, 0.19)",
				link: "hsla(75, 3%, 25%, 1)",
				brandName: "hsla(0, 7%, 25%, 1)",
				footerStatement: "hsla(0, 3%, 36%, 1)",
				pageBackground: "hsla(0, 0%, 93%, 1)",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
