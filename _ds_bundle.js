/* @ds-bundle: {"format":3,"namespace":"SilviaRojanoBeautyNailsDesignSystem_99492d","components":[{"name":"Avatar","sourcePath":"components/beauty/Avatar.jsx"},{"name":"Rating","sourcePath":"components/beauty/Rating.jsx"},{"name":"ServiceCard","sourcePath":"components/beauty/ServiceCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/beauty/Avatar.jsx":"415269654fad","components/beauty/Rating.jsx":"bc78ea89e767","components/beauty/ServiceCard.jsx":"246ceb97a293","components/core/Badge.jsx":"c8c1b76745c0","components/core/Button.jsx":"b86edf42e5c8","components/core/Card.jsx":"75203557b618","components/core/Divider.jsx":"c90f86c4738a","components/core/SectionHeading.jsx":"f4b82b9dbb9d","components/forms/Input.jsx":"9558e1f44e14","components/forms/Select.jsx":"5f6e819bccae","ui_kits/website/App.jsx":"cbfcf8d4e237","ui_kits/website/data.js":"d7edafeb10c0","ui_kits/website/helpers.jsx":"3f3e3a1f5ef6","ui_kits/website/sections1.jsx":"347769311ced","ui_kits/website/sections2.jsx":"68504b5eaee5","ui_kits/website/sections3.jsx":"5883a1800eee"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SilviaRojanoBeautyNailsDesignSystem_99492d = window.SilviaRojanoBeautyNailsDesignSystem_99492d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/beauty/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular client/staff portrait. Falls back to initials on a
 * soft rose ground when no image is provided.
 */
function Avatar({
  src,
  name = "",
  size = 48,
  ring = false,
  style,
  ...rest
}) {
  const initials = name.split(" ").map(n => n[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const common = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    flex: "0 0 auto",
    boxShadow: ring ? "0 0 0 3px var(--surface-card), 0 0 0 4px var(--rose-200)" : "none",
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: name,
      style: {
        ...common,
        objectFit: "cover"
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-label": name,
    style: {
      ...common,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--brand-soft)",
      color: "var(--rose-700)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: `${Math.round(size * 0.36)}px`,
      letterSpacing: "0.02em"
    }
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/beauty/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/beauty/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Rating — gold star row for reviews (5.0 · 56 reseñas).
 * Supports half values and an optional count/label.
 */
function Rating({
  value = 5,
  max = 5,
  size = 18,
  count,
  showValue = false,
  style,
  ...rest
}) {
  const Star = ({
    fill
  }) => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `half-${size}`
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "var(--gold-400)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "transparent"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.9l-5.81 3.06 1.11-6.47-4.7-4.58 6.5-.95L12 2.5z",
    fill: fill === 1 ? "var(--gold-400)" : fill === 0.5 ? `url(#half-${size})` : "none",
    stroke: "var(--gold-400)",
    strokeWidth: "1.3",
    strokeLinejoin: "round"
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: "3px"
    }
  }, Array.from({
    length: max
  }).map((_, i) => {
    const fill = value >= i + 1 ? 1 : value >= i + 0.5 ? 0.5 : 0;
    return /*#__PURE__*/React.createElement(Star, {
      key: i,
      fill: fill
    });
  })), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--accent-text)",
      fontSize: "var(--fs-sm)"
    }
  }, value.toFixed(1)), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)"
    }
  }, count, " rese\xF1as"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/beauty/Rating.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge / Tag — compact label for categories, prices, and status.
 * Soft rose pill by default; gold for prices, muted for neutral tags.
 */
