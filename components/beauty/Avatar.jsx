import React from "react";

/**
 * Avatar — circular client/staff portrait. Falls back to initials on a
 * soft rose ground when no image is provided.
 */
export function Avatar({ src, name = "", size = 48, ring = false, style, ...rest }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const common = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    flex: "0 0 auto",
    boxShadow: ring ? "0 0 0 3px var(--surface-card), 0 0 0 4px var(--rose-200)" : "none",
    ...style,
  };
  if (src) {
    return <img src={src} alt={name} style={{ ...common, objectFit: "cover" }} {...rest} />;
  }
  return (
    <div
      aria-label={name}
      style={{
        ...common,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--brand-soft)",
        color: "var(--rose-700)",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-semibold)",
        fontSize: `${Math.round(size * 0.36)}px`,
        letterSpacing: "0.02em",
      }}
      {...rest}
    >
      {initials}
    </div>
  );
}
