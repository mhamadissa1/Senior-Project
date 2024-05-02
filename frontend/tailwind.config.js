/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1d4ed8",
          "primary-content": "#f8fafc",
          secondary: "#1F84E9",
          "secondary-content": "#f8fafc",
          accent: "#00ffff",
          "accent-content": "#001616",
          neutral: "#f8fafc",
          "neutral-content": "#1f2937",
          "base-100": "#f8fafc",
          "base-200": "#d8d9db",
          "base-300": "#C1D3E5",
          "base-content": "#1f2937",
          info: "#1d4ed8",
          "info-content": "#f8fafc",
          success: "#98ff98",
          "success-content": "#111827",
          warning: "#39ff14",
          "warning-content": "#111827",
          error: "#ef4444",
          "error-content": "#111827",
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      display: ["IBM Plex Sans", "sans-serif"], // Use sans-serif as the fallback
      body: ["Open Sans", "sans-serif"],
      mono: ["Courier Prime", "monospace"],
    },

    fontWeight: {
      // Open Sans
      regular: "400",
      semibold: "600",
      // IBM Plex Sans
      medium: "500",
    },

    fontSize: {
      10: "0.625rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
    },

    lineHeight: {
      tight: "1.25",
      normal: "1.5",
    },

    spacing: {
      0: "0rem",
      4: "0.3rem",
      8: "0.5rem",
      12: "0.75rem",
      16: "1rem",
      24: "1.5rem",
      32:"2rem",
      40:"2.5rem",
      48: "3rem",
      64:"4rem",
      96: "24rem",
      128: "8rem",
      192:"12rem"
      
    },

    width: {
      40:"10rem",
      96:"6rem"
    },

    borderRadius: {
      6: '0.375rem',
      8: '0.5rem',
      12: '0.75rem',
      'full': '9999px',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
