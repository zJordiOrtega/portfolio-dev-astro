/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
        		mocha: {
          			// Background colors
          			base: '#1E1E2E',   // Main background
          			mantle: '#181825', // Secondary background
          			crust: '#11111B',  // Border or very dark background

          			// Accent colors
          			text: '#CDD6F4',        // Primary text
          			subtle: '#BAC2DE',      // Subtle or secondary text
          			rosewater: '#F5E0DC',   // Special buttons or highlights
          			flamingo: '#F2CDCD',    // Emphasis points
          			pink: '#F5C2E7',        // Creative details
          			mauve: '#CBA6F7',       // Soft alternative color
          			red: '#F38BA8',         // Red for warnings or errors
          			maroon: '#EBA0AC',      // Alerts or error messages
          			peach: '#FAB387',       // Warnings or cautions
          			yellow: '#F9E2AF',      // Notifications or information
          			green: '#A6E3A1',       // Success or confirmation
          			teal: '#94E2D5',        // Teal accent
          			blue: '#89B4FA',        // Links or highlights
          			sapphire: '#74C7EC',    // Deep blue for emphasis
          			sky: '#89DCEB',         // Light blue or sky color
          			lavender: '#B4BEFE',    // Soft background or subtle highlights
        		},
      		},
		},
	},
	plugins: [],
}
