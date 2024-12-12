import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#60a5fa',
        'secondary': '#2563eb',
        'dark': '#075E54',
        'light': '#DCF8C6',
      },
    },
  },
  plugins: [],
});