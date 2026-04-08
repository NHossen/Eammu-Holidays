/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}", // ✅ IMPORTANT (add this)
  "./components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite-react/lib/esm/**/*.js",
];