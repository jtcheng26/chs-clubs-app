module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    0: '#fca5a5',
                    50: '#ef4444',
                    100: '#991b1b',
                },
            },
        },
        fontFamily: {
            sans: ['Inter'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
