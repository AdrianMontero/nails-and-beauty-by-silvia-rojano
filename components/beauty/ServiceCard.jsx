import React from "react";
import { Button } from "../core/Button.jsx";

/**
 * ServiceCard — a single bookable service row, mirroring the Booksy layout:
 * name, optional description, duration + price, and a booking action.
 * Set `popular` for the gold "Popular" flag, `featured` for a photo header.
 */
export function ServiceCard({
  name,
  description,
  duration,
  price,
  popular = false,
  image,
  onBook,
  bookHref,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-card)",
        border: "1px solid var(--border-line)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)",
        ...style,
      }}
      {...rest}
    >
      {image && (
        <div style={{ position: "relative", height: "160px", overflow: "hidden" }}>
          <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "26px 28px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--fs-h4)",
              fontWeight: "var(--fw-semibold)",
              color: "var(--text-primary)",
              lineHeight: "var(--lh-snug)",
              margin: 0,
            }}
          >
            {name}
          </h3>
          {popular && (
            <span
              style={{
                flex: "0 0 auto",
                fontFamily: "var(--font-sans)",
                fontSize: "0.625rem",
                fontWeight: "var(--fw-medium)",
                letterSpacing: "var(--ls-caps)",
                textTransform: "uppercase",
                color: "var(--accent-text)",
                background: "color-mix(in srgb, var(--gold-300) 38%, white)",
                padding: "5px 12px",
                borderRadius: "var(--radius-pill)",
              }}
            >
              Popular
            </span>
          )}
        </div>
        {description && (
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--fs-sm)",
              fontWeight: "var(--fw-light)",
              lineHeight: "var(--lh-relaxed)",
              color: "var(--text-muted)",
              margin: 0,
            }}
          >
            {description}
          </p>
        )}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginTop: "4px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                fontWeight: "var(--fw-semibold)",
                color: "var(--accent-text)",
              }}
            >
              {price}
            </span>
            {duration && (
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-sm)", color: "var(--text-muted)" }}>
                · {duration}
              </span>
            )}
          </div>
          <Button variant="outline" size="sm" onClick={onBook} href={bookHref}>
            Reservar
          </Button>
        </div>
      </div>
    </article>
  );
}