function Badge({
  children,
  tone = "rose",
  size = "md",
  style,
  ...rest
}) {
  const tones = {
    rose: {
      background: "var(--brand-soft)",
      color: "var(--rose-700)"
    },
    gold: {
      background: "color-mix(in srgb, var(--gold-300) 40%, white)",
      color: "var(--accent-text)"
    },
    neutral: {
      background: "var(--bg-blush-deep)",
      color: "var(--text-body)"
    },
    solid: {
      background: "var(--brand)",
      color: "var(--white)"
    },
    outline: {
      background: "transparent",
      color: "var(--rose-700)",
      boxShadow: "inset 0 0 0 1px var(--border-soft)"
    }
  };
  const sizes = {
    sm: {
      padding: "4px 10px",
      fontSize: "0.625rem"
    },
    md: {
      padding: "6px 14px",
      fontSize: "0.6875rem"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary interactive control for Silvia Rojano Beauty & Nails.
 * Rose-filled primary for booking CTAs, gold for premium moments,
 * outline & ghost for secondary actions. Tracked-caps sans label.
 */
function Button({
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
    sm: {
      padding: "10px 20px",
      fontSize: "0.6875rem",
      letterSpacing: "0.18em"
    },
    md: {
      padding: "15px 32px",
      fontSize: "0.75rem",
      letterSpacing: "0.18em"
    },
    lg: {
      padding: "19px 44px",
      fontSize: "0.8125rem",
      letterSpacing: "0.2em"
    }
  };
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "1px solid var(--brand)",
      boxShadow: "var(--shadow-sm)"
    },
    gold: {
      background: "var(--accent)",
      color: "#4A2E00",
      border: "1px solid var(--accent)",
      boxShadow: "var(--shadow-gold)"
    },
    outline: {
      background: "transparent",
      color: "var(--brand)",
      border: "1px solid var(--brand)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    dark: {
      background: "var(--surface-inverse)",
      color: "var(--white)",
      border: "1px solid var(--surface-inverse)",
      boxShadow: "var(--shadow-sm)"
    }
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
    ...style
  };
  const Tag = href ? "a" : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    style: base,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: e => {
      if (disabled) return;
      e.currentTarget.style.transform = "translateY(-2px)";
      if (variant === "primary") e.currentTarget.style.background = "var(--brand-hover)";
      if (variant === "outline") {
        e.currentTarget.style.background = "var(--brand)";
        e.currentTarget.style.color = "var(--white)";
      }
      if (variant === "ghost") e.currentTarget.style.background = "var(--bg-blush-deep)";
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.background = variants[variant].background;
      e.currentTarget.style.color = variants[variant].color;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/beauty/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ServiceCard — a single bookable service row, mirroring the Booksy layout:
 * name, optional description, duration + price, and a booking action.
 * Set `popular` for the gold "Popular" flag, `featured` for a photo header.
 */
function ServiceCard({
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
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      border: "1px solid var(--border-line)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: hovered ? "translateY(-3px)" : "translateY(0)",
      transition: "transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)",
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "160px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      padding: "26px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-primary)",
      lineHeight: "var(--lh-snug)",
      margin: 0
    }
  }, name), popular && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      fontFamily: "var(--font-sans)",
      fontSize: "0.625rem",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--accent-text)",
      background: "color-mix(in srgb, var(--gold-300) 38%, white)",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)"
    }
  }, "Popular")), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-light)",
      lineHeight: "var(--lh-relaxed)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      marginTop: "4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "1.5rem",
      fontWeight: "var(--fw-semibold)",
      color: "var(--accent-text)"
    }
  }, price), duration && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)"
    }
  }, "\xB7 ", duration)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "sm",
    onClick: onBook,
    href: bookHref
  }, "Reservar"))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/beauty/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — soft rounded surface. Base container for services, reviews,
 * and feature blocks. Optional hover lift and rose tint.
 */
function Card({
  children,
  tone = "white",
  hover = false,
  pad = "lg",
  style,
  ...rest
}) {
  const tones = {
    white: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-line)"
    },
    blush: {
      background: "var(--bg-blush)",
      border: "1px solid var(--border-soft)"
    },
    deep: {
      background: "var(--bg-blush-deep)",
      border: "1px solid var(--border-soft)"
    },
    dark: {
      background: "var(--surface-inverse)",
      border: "1px solid var(--surface-inverse)",
      color: "var(--white)"
    }
  };
  const pads = {
    sm: "20px",
    md: "28px",
    lg: "36px",
    xl: "48px"
  };
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setHovered(true),
    onMouseLeave: () => hover && setHovered(false),
    style: {
      borderRadius: "var(--radius-lg)",
      padding: pads[pad],
      boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: hovered ? "translateY(-4px)" : "translateY(0)",
      transition: "transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — the signature line–dot–line motif from the SR wordmark.
 * Use as a delicate separator between sections or under headings.
 */
function Divider({
  width = 120,
  tone = "rose",
  style,
  ...rest
}) {
  const color = tone === "gold" ? "var(--accent)" : "var(--brand)";
  const line = {
    flex: 1,
    height: "1px",
    background: `linear-gradient(90deg, transparent, ${tone === "gold" ? "var(--gold-400)" : "var(--rose-400)"})`
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      width: typeof width === "number" ? `${width}px` : width,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      ...line,
      background: `linear-gradient(90deg, transparent, ${tone === "gold" ? "var(--gold-400)" : "var(--rose-300)"})`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      background: color,
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...line,
      background: `linear-gradient(90deg, ${tone === "gold" ? "var(--gold-400)" : "var(--rose-300)"}, transparent)`
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeading — eyebrow label + serif title + optional lead.
 * The core typographic unit for section intros across the site.
 */
function SectionHeading({
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
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: isCenter ? "center" : "flex-start",
      textAlign: align,
      gap: "16px",
      maxWidth: isCenter ? "620px" : "none",
      marginInline: isCenter ? "auto" : 0,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--brand)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--fs-h2)",
      fontWeight: "var(--fw-medium)",
      lineHeight: "var(--lh-snug)",
      color: titleColor,
      margin: 0
    }
  }, title), divider && /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    width: 110,
    style: {
      marginBlock: "2px"
    }
  }), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-lead)",
      fontWeight: "var(--fw-light)",
      lineHeight: "var(--lh-relaxed)",
      color: leadColor,
      margin: 0
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with a tracked-caps label. Rounded, soft border,
 * rose focus ring. Supports optional leading icon slot and error state.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "16px",
      display: "flex",
      color: "var(--rose-400)"
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
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
      boxSizing: "border-box"
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      color: error ? "var(--error)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — styled dropdown matching Input. Used for service pickers,
 * staff selection, and time slots in the booking flow.
 */
