import React from "react";

/**
 * Select — styled dropdown matching Input. Used for service pickers,
 * staff selection, and time slots in the booking flow.
 */
export function Select({ label, id, options = [], placeholder, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const selId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", ...style }}>
      {label && (
        <label
          htmlFor={selId}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-label)",
            fontWeight: "var(--fw-medium)",
            letterSpacing: "var(--ls-caps)",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <select
          id={selId}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            appearance: "none",
            WebkitAppearance: "none",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-body)",
            color: "var(--text-primary)",
            padding: "15px 44px 15px 18px",
            background: "var(--surface-card)",
            border: `1px solid ${focused ? "var(--brand)" : "var(--border-soft)"}`,
            borderRadius: "var(--radius-md)",
            outline: "none",
            boxShadow: focused ? "0 0 0 4px var(--focus-ring)" : "none",
            transition: "border var(--dur-fast), box-shadow var(--dur-fast)",
            cursor: "pointer",
            boxSizing: "border-box",
          }}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => {
            const value = typeof o === "string" ? o : o.value;
            const text = typeof o === "string" ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
        </select>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "18px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "var(--rose-500)",
            fontSize: "0.7rem",
          }}
        >
          ▾
        </span>
      </div>
    </div>
  );
}
