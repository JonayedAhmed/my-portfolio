/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            colors: {
                navy: "#0a192f",
                "light-navy": "#112240",
                "lightest-navy": "#233554",
                slate: "#8892b0",
                "light-slate": "#a8b2d1",
                "lightest-slate": "#ccd6f6",
                accent: "#64ffda",
            },
        },
    },
    plugins: [],
};