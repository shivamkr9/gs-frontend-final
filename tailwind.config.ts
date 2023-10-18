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
            },
        },
    },
    plugins: [require('@tailwindcss/forms'),],
}
export default config
