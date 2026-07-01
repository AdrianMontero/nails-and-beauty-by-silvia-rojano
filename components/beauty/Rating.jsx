import React from "react";

/**
 * Rating — gold star row for reviews (5.0 · 56 reseñas).
 * Supports half values and an optional count/label.
 */
export function Rating({ value = 5, max = 5, size = 18, count, showValue = false, style, ...rest }) {
  const Star = ({ fill }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{ display: "block" }}>
      <defs>
        <linearGradient id={`half-${size}`}>
          <stop offset="50%" stopColor="var(--gold-400)" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.9l-5.81 3.06 1.11-6.47-4.7-4.58 6.5-.95L12 2.5z"
        fill={fill === 1 ? "var(--gold-400)" : fill === 0.5 ? `url(#half-${size})` : "none"}
        stroke="var(--gold-400)"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", ...style }} {...rest}>
      <span style={{ display: "inline-flex", gap: "3px" }}>
        {Array.from({ length: max }).map((_, i) => {
          const fill = value >= i + 1 ? 1 : value >= i + 0.5 ? 0.5 : 0;
          return <Star key={i} fill={fill} />;
        })}
      </span>
      {showValue && (
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--fw-semibold)", color: "var(--accent-text)", fontSize: "var(--fs-sm)" }}>
          {value.toFixed(1)}
        </span>
      )}
      {count != null && (
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-sm)", color: "var(--text-muted)" }}>
          {count} reseñas
        </span>
      )}
    </div>
  );
}
