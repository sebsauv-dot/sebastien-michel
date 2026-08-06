export const theme = {
  colors: {
    background: "#020617",
    surface: "#0F172A",
    surfaceHover: "#172554",

    primary: "#2563EB",
    primaryLight: "#3B82F6",
    secondary: "#06B6D4",

    text: "#F8FAFC",
    muted: "#94A3B8",

    border: "rgba(255,255,255,.08)",
    borderStrong: "rgba(59,130,246,.35)",

    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",
  },

  radius: {
    sm: "12px",
    md: "20px",
    lg: "28px",
    xl: "36px",
  },

  shadow: {
    card: "0 30px 80px rgba(0,0,0,.35)",
    blue: "0 20px 60px rgba(37,99,235,.35)",
    glow: "0 0 60px rgba(37,99,235,.45)",
  },

  spacing: {
    section: "9rem",
    container: "80rem",
  },
} as const;