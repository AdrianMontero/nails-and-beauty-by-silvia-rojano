import React from "react";

/**
 * Card — soft rounded surface. Base container for services, reviews,
 * and feature blocks. Optional hover lift and rose tint.
 */
export function Card({ children, tone = "white", hover = false, pad = "lg", style, ...rest }) {
  const tones = {
    white: { background: "var(--surface-card)", border: "1px solid var(--border-line)" },
    blush: { background: "var(--bg-blush)", border: "1px solid var(--border-soft)" },
    deep:  { background: "var(--bg-blush-deep)", border: "1px solid var(--border-soft)" },
    dark:  { background: "var(--surface-inverse)", border: "1px solid var(--surface-inverse)", color: "var(--white)" },
  };
  const pads = { sm: "20px", md: "28px", lg: "36px", xl: "48px" };
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
      style={{
        borderRadius: "var(--radius-lg)",
        padding: pads[pad],
        boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
