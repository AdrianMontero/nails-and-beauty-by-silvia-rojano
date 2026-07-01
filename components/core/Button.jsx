import React from "react";

/**
 * Button — the primary interactive control for Silvia Rojano Beauty & Nails.
 * Rose-filled primary for booking CTAs, gold for premium moments,
 * outline & ghost for secondary actions. Tracked-caps sans label.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  as = "button",
  href,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: "10px 20px", fontSize: "0.6875rem", letterSpacing: "0.18em" },
    md: { padding: "15px 32px", fontSize: "0.75rem", letterSpacing: "0.18em" },
    lg: { padding: "19px 44px", fontSize: "0.8125rem", letterSpacing: "0.2em" },
  };

  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "1px solid var(--brand)",
      boxShadow: "var(--shadow-sm)",
    },
    gold: {
      background: "var(--accent)",
      color: "#4A2E00",
      border: "1px solid var(--accent)",
      boxShadow: "var(--shadow-gold)",
    },
    outline: {
      background: "transparent",
      color: "var(--brand)",
      border: "1px solid var(--brand)",
      boxShadow: "none",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid transparent",
      boxShadow: "none",
    },
    dark: {
      background: "var(--surface-inverse)",
      color: "var(--white)",
      border: "1px solid var(--surface-inverse)",
      boxShadow: "var(--shadow-sm)",
    },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-medium)",
    textTransform: "uppercase",
    textDecoration: "none",
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: full ? "100%" : "auto",
    transition: "transform var(--dur-fast) var(--ease-soft), background var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), color var(--dur-base) var(--ease-soft)",
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const Tag = href ? "a" : as;
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      style={base}
      disabled={Tag === "button" ? disabled : undefined}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = "translateY(-2px)";
        if (variant === "primary") e.currentTarget.style.background = "var(--brand-hover)";
        if (variant === "outline") { e.currentTarget.style.background = "var(--brand)"; e.currentTarget.style.color = "var(--white)"; }
        if (variant === "ghost") e.currentTarget.style.background = "var(--bg-blush-deep)";
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = variants[variant].background;
        e.currentTarget.style.color = variants[variant].color;
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
