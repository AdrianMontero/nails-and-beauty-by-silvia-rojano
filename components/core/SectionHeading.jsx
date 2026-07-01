import React from "react";
import { Divider } from "./Divider.jsx";

/**
 * SectionHeading — eyebrow label + serif title + optional lead.
 * The core typographic unit for section intros across the site.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  divider = true,
  tone = "dark",
  style,
  ...rest
}) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "var(--white)" : "var(--text-primary)";
  const leadColor = tone === "light" ? "rgba(255,255,255,0.75)" : "var(--text-muted)";
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isCenter ? "center" : "flex-start",
        textAlign: align,
        gap: "16px",
        maxWidth: isCenter ? "620px" : "none",
        marginInline: isCenter ? "auto" : 0,
        ...style,
      }}
      {...rest}
    >
      {eyebrow && (
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-label)",
            fontWeight: "var(--fw-medium)",
            letterSpacing: "var(--ls-label)",
            textTransform: "uppercase",
            color: "var(--brand)",
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--fs-h2)",
          fontWeight: "var(--fw-medium)",
          lineHeight: "var(--lh-snug)",
          color: titleColor,
          margin: 0,
        }}
      >
        {title}
      </h2>
      {divider && <Divider width={110} style={{ marginBlock: "2px" }} />}
      {lead && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-lead)",
            fontWeight: "var(--fw-light)",
            lineHeight: "var(--lh-relaxed)",
            color: leadColor,
            margin: 0,
          }}
        >
          {lead}
        </p>
      )}
    </header>
  );
}
