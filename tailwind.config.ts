import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

/**
 * Tokyo Night (Enkia) → Tailwind theme
 * Strategy:
 * 1) Keep a small "palette" (raw colors).
 * 2) Expose "semantic tokens" (surface/text/border/primary/etc) that your UI uses.
 *    This way you can change palette later without touching component classnames.
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Raw palette (direct from the VS Code theme) ---
        tn: {
          // Background layers
          bg: "#1a1b26", // editor.background
          panel: "#16161e", // panels, sidebars, titlebar
          input: "#14141b", // input.background
          overlay: "#101014", // notifications, pickers, borders/overlays
          hover: "#13131a", // list.hoverBackground
          line: "#1e202e", // editor.lineHighlightBackground
          selection: "#515c7e4d", // editor.selectionBackground-ish
          selectionSoft: "#515c7e25", // editor.inactiveSelectionBackground-ish

          // Text
          fg: "#a9b1d6", // editor.foreground
          fgStrong: "#c0caf5", // brighter foreground (variables)
          fgMuted: "#787c99", // foreground
          fgDim: "#515670", // descriptionForeground
          comment: "#51597d", // comment

          // Borders / dividers
          border: "#101014",
          borderSoft: "#232433",
          borderActive: "#363b54",
          focus: "#545c7e33",

          // Accents (syntax-ish / UI highlights)
          primary: "#3d59a1", // button/progress/tab active border
          blue: "#7aa2f7",
          cyan: "#7dcfff",
          teal: "#73daca",
          sky: "#0db9d7",
          purple: "#bb9af7",
          magenta: "#ba3c97",
          green: "#9ece6a",
          orange: "#ff9e64",
          yellow: "#e0af68",
          red: "#f7768e",
          danger: "#db4b4b",
        },

        // --- Semantic tokens (what you should use in components) ---
        // These are the "primary / surface / muted / danger" style tokens you asked about.
        semantic: {
          // Surfaces
          base: "#1a1b26", // main app background
          surface: "#16161e", // cards/panels
          surface2: "#14141b", // inputs/secondary surfaces
          surface3: "#101014", // popovers/menus/overlays
          surfaceHover: "#13131a",

          // Text
          text: "#a9b1d6",
          textStrong: "#c0caf5",
          textMuted: "#787c99",
          textDim: "#515670",
          textComment: "#51597d",

          // UI chrome
          border: "#101014",
          borderSubtle: "#232433",
          borderActive: "#363b54",
          focusRing: "#545c7e33",

          // Brand / actions
          primary: "#3d59a1",
          primaryHover: "#3d59a1AA",
          primarySoft: "#3d59a144",

          // States / intents
          info: "#0da0ba",
          success: "#73daca",
          warning: "#e0af68",
          danger: "#db4b4b",

          // Selection / highlight
          selection: "#515c7e4d",
          selectionSoft: "#515c7e25",
          highlight: "#3d59a166",
        },
      },

      boxShadow: {
        // Similar vibe to VS Code "widget.shadow"/subtle shadows
        "tn-sm": "0 4px 14px rgba(0,0,0,0.35)",
        "tn-md": "0 10px 30px rgba(0,0,0,0.45)",
      },

      backgroundImage: {
        // Optional: tasteful gradients if you want them
        "tn-radial": "radial-gradient(1000px circle at top, rgba(61,89,161,0.25), transparent 60%)",
      },
    },
  },

  plugins: [
    // Optional: convenience utility for focus ring consistent with theme
    plugin(({ addUtilities }) => {
      addUtilities({
        ".focus-ring": {
          outline: "2px solid transparent",
          outlineOffset: "2px",
          boxShadow: "0 0 0 3px #545c7e33",
        },
      });
    }),
  ],
};

export default config;

