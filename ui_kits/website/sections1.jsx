/* Header, Hero, About — Silvia Rojano website UI kit. */
const { Button: SRButton, Badge: SRBadge, Rating: SRRating, SectionHeading: SRHeading, Divider: SRDivider } = window.SilviaRojanoBeautyNailsDesignSystem_99492d;
const D = window.SR_DATA;

function Wordmark({ size = 1 }) {
  return (
    <a href="#top" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", lineHeight: 1, gap: `${4 * size}px` }}>
      <span style={{ fontFamily: "var(--font-serif)", fontSize: `${17 * size}px`, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--ink-900)", fontWeight: 500 }}>Silvia Rojano</span>
      <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ width: `${26 * size}px`, height: "1px", background: "var(--rose-300)" }} />
        <span style={{ fontFamily: "var(--font-sans)", fontSize: `${8.5 * size}px`, letterSpacing: "0.34em", textTransform: "uppercase", color: "var(--rose-500)" }}>Beauty &amp; Nails</span>
        <span style={{ width: `${26 * size}px`, height: "1px", background: "var(--rose-300)" }} />
      </span>
    </a>
  );
}

function Header({ onBook }) {
  const links = [["Inicio", "#top"], ["Servicios", "#servicios"], ["Sobre mí", "#sobre"], ["Reseñas", "#resenas"], ["Contacto", "#contacto"]];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,251,253,0.82)", backdropFilter: "blur(14px)", borderBottom: "1px solid var(--border-line)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "14px var(--gutter)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          <a href="#top" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "68px", height: "68px", background: "var(--blush-200)", borderRadius: "16px", flexShrink: 0 }}>
            <img src="../../assets/logo/logo-sr.svg" alt="Silvia Rojano Beauty & Nails"
              style={{ height: "52px", width: "auto", display: "block" }} />
          </a>
          <nav style={{ display: "flex", gap: "28px" }}>
            {links.map(([t, h]) => (
              <a key={t} href={h} style={{ fontFamily: "var(--font-sans)", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-700)", textDecoration: "none", fontWeight: 400 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-700)")}>{t}</a>
            ))}
          </nav>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <SRButton variant="primary" size="sm" onClick={onBook}>Reservar cita</SRButton>
        </div>
      </div>
    </header>
  );
}

function Hero({ onBook }) {
  return (
    <section id="top" style={{ position: "relative", background: "linear-gradient(180deg, var(--blush-100), var(--bg-page))" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "clamp(48px,7vw,96px) var(--gutter)", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--brand)" }}>Salón de uñas &amp; estética · Marratxí</span>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem,6vw,5rem)", fontWeight: 500, lineHeight: 1.02, color: "var(--ink-900)", margin: 0 }}>
            Belleza que <em style={{ fontStyle: "italic", color: "var(--rose-500)" }}>cuida</em> cada detalle
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-lead)", fontWeight: 300, lineHeight: 1.7, color: "var(--ink-700)", margin: 0, maxWidth: "480px" }}>
            Manicura, pedicura y estética con producto premium e higiene certificada. Un espacio íntimo donde cada cita se siente como estar entre amigas.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "18px", flexWrap: "wrap" }}>
            <SRButton variant="primary" size="lg" onClick={onBook}>Reservar en Booksy</SRButton>
            <SRButton variant="outline" size="lg" href={D.instagram} target="_blank" rel="noopener">
              <Icon name="instagram" size={16} /> Instagram
            </SRButton>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "6px" }}>
            <SRRating value={5} showValue count={56} />
            <span style={{ width: "1px", height: "20px", background: "var(--border-soft)" }} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--ink-500)", display: "flex", alignItems: "center", gap: "6px" }}>
              <Icon name="pin" size={15} color="var(--rose-400)" /> {D.address}
            </span>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: "-14px -14px 20px 26px", background: "var(--blush-200)", borderRadius: "var(--radius-xl)", transform: "rotate(-2deg)" }} />
          <SmartImg src={D.gallery[0]} alt="Trabajo de uñas de Silvia Rojano"
            style={{ position: "relative", width: "100%", aspectRatio: "4/5", objectFit: "cover", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)" }} />
          <div style={{ position: "absolute", bottom: "-22px", left: "-22px", background: "var(--surface-card)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
            <Icon name="shield" size={26} color="var(--rose-500)" />
            <div style={{ lineHeight: 1.3 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "var(--ink-900)" }}>Higiene 100%</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--ink-500)" }}>Material esterilizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const features = [
    ["shield", "Higiene certificada", "Material esterilizado y de un solo uso, todo perfectamente separado y limpio."],
    ["sparkle", "Producto premium", "Marcas profesionales de alta calidad, elegidas según tu tipo de uña y piel."],
    ["heart", "Trato cercano", "Cada cita es un rato agradable, con asesoramiento honesto y mucho mimo."],
  ];
  return (
    <section id="sobre" style={{ padding: "clamp(56px,8vw,110px) var(--gutter)", background: "var(--bg-page)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "clamp(32px,5vw,80px)", alignItems: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <SmartImg src={D.gallery[1]} alt="Uñas rosas by Silvia Rojano" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)" }} />
          <SmartImg src={D.gallery[3]} alt="Diseño de leopardo by Silvia Rojano" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", marginTop: "32px" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <SRHeading align="left" eyebrow="Sobre Silvia" title="Un salón hecho a mano, con alma" lead="En pleno corazón de Marratxí, Silvia Rojano transforma cada manicura, pedicura y tratamiento en un momento de calma. Técnica impecable, materiales de primera y una atención que sus clientas describen como «estar entre amigas»." />
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "4px" }}>
            {features.map(([ic, t, d]) => (
              <div key={t} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ flex: "0 0 auto", width: "44px", height: "44px", borderRadius: "50%", background: "var(--brand-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={ic} size={20} color="var(--rose-600)" />
                </span>
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 600, color: "var(--ink-900)" }}>{t}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, lineHeight: 1.6, color: "var(--ink-500)" }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, About, Wordmark });