function Select({
  label,
  id,
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const selId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
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
      boxSizing: "border-box"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "18px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--rose-500)",
      fontSize: "0.7rem"
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* App shell — composes the Silvia Rojano website + booking redirect modal. */
const {
  Button: SRButtonApp
} = window.SilviaRojanoBeautyNailsDesignSystem_99492d;
const DApp = window.SR_DATA;
function BookingModal({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(58,36,48,0.5)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      animation: "srFade 240ms ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-lg)",
      maxWidth: "420px",
      width: "100%",
      padding: "40px",
      textAlign: "center",
      position: "relative",
      animation: "srPop 300ms var(--ease-soft)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      position: "absolute",
      top: "18px",
      right: "18px",
      background: "var(--bg-blush-deep)",
      border: "none",
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      cursor: "pointer",
      color: "var(--ink-700)",
      fontSize: "16px"
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: "62px",
      height: "62px",
      borderRadius: "50%",
      background: "var(--brand-soft)",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 28,
    color: "var(--rose-600)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "1.8rem",
      fontWeight: 500,
      color: "var(--ink-900)",
      margin: "0 0 10px"
    }
  }, "Reserva en Booksy"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 300,
      fontSize: "15px",
      lineHeight: 1.65,
      color: "var(--ink-500)",
      margin: "0 0 26px"
    }
  }, "Te llevamos a la pasarela de Booksy para elegir fecha, hora y confirmar tu cita con disponibilidad en tiempo real."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(SRButtonApp, {
    variant: "primary",
    size: "lg",
    full: true,
    href: DApp.booksyUrl,
    target: "_blank",
    rel: "noopener"
  }, "Continuar en Booksy \u2192"), /*#__PURE__*/React.createElement(SRButtonApp, {
    variant: "ghost",
    size: "sm",
    full: true,
    onClick: onClose
  }, "Ahora no"))));
}
function App() {
  const [modal, setModal] = React.useState(false);
  const book = () => setModal(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    onBook: book
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onBook: book
  }), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Services, {
    onBook: book
  }), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(Gallery, null), /*#__PURE__*/React.createElement(Booking, {
    onBook: book
  })), /*#__PURE__*/React.createElement(Footer, {
    onBook: book
  }), /*#__PURE__*/React.createElement(BookingModal, {
    open: modal,
    onClose: () => setModal(false)
  }));
}
window.SRApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Shared data + assets for the Silvia Rojano website UI kit.
   Photos are hotlinked from the salon's public Booksy gallery — replace
   with owned high-res assets in production. Each <img> has an onError
   fallback to a blush gradient so the layout never breaks. */
