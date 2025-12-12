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
                    50: '#f9f7fe',
                    100: '#f2effd',
                    200: '#e6dffa',
                    300: '#d3c6f5',
                    400: '#b8a2ed',
                    500: '#9c7ee4',
                    600: '#8a6dcc', // اللون الأساسي البنفسجي المائل للرمادي
                    700: '#7359a9',
                    800: '#5f498a',
                    900: '#4e3c6f',
                },
                secondary: {
                    50: '#fff5f7',
                    100: '#ffeef2',
                    200: '#ffd9e3',
                    300: '#ffb8cb',
                    400: '#ff8aa8',
                    500: '#fa5a84', // لون وردي من الصورة
                    600: '#e84a74',
                    700: '#c93a61',
                    800: '#a62f50',
                    900: '#892a44',
                },
                background: '#fefefe',
                text: {
                    primary: '#333333',
                    secondary: '#666666',
                    light: '#888888',
                },
                accent: '#b8a2ed', // لون فاتح من البنفسجي
                success: '#10b981',
                warning: '#f59e0b',
                error: '#ef4444',
                info: '#3b82f6',
            },
            fontFamily: {
                'cairo': ['Cairo', 'sans-serif'],
                'sans': ['Cairo', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 4px 12px rgba(156, 126, 228, 0.08)',
                'medium': '0 6px 20px rgba(156, 126, 228, 0.12)',
                'hard': '0 8px 24px rgba(156, 126, 228, 0.16)',
                'custom': '0 4px 8px rgba(156, 126, 228, 0.1)',
                'image': '0 2px 6px rgba(0, 0, 0, 0.08)',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #9c7ee4 0%, #8a6dcc 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #ff8aa8 0%, #fa5a84 100%)',
                'gradient-light': 'linear-gradient(135deg, #f9f7fe 0%, #f2effd 100%)',
            }
        },
    },
    plugins: [],
}