import React from "react";

/**
 * Badge / Tag — compact label for categories, prices, and status.
 * Soft rose pill by default; gold for prices, muted for neutral tags.
 */
export function Badge({ children, tone = "rose", size = "md", style, ...rest }) {
  const tones = {
    rose:    { background: "var(--brand-soft)", color: "var(--rose-700)" },
    gold:    { background: "color-mix(in srgb, var(--gold-300) 40%, white)", color: "var(--accent-text)" },
    neutral: { background: "var(--bg-blush-deep)", color: "var(--text-body)" },
    solid:   { background: "var(--brand)", color: "var(--white)" },
    outline: { background: "transparent", color: "var(--rose-700)", boxShadow: "inset 0 0 0 1px var(--border-soft)" },
  };
  const sizes = {
    sm: { padding: "4px 10px", fontSize: "0.625rem" },
    md: { padding: "6px 14px", fontSize: "0.6875rem" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-medium)",
        textTransform: "uppercase",
        letterSpacing: "var(--ls-caps)",
        borderRadius: "var(--radius-pill)",
        lineHeight: 1,
        whiteSpace: "nowrap",
        ...sizes[size],
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