(function () {
  const CDN = "https://d375139ucebi94.cloudfront.net/region2/es/113413";
  window.SR_DATA = {
    booksyUrl: "https://booksy.com/es-es/113413_nails-and-beauty-by-silvia-rojano_salon-de-unas_68787_portol",
    instagram: "https://www.instagram.com/nailsbysilviarojano",
    // ── Galería en vivo desde Instagram ──────────────────────────────
    // Pega aquí tu ID de feed de Behold.so (gratis, actualización automática).
    //   1. Entra en https://behold.so y conecta @nailsbysilviarojano
    //   2. Crea un feed y copia su ID (p. ej. "aBcD1234")
    //   3. Pégalo abajo. La galería se cargará sola y se actualizará al
    //      publicar o borrar fotos en Instagram. Vacío = usa las fotos de respaldo.
    instagramFeedId: "",
    instagramFeedUrl: function () {
      return this.instagramFeedId ? "https://feeds.behold.so/" + this.instagramFeedId : "";
    },
    // Posts concretos de Instagram para la galería (embed oficial, sin token).
    instagramPosts: ["https://www.instagram.com/p/DJ40MbYNci5/", "https://www.instagram.com/p/CvNHrnUtwuT/", "https://www.instagram.com/p/C9ijIl7Nwqk/", "https://www.instagram.com/p/CpqfKQ0j8_h/", "https://www.instagram.com/p/CYcatnXjsaA/"],
    address: "Carrer Gladiol, 07141, Marratxí",
    hero: CDN + "/biz_photo/cdb813ba5bfd45b1b0db9497e64d5b-nails-and-beauty-by-silvia-roj-biz-photo-f37566cf147d419c909fe013ad1fb1-booksy.jpeg",
    gallery: [CDN + "/inspiration/7b6d90c79aab40f091caeae316e3a9-nails-and-beauty-by-silvia-roj-inspiration-041eac82651048feacf8115e52e5b6-booksy.jpeg?size=640x0", CDN + "/inspiration/7037c0e0c09a49eb9b9e677494b20e-nails-and-beauty-by-silvia-roj-inspiration-fb713d485375444a9db386ffb2286b-booksy.jpeg?size=640x0", CDN + "/inspiration/9fba95d3b1cc4321aa96331c2e4015-nails-and-beauty-by-silvia-roj-inspiration-eec563e8bf3e47bab4d57a0ed7e3d1-booksy.jpeg?size=640x0", CDN + "/inspiration/9bfa8b86309244bb8319ad83dee904-nails-and-beauty-by-silvia-roj-inspiration-a531b9d4594b43059441f02ab968c2-booksy.jpeg?size=640x0", CDN + "/inspiration/b960f718ed2b40e9a5b95b3a31bae5-nails-and-beauty-by-silvia-roj-inspiration-e3ffc63e43224f4490d40391af256b-booksy.jpeg?size=640x0", CDN + "/inspiration/d50002a566274e4ba9a2b5998a257b-nails-and-beauty-by-silvia-roj-inspiration-95f71c0affcb4aa3ab0dce97a5803a-booksy.jpeg?size=640x0"],
    // Booksy service categories (real prices & durations)
    popular: [{
      name: "Mantenimiento uñas de gel color",
      desc: "Rebajado, relleno y color en gel. Acabado impecable de larga duración.",
      duration: "1h 30min",
      price: "40,00 €",
      popular: true
    }, {
      name: "Pedicura exprés con semipermanente",
      desc: "Cuidado completo de pies con esmaltado semipermanente color.",
      duration: "1h 30min",
      price: "48,00 €",
      popular: true
    }, {
      name: "Maderoterapia",
      desc: "Masaje corporal con útiles de madera para modelar y activar la circulación.",
      duration: "50min",
      price: "50,00 €",
      popular: true
    }],
    categories: [{
      id: "semi",
      label: "Esmaltado semipermanente",
      count: 6,
      items: [{
        name: "Semipermanente color",
        desc: "Incluye manicura rusa (cuidado de cutículas) y nivelación (refuerzo).",
        duration: "1h 30min",
        price: "35,00 €"
      }, {
        name: "Semipermanente francesa o varios colores",
        duration: "1h 30min",
        price: "40,00 €"
      }, {
        name: "Semipermanente baby boomer",
        duration: "1h 45min",
        price: "40,00 €"
      }, {
        name: "Eliminar semipermanente",
        duration: "1h",
        price: "25,00 €"
      }]
    }, {
      id: "gel",
      label: "Uñas de gel / Acrigel",
      count: 15,
      items: [{
        name: "Primera puesta sobre uña natural",
        duration: "1h 30min",
        price: "50,00 €"
      }, {
        name: "Mantenimiento uñas de gel francesa",
        duration: "1h 30min",
        price: "43,00 €"
      }, {
        name: "Primera puesta en extensión",
        desc: "Alargamiento con extensión y diseño personalizado.",
        duration: "2h",
        price: "70,00 €"
      }, {
        name: "Baby boomer",
        duration: "1h 45min",
        price: "45,00 €"
      }]
    }, {
      id: "pedi",
      label: "Pedicura",
      count: 9,
      items: [{
        name: "Pedicura profunda",
        duration: "1h",
        price: "40,00 €"
      }, {
        name: "Pedicura exprés con semipermanente francesa",
        duration: "1h 30min",
        price: "50,00 €"
      }, {
        name: "Pedicura con esmalte tradicional",
        duration: "1h 30min",
        price: "45,00 €"
      }]
    }, {
      id: "estetica",
      label: "Estética",
      count: 12,
      items: [{
        name: "Limpieza facial",
        desc: "Peeling ácido, mascarilla y extracción de impurezas con ultrasonido e hidratación.",
        duration: "1h",
        price: "50,00 €"
      }, {
        name: "Dermapen facial con ác. hialurónico",
        desc: "Estimula elastina y colágeno de forma natural; reduce manchas y arrugas.",
        duration: "1h",
        price: "70,00 €"
      }, {
        name: "Radiofrecuencia facial",
        desc: "Ondas electromagnéticas para un efecto antiedad visible e inmediato.",
        duration: "1h",
        price: "45,00 €"
      }, {
        name: "Lifting de pestañas",
        duration: "1h 30min",
        price: "50,00 €"
      }, {
        name: "Laminado de cejas",
        duration: "1h",
        price: "50,00 €"
      }]
    }, {
      id: "masajes",
      label: "Masajes",
      count: 2,
      items: [{
        name: "Masaje relajante corporal",
        duration: "1h 20min",
        price: "50,00 €"
      }, {
        name: "Maderoterapia",
        duration: "50min",
        price: "50,00 €"
      }]
    }],
    reviews: [{
      name: "Pilar",
      date: "mar. 2026",
      service: "Mantenimiento uñas de gel color",
      text: "Un local precioso y cuidado. Silvia me hizo unas uñas preciosas y me habló de detalles y curiosidades. Un rato muy agradable, como entre amigas."
    }, {
      name: "Mónica",
      date: "mar. 2026",
      service: "Semipermanente color",
      text: "Es una máquina en lo que hace, le gusta su trabajo y se nota. Siempre voy a ella para cualquier cosa que se me antoja."
    }, {
      name: "Cristina",
      date: "jul. 2025",
      service: "Semipermanente color",
      text: "Buscaba a alguien para las uñas de mi boda… ¡y no pude encontrar mejor que Silvia! Materiales de calidad e higiene impecable. Es un 10."
    }, {
      name: "Malena",
      date: "jul. 2025",
      service: "Uñas de gel color",
      text: "Excelente profesional. Te recomienda lo que mejor va sobre tu uña, higiene al 100% y material totalmente esterilizado."
    }]
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/helpers.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Shared helpers for the website UI kit: image with graceful fallback,
   and a small line-icon set in Lucide's 1.5px round-stroke style. */

// Image that fades to a blush gradient if the source fails to load.
function SmartImg({
  src,
  alt = "",
  style,
  gradient = "linear-gradient(135deg, var(--rose-200), var(--blush-150))",
  ...rest
}) {
  const [ok, setOk] = React.useState(true);
  if (!ok) {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "img",
      "aria-label": alt,
      style: {
        background: gradient,
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    onError: () => setOk(false),
    style: style
  }, rest));
}

// Minimal line icons — 24×24, stroke 1.5, round caps (Lucide style).
function Icon({
  name,
  size = 20,
  color = "currentColor",
  stroke = 1.5,
  style
}) {
  const paths = {
    pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 2"
    })),
    instagram: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.5",
      cy: "6.5",
      r: "0.6",
      fill: color
    })),
    phone: /*#__PURE__*/React.createElement("path", {
      d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"
    }),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4.5",
      width: "18",
      height: "17",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18M8 2.5v4M16 2.5v4"
    })),
    sparkle: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
    }),
    scissors: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "6",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12"
    })),
    heart: /*#__PURE__*/React.createElement("path", {
      d: "M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"
    }),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M20 6L9 17l-5-5"
    }),
    arrow: /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }),
    star: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.9l-5.81 3.06 1.11-6.47-4.7-4.58 6.5-.95L12 3Z"
    }),
    shield: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 12l2 2 4-4"
    })),
    leaf: /*#__PURE__*/React.createElement("path", {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2.5 2 4.5 2 8a7 7 0 0 1-7 7c-3 0-4 0-6 3M5 21c1-4 3-7 8-9"
    })
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, paths[name]);
}
Object.assign(window, {
  SmartImg,
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/helpers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections1.jsx
try { (() => {
/* Header, Hero, About — Silvia Rojano website UI kit. */
const {
  Button: SRButton,
  Badge: SRBadge,
  Rating: SRRating,
  SectionHeading: SRHeading,
  Divider: SRDivider
} = window.SilviaRojanoBeautyNailsDesignSystem_99492d;
const D = window.SR_DATA;
function Wordmark({
  size = 1
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textDecoration: "none",
      lineHeight: 1,
      gap: `${4 * size}px`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: `${17 * size}px`,
      letterSpacing: "0.26em",
      textTransform: "uppercase",
      color: "var(--ink-900)",
      fontWeight: 500
    }
  }, "Silvia Rojano"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: `${26 * size}px`,
      height: "1px",
      background: "var(--rose-300)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: `${8.5 * size}px`,
      letterSpacing: "0.34em",
      textTransform: "uppercase",
      color: "var(--rose-500)"
    }
  }, "Beauty & Nails"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: `${26 * size}px`,
      height: "1px",
      background: "var(--rose-300)"
    }
  })));
}
function Header({
  onBook
}) {
  const links = [["Inicio", "#top"], ["Servicios", "#servicios"], ["Sobre mí", "#sobre"], ["Reseñas", "#resenas"], ["Contacto", "#contacto"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,251,253,0.82)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--border-line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "14px var(--gutter)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "36px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-sr-full.jpeg",
    alt: "Silvia Rojano Beauty & Nails",
    style: {
      height: "62px",
      width: "auto",
      borderRadius: "14px",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "28px"
    }
  }, links.map(([t, h]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: h,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--ink-700)",
      textDecoration: "none",
      fontWeight: 400
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--brand)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--ink-700)"
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(SRButton, {
    variant: "primary",
    size: "sm",
    onClick: onBook
  }, "Reservar cita"))));
}
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      background: "linear-gradient(180deg, var(--blush-100), var(--bg-page))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "clamp(48px,7vw,96px) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "clamp(32px,5vw,72px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "26px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "var(--brand)"
    }
  }, "Sal\xF3n de u\xF1as & est\xE9tica \xB7 Marratx\xED"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "clamp(3rem,6vw,5rem)",
      fontWeight: 500,
      lineHeight: 1.02,
      color: "var(--ink-900)",
      margin: 0
    }
  }, "Belleza que ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      color: "var(--rose-500)"
    }
  }, "cuida"), " cada detalle"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-lead)",
      fontWeight: 300,
      lineHeight: 1.7,
      color: "var(--ink-700)",
      margin: 0,
      maxWidth: "480px"
    }
  }, "Manicura, pedicura y est\xE9tica con producto premium e higiene certificada. Un espacio \xEDntimo donde cada cita se siente como estar entre amigas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SRButton, {
    variant: "primary",
    size: "lg",
    onClick: onBook
  }, "Reservar en Booksy"), /*#__PURE__*/React.createElement(SRButton, {
    variant: "outline",
    size: "lg",
    href: D.instagram,
    target: "_blank",
    rel: "noopener"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 16
  }), " Instagram")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      marginTop: "6px"
    }
  }, /*#__PURE__*/React.createElement(SRRating, {
    value: 5,
    showValue: true,
    count: 56
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1px",
      height: "20px",
      background: "var(--border-soft)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      color: "var(--ink-500)",
      display: "flex",
      alignItems: "center",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 15,
    color: "var(--rose-400)"
  }), " ", D.address))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-14px -14px 20px 26px",
      background: "var(--blush-200)",
      borderRadius: "var(--radius-xl)",
      transform: "rotate(-2deg)"
    }
  }), /*#__PURE__*/React.createElement(SmartImg, {
    src: D.gallery[0],
    alt: "Trabajo de u\xF1as de Silvia Rojano",
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "4/5",
      objectFit: "cover",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-lg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "-22px",
      left: "-22px",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 26,
    color: "var(--rose-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      fontSize: "15px",
      color: "var(--ink-900)"
    }
  }, "Higiene 100%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "11px",
      color: "var(--ink-500)"
    }
  }, "Material esterilizado"))))));
}
function About() {
  const features = [["shield", "Higiene certificada", "Material esterilizado y de un solo uso, todo perfectamente separado y limpio."], ["sparkle", "Producto premium", "Marcas profesionales de alta calidad, elegidas según tu tipo de uña y piel."], ["heart", "Trato cercano", "Cada cita es un rato agradable, con asesoramiento honesto y mucho mimo."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "sobre",
    style: {
      padding: "clamp(56px,8vw,110px) var(--gutter)",
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "clamp(32px,5vw,80px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(SmartImg, {
    src: D.gallery[3],
    alt: "U\xF1as rosas by Silvia Rojano",
    style: {
      width: "100%",
      aspectRatio: "3/4",
      objectFit: "cover",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)"
    }
  }), /*#__PURE__*/React.createElement(SmartImg, {
    src: D.gallery[5],
    alt: "Dise\xF1o de leopardo by Silvia Rojano",
    style: {
      width: "100%",
      aspectRatio: "3/4",
      objectFit: "cover",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      marginTop: "32px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement(SRHeading, {
    align: "left",
    eyebrow: "Sobre Silvia",
    title: "Un sal\xF3n hecho a mano, con alma",
    lead: "En pleno coraz\xF3n de Marratx\xED, Silvia Rojano transforma cada manicura, pedicura y tratamiento en un momento de calma. T\xE9cnica impecable, materiales de primera y una atenci\xF3n que sus clientas describen como \xABestar entre amigas\xBB."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      marginTop: "4px"
    }
  }, features.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: "16px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      background: "var(--brand-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: "var(--rose-600)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "18px",
      fontWeight: 600,
      color: "var(--ink-900)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      fontWeight: 300,
      lineHeight: 1.6,
      color: "var(--ink-500)"
    }
  }, d))))))));
}
Object.assign(window, {
  Header,
  Hero,
  About,
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections2.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Services, Reviews, Gallery/Instagram — Silvia Rojano website UI kit. */
const {
  ServiceCard: SRService,
  Card: SRCard,
  Rating: SRRating2,
  Avatar: SRAvatar,
  SectionHeading: SRHeading2,
  Button: SRButton2
} = window.SilviaRojanoBeautyNailsDesignSystem_99492d;
const D2 = window.SR_DATA;
function Services({
  onBook
}) {
  const [active, setActive] = React.useState(D2.categories[0].id);
  const cat = D2.categories.find(c => c.id === active);
  return /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    style: {
      padding: "clamp(56px,8vw,110px) var(--gutter)",
      background: "linear-gradient(180deg, var(--blush-100), var(--bg-page))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SRHeading2, {
    eyebrow: "Nuestros servicios",
    title: "Manos, pies y est\xE9tica de revista",
    lead: "M\xE1s de 40 servicios entre u\xF1as, pedicura y tratamientos faciales y corporales. Estos son algunos de los favoritos."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      margin: "44px 0 56px"
    }
  }, D2.popular.map(s => /*#__PURE__*/React.createElement(SRService, _extends({
    key: s.name
  }, s, {
    onBook: onBook
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "36px"
    }
  }, D2.categories.map(c => {
    const on = c.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: () => setActive(c.id),
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "12px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        fontWeight: 500,
        padding: "11px 20px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        transition: "all var(--dur-fast)",
        border: on ? "1px solid var(--brand)" : "1px solid var(--border-soft)",
        background: on ? "var(--brand)" : "transparent",
        color: on ? "var(--white)" : "var(--ink-700)"
      }
    }, c.label, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.7
      }
    }, "\xB7 ", c.count));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px"
    }
  }, cat.items.map(s => /*#__PURE__*/React.createElement(SRService, {
    key: s.name,
    name: s.name,
    description: s.desc,
    duration: s.duration,
    price: s.price,
    onBook: onBook
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "48px"
    }
  }, /*#__PURE__*/React.createElement(SRButton2, {
    variant: "gold",
    size: "lg",
    onClick: onBook
  }, "Ver los ", D2.categories.reduce((a, c) => a + c.count, 0), "+ servicios y reservar"))));
}
function Reviews() {
  return /*#__PURE__*/React.createElement("section", {
    id: "resenas",
    style: {
      padding: "clamp(56px,8vw,110px) var(--gutter)",
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "14px",
      marginBottom: "48px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "var(--brand)"
    }
  }, "Rese\xF1as verificadas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "clamp(3.4rem,7vw,5rem)",
      fontWeight: 600,
      color: "var(--accent-text)",
      lineHeight: 1
    }
  }, "5.0"), /*#__PURE__*/React.createElement(SRRating2, {
    value: 5,
    size: 22
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      color: "var(--ink-500)",
      margin: 0
    }
  }, "Basado en 56 rese\xF1as reales en Booksy")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px"
    }
  }, D2.reviews.map(r => /*#__PURE__*/React.createElement(SRCard, {
    key: r.name,
    tone: "blush",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(SRRating2, {
    value: 5,
    size: 15
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "19px",
      fontStyle: "italic",
      lineHeight: 1.5,
      color: "var(--ink-700)",
      margin: 0
    }
  }, "\u201C", r.text, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginTop: "4px"
    }
  }, /*#__PURE__*/React.createElement(SRAvatar, {
    name: r.name,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "14px",
      color: "var(--ink-900)"
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      color: "var(--ink-500)"
    }
  }, r.service, " \xB7 ", r.date)))))))));
}
function Gallery() {
  const tiles = D2.gallery.map((g, i) => ({
    src: g,
    href: D2.instagram,
    alt: `Diseño ${i + 1}`
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "galeria",
    style: {
      padding: "clamp(56px,8vw,110px) var(--gutter)",
      background: "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SRHeading2, {
    tone: "light",
    eyebrow: "Galer\xEDa",
    title: "\xDAltimos dise\xF1os",
    lead: "Un vistazo al trabajo del sal\xF3n. S\xEDguenos en Instagram para inspiraci\xF3n diaria."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "12px",
      margin: "44px 0 40px"
    }
  }, tiles.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: it.href,
    target: "_blank",
    rel: "noopener",
    style: {
      display: "block",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      aspectRatio: "1",
      gridColumn: i === 0 ? "span 2" : "span 1",
      gridRow: i === 0 ? "span 2" : "span 1"
    }
  }, /*#__PURE__*/React.createElement(SmartImg, {
    src: it.src,
    alt: it.alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform var(--dur-slow) var(--ease-soft)"
    },
    onMouseEnter: e => e.currentTarget.style.transform = "scale(1.06)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(SRButton2, {
    variant: "outline",
    size: "md",
    href: D2.instagram,
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--rose-100)",
      borderColor: "var(--rose-300)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 16
  }), " @nailsbysilviarojano"))));
}
Object.assign(window, {
  Services,
  Reviews,
  Gallery
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections3.jsx
try { (() => {
/* Booking CTA, Contact, Footer — Silvia Rojano website UI kit. */
const {
  Button: SRButton3,
  Input: SRInput,
  Select: SRSelect,
  SectionHeading: SRHeading3
} = window.SilviaRojanoBeautyNailsDesignSystem_99492d;
const D3 = window.SR_DATA;
function Booking({
  onBook
}) {
  const serviceOptions = D3.categories.map(c => c.label);
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      padding: "clamp(56px,8vw,110px) var(--gutter)",
      background: "linear-gradient(180deg, var(--bg-page), var(--blush-100))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "980px",
      margin: "0 auto",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-lg)",
      border: "1px solid var(--border-line)",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(160deg, var(--rose-500), var(--rose-700))",
      padding: "48px 44px",
      color: "var(--white)",
      display: "flex",
      flexDirection: "column",
      gap: "22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "var(--rose-100)"
    }
  }, "Reserva tu cita"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "2.4rem",
      fontWeight: 500,
      lineHeight: 1.1,
      margin: 0
    }
  }, "Te esperamos en el sal\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 300,
      lineHeight: 1.7,
      margin: 0,
      color: "rgba(255,255,255,0.85)"
    }
  }, "Elige tu servicio y confirma en segundos a trav\xE9s de Booksy, con disponibilidad en tiempo real."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      marginTop: "8px"
    }
  }, [["pin", D3.address], ["clock", "Mar–Sáb · 9:30 – 20:00"], ["phone", "Cita previa · WhatsApp"]].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontFamily: "var(--font-sans)",
      fontSize: "14px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--rose-100)"
  }), " ", t)))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onBook();
    },
    style: {
      padding: "44px",
      display: "flex",
      flexDirection: "column",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement(SRInput, {
    label: "Nombre",
    placeholder: "Tu nombre",
    required: true
  }), /*#__PURE__*/React.createElement(SRSelect, {
    label: "Servicio",
    placeholder: "Elige un servicio",
    options: serviceOptions
  }), /*#__PURE__*/React.createElement(SRInput, {
    label: "Tel\xE9fono",
    type: "tel",
    placeholder: "600 000 000"
  }), /*#__PURE__*/React.createElement(SRButton3, {
    variant: "primary",
    size: "lg",
    full: true,
    as: "button"
  }, "Continuar en Booksy \u2192"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      color: "var(--ink-500)",
      textAlign: "center",
      margin: 0
    }
  }, "Te redirigimos a Booksy para elegir fecha y hora."))));
}
function Footer({
  onBook
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-900)",
      color: "rgba(255,255,255,0.7)",
      padding: "64px var(--gutter) 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "40px",
      paddingBottom: "44px",
      borderBottom: "1px solid rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      maxWidth: "300px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "20px",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--white)",
      fontWeight: 500
    }
  }, "Silvia Rojano"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "10px",
      letterSpacing: "0.34em",
      textTransform: "uppercase",
      color: "var(--rose-300)"
    }
  }, "Beauty & Nails"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      fontWeight: 300,
      lineHeight: 1.7,
      margin: "8px 0 0"
    }
  }, "Sal\xF3n de u\xF1as y est\xE9tica en Marratx\xED. Belleza que cuida cada detalle.")), [["Servicios", [["Semipermanente", "#servicios"], ["Uñas de gel", "#servicios"], ["Pedicura", "#servicios"], ["Estética", "#servicios"]]], ["Salón", [["Sobre Silvia", "#sobre"], ["Reseñas", "#resenas"], ["Galería", "#galeria"]]]].map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "11px",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--rose-200)"
    }
  }, title), items.map(([t, h]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: h,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "rgba(255,255,255,0.7)",
      textDecoration: "none"
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "11px",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--rose-200)"
    }
  }, "Reservas"), /*#__PURE__*/React.createElement(SRButton3, {
    variant: "primary",
    size: "sm",
    onClick: onBook
  }, "Reservar cita"), /*#__PURE__*/React.createElement("a", {
    href: D3.instagram,
    target: "_blank",
    rel: "noopener",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "rgba(255,255,255,0.7)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 16,
    color: "var(--rose-300)"
  }), " Instagram"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "8px",
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 16,
    color: "var(--rose-300)"
  }), " ", D3.address))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px",
      paddingTop: "24px",
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      color: "rgba(255,255,255,0.5)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Silvia Rojano Beauty & Nails. Todos los derechos reservados."), /*#__PURE__*/React.createElement("span", null, "Reservas gestionadas con Booksy"))));
}
Object.assign(window, {
  Booking,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections3.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
