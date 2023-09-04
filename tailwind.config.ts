import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--color-background)/<alpha-value>)",
                foreground: "rgb(var(--color-foreground)/<alpha-value>)",
                action: "rgb(var(--color-action)/<alpha-value>)",
                crimson: {
                    DEFAULT: "#EC1951",
                    50: "#FFFFFF",
                    100: "#FFFBFC",
                    200: "#FCD5E0",
                    300: "#F8B0C3",
                    400: "#F58AA7",
                    500: "#F2648A",
                    600: "#EF3F6E",
                    700: "#EC1951",
                    800: "#BD103E",
                    900: "#890B2D",
                    950: "#700924",
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms'),],
}
export default config
