/* Shared helpers for the website UI kit: image with graceful fallback,
   and a small line-icon set in Lucide's 1.5px round-stroke style. */

// Image that fades to a blush gradient if the source fails to load.
function SmartImg({ src, alt = "", style, gradient = "linear-gradient(135deg, var(--rose-200), var(--blush-150))", ...rest }) {
  const [ok, setOk] = React.useState(true);
  if (!ok) {
    return <div role="img" aria-label={alt} style={{ background: gradient, ...style }} {...rest} />;
  }
  return <img src={src} alt={alt} onError={() => setOk(false)} style={style} {...rest} />;
}

// Minimal line icons — 24×24, stroke 1.5, round caps (Lucide style).
function Icon({ name, size = 20, color = "currentColor", stroke = 1.5, style }) {
  const paths = {
    pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill={color}/></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/></>,
    calendar: <><rect x="3" y="4.5" width="18" height="17" rx="3"/><path d="M3 9h18M8 2.5v4M16 2.5v4"/></>,
    sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/>,
    scissors: <><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12"/></>,
    heart: <path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"/>,
    check: <path d="M20 6L9 17l-5-5"/>,
    arrow: <path d="M5 12h14M13 6l6 6-6 6"/>,
    star: <path d="M12 3l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.9l-5.81 3.06 1.11-6.47-4.7-4.58 6.5-.95L12 3Z"/>,
    shield: <><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3Z"/><path d="M9 12l2 2 4-4"/></>,
    leaf: <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2.5 2 4.5 2 8a7 7 0 0 1-7 7c-3 0-4 0-6 3M5 21c1-4 3-7 8-9"/>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

Object.assign(window, { SmartImg, Icon });
