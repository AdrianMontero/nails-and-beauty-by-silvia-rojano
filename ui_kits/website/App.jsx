/* App shell — composes the Silvia Rojano website + booking redirect modal. */
const { Button: SRButtonApp } = window.SilviaRojanoBeautyNailsDesignSystem_99492d;
const DApp = window.SR_DATA;

function BookingModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(58,36,48,0.5)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", animation: "srFade 240ms ease" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "var(--surface-card)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", maxWidth: "420px", width: "100%", padding: "40px", textAlign: "center", position: "relative", animation: "srPop 300ms var(--ease-soft)" }}>
        <button onClick={onClose} aria-label="Cerrar" style={{ position: "absolute", top: "18px", right: "18px", background: "var(--bg-blush-deep)", border: "none", width: "34px", height: "34px", borderRadius: "50%", cursor: "pointer", color: "var(--ink-700)", fontSize: "16px" }}>×</button>
        <span style={{ display: "inline-flex", width: "62px", height: "62px", borderRadius: "50%", background: "var(--brand-soft)", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
          <Icon name="calendar" size={28} color="var(--rose-600)" />
        </span>
        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 500, color: "var(--ink-900)", margin: "0 0 10px" }}>Reserva en Booksy</h3>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "15px", lineHeight: 1.65, color: "var(--ink-500)", margin: "0 0 26px" }}>
          Te llevamos a la pasarela de Booksy para elegir fecha, hora y confirmar tu cita con disponibilidad en tiempo real.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <SRButtonApp variant="primary" size="lg" full href={DApp.bookingUrl()} target="_blank" rel="noopener">Continuar en Booksy →</SRButtonApp>
          <SRButtonApp variant="ghost" size="sm" full onClick={onClose}>Ahora no</SRButtonApp>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [modal, setModal] = React.useState(false);
  const book = () => setModal(true);
  return (
    <React.Fragment>
      <Header onBook={book} />
      <main>
        <Hero onBook={book} />
        <About />
        <Services onBook={book} />
        <Reviews />
        <Gallery />
        <Booking onBook={book} />
      </main>
      <Footer onBook={book} />
      <BookingModal open={modal} onClose={() => setModal(false)} />
    </React.Fragment>
  );
}

window.SRApp = App;
