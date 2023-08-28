/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                domine: ['Domine', "sans-serif"],
                montserrat: ['Montserrat', 'sans-serif'],
                fahkwang: ['Fahkwang', 'sans-serif']
            },

            colors: {
                theme: {
                    primary: '#1F4168',
                    secondary: "#5681A3",
                    accent: "#ECF2FA"
                },
                button: {
                    primary: '#388DFF',
                    secondary: '#C0DBFF'
                },

            }
        },
    },
    plugins: [],
}
