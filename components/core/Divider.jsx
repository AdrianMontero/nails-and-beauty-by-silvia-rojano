import React from "react";

/**
 * Divider — the signature line–dot–line motif from the SR wordmark.
 * Use as a delicate separator between sections or under headings.
 */
export function Divider({ width = 120, tone = "rose", style, ...rest }) {
  const color = tone === "gold" ? "var(--accent)" : "var(--brand)";
  const line = { flex: 1, height: "1px", background: `linear-gradient(90deg, transparent, ${tone === "gold" ? "var(--gold-400)" : "var(--rose-400)"})` };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        width: typeof width === "number" ? `${width}px` : width,
        ...style,
      }}
      {...rest}
    >
      <span style={{ ...line, background: `linear-gradient(90deg, transparent, ${tone === "gold" ? "var(--gold-400)" : "var(--rose-300)"})` }} />
      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: color, flex: "0 0 auto" }} />
      <span style={{ ...line, background: `linear-gradient(90deg, ${tone === "gold" ? "var(--gold-400)" : "var(--rose-300)"}, transparent)` }} />
    </div>
  );
}
