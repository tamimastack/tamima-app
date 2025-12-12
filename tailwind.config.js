/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fff8f0',
                    100: '#fff0f6',
                    200: '#ffd7e1',
                    300: '#ffafbd',
                    400: '#ff8a9e',
                    500: '#ff6f61',
                    600: '#e35550',
                    700: '#ff3d3d',
                    800: '#d32f2f',
                    900: '#b71c1c',
                },
                background: '#fefefe',
                text: '#333333',
                accent: '#ffafbd',
            },
            fontFamily: {
                'cairo': ['Cairo', 'sans-serif'],
            },
            boxShadow: {
                'custom': '0 4px 8px rgba(255, 111, 97, 0.1)',
                'image': '0 2px 6px rgba(0, 0, 0, 0.1)',
            }
        },
    },
    plugins: [],
}