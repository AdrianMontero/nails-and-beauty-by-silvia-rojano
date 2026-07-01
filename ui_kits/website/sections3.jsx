/* Booking CTA, Contact, Footer — Silvia Rojano website UI kit. */
const { Button: SRButton3 } = window.SilviaRojanoBeautyNailsDesignSystem_99492d;
const D3 = window.SR_DATA;

function Booking() {
  return (
    <section id="contacto" style={{ padding: "clamp(56px,8vw,110px) var(--gutter)", background: "linear-gradient(180deg, var(--bg-page), var(--blush-100))" }}>
      <div style={{ maxWidth: "980px", margin: "0 auto", background: "var(--surface-card)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border-line)", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ background: "linear-gradient(160deg, var(--rose-500), var(--rose-700))", padding: "48px 44px", color: "var(--white)", display: "flex", flexDirection: "column", gap: "22px" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--rose-100)" }}>Reserva tu cita</span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", fontWeight: 500, lineHeight: 1.1, margin: 0 }}>Te esperamos en el salón</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, lineHeight: 1.7, margin: 0, color: "rgba(255,255,255,0.85)" }}>
            Elige tu servicio y confirma en segundos a través de Booksy, con disponibilidad en tiempo real.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "8px" }}>
            {[
              { ic: "pin", t: D3.address },
              { ic: "clock", t: "Mar–Sáb · 9:30 – 20:00" },
              { ic: "phone", t: D3.phone, href: D3.phoneHref },
              { ic: "mail", t: D3.email, href: "mailto:" + D3.email },
            ].map(({ ic, t, href }) => {
              const rowStyle = { display: "flex", alignItems: "center", gap: "12px", fontFamily: "var(--font-sans)", fontSize: "14px", color: "inherit", textDecoration: "none" };
              const inner = (<><Icon name={ic} size={18} color="var(--rose-100)" /> {t}</>);
              return href
                ? <a key={t} href={href} style={rowStyle}>{inner}</a>
                : <div key={t} style={rowStyle}>{inner}</div>;
            })}
          </div>
        </div>
        <div style={{ padding: "clamp(36px,5vw,48px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "22px", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignSelf: "center", width: "64px", height: "64px", borderRadius: "50%", background: "var(--brand-soft)", alignItems: "center", justifyContent: "center" }}>
            <Icon name="calendar" size={30} color="var(--rose-600)" />
          </span>
          <div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.7rem", fontWeight: 500, color: "var(--ink-900)", margin: "0 0 10px" }}>Reserva online en Booksy</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "15px", lineHeight: 1.65, color: "var(--ink-500)", margin: 0 }}>
              Consulta la disponibilidad en tiempo real y confirma tu cita en segundos, sin llamadas ni esperas.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "left", width: "100%", maxWidth: "300px", margin: "0 auto" }}>
            {["Eliges día, hora y servicio", "Disponibilidad en tiempo real", "Confirmación inmediata"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--ink-700)" }}>
                <Icon name="check" size={16} color="var(--rose-500)" /> {t}
              </div>
            ))}
          </div>
          <SRButton3 variant="primary" size="lg" full href={D3.bookingUrl()} target="_blank" rel="noopener">Reservar en Booksy →</SRButton3>
        </div>
      </div>
    </section>
  );
}

function Footer({ onBook }) {
  return (
    <footer style={{ background: "var(--ink-900)", color: "rgba(255,255,255,0.7)", padding: "64px var(--gutter) 32px" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "40px", paddingBottom: "44px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "300px" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "20px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--white)", fontWeight: 500 }}>Silvia Rojano</div>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.34em", textTransform: "uppercase", color: "var(--rose-300)" }}>Beauty &amp; Nails</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, lineHeight: 1.7, margin: "8px 0 0" }}>
              Salón de uñas y estética en Marratxí. Belleza que cuida cada detalle.
            </p>
          </div>
          {[["Servicios", [["Semipermanente", "#servicios"], ["Uñas de gel", "#servicios"], ["Pedicura", "#servicios"], ["Estética", "#servicios"]]],
            ["Salón", [["Sobre Silvia", "#sobre"], ["Reseñas", "#resenas"], ["Galería", "#galeria"]]]].map(([title, items]) => (
            <div key={title} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--rose-200)" }}>{title}</div>
              {items.map(([t, h]) => (
                <a key={t} href={h} style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>{t}</a>
              ))}
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--rose-200)" }}>Reservas</div>
            <SRButton3 variant="primary" size="sm" onClick={onBook}>Reservar cita</SRButton3>
            <a href={D3.instagram} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-sans)", fontSize: "14px", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
              <Icon name="instagram" size={16} color="var(--rose-300)" /> Instagram
            </a>
            <span style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontFamily: "var(--font-sans)", fontSize: "13px", lineHeight: 1.5 }}>
              <Icon name="pin" size={16} color="var(--rose-300)" /> {D3.address}
            </span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", paddingTop: "24px", fontFamily: "var(--font-sans)", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
          <span>© 2026 Silvia Rojano Beauty &amp; Nails. Todos los derechos reservados.</span>
          <span>Reservas gestionadas con Booksy</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Booking, Footer });
