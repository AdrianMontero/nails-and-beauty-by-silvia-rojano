import React from "react";

/**
 * Input — text field with a tracked-caps label. Rounded, soft border,
 * rose focus ring. Supports optional leading icon slot and error state.
 */
export function Input({
  label,
  id,
  type = "text",
  placeholder,
  error,
  hint,
  icon,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", ...style }}>
      {label && (
        <label
          htmlFor={inputId}
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
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {icon && (
          <span style={{ position: "absolute", left: "16px", display: "flex", color: "var(--rose-400)" }}>{icon}</span>
        )}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-body)",
            color: "var(--text-primary)",
            padding: icon ? "15px 18px 15px 46px" : "15px 18px",
            background: "var(--surface-card)",
            border: `1px solid ${error ? "var(--error)" : focused ? "var(--brand)" : "var(--border-soft)"}`,
            borderRadius: "var(--radius-md)",
            outline: "none",
            boxShadow: focused ? "0 0 0 4px var(--focus-ring)" : "none",
            transition: "border var(--dur-fast), box-shadow var(--dur-fast)",
            boxSizing: "border-box",
          }}
          {...rest}
        />
      </div>
      {(error || hint) && (
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-sm)",
            color: error ? "var(--error)" : "var(--text-muted)",
          }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
}
