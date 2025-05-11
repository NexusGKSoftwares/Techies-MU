
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Techies MU custom colors - updated with more pink tones
				techies: {
					purple: "#9b87f5",
					"light-purple": "#D6BCFA",
					"dark-purple": "#7E69AB",
					pink: "#D946EF",
					"light-pink": "#F5A9D3", // New light pink
					"hot-pink": "#FF1493", // New vibrant pink
					blue: "#1EAEDB",
					"sky-blue": "#33C3F0",
					"neon-pink": "#FF6EC7", // New neon pink
					"magenta": "#FF00FF", // New magenta
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s infinite'
			},
			backgroundImage: {
				'hero-pattern': 'linear-gradient(135deg, rgba(27, 20, 41, 0.9) 0%, rgba(20, 15, 35, 0.8) 100%)',
				'gradient-neon': 'linear-gradient(90deg, rgba(155, 135, 245, 0.7) 0%, rgba(217, 70, 239, 0.7) 50%, rgba(30, 174, 219, 0.7) 100%)',
				'pink-gradient': 'linear-gradient(90deg, rgba(217, 70, 239, 0.8) 0%, rgba(255, 110, 199, 0.8) 100%)', // New pink gradient
				'pink-blue-gradient': 'linear-gradient(135deg, rgba(217, 70, 239, 0.7) 0%, rgba(155, 135, 245, 0.7) 50%, rgba(30, 174, 219, 0.7) 100%)', // New pink-blue gradient
			},
			fontFamily: {
				'techies': ['Orbitron', 'sans-serif'],
				'sans': ['Inter', 'sans-serif']
			},
			boxShadow: {
				'neon': '0 0 10px rgba(155, 135, 245, 0.5), 0 0 20px rgba(217, 70, 239, 0.3)',
				'neon-hover': '0 0 15px rgba(155, 135, 245, 0.7), 0 0 30px rgba(217, 70, 239, 0.5)',
				'pink-glow': '0 0 15px rgba(217, 70, 239, 0.6), 0 0 30px rgba(255, 110, 199, 0.4)', // New pink glow shadow
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
