/* Services, Reviews, Gallery/Instagram — Silvia Rojano website UI kit. */
const { ServiceCard: SRService, Card: SRCard, Rating: SRRating2, Avatar: SRAvatar, SectionHeading: SRHeading2, Button: SRButton2 } = window.SilviaRojanoBeautyNailsDesignSystem_99492d;
const D2 = window.SR_DATA;

function Services({ onBook }) {
  const [active, setActive] = React.useState(D2.categories[0].id);
  const cat = D2.categories.find((c) => c.id === active);
  return (
    <section id="servicios" style={{ padding: "clamp(56px,8vw,110px) var(--gutter)", background: "linear-gradient(180deg, var(--blush-100), var(--bg-page))" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <SRHeading2 eyebrow="Nuestros servicios" title="Manos, pies y estética de revista" lead="Más de 40 servicios entre uñas, pedicura y tratamientos faciales y corporales. Estos son algunos de los favoritos." />

        {/* Popular row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", margin: "44px 0 56px" }}>
          {D2.popular.map((s) => (
            <SRService key={s.name} {...s} onBook={onBook} />
          ))}
        </div>

        {/* Category tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "36px" }}>
          {D2.categories.map((c) => {
            const on = c.id === active;
            return (
              <button key={c.id} onClick={() => setActive(c.id)}
                style={{ fontFamily: "var(--font-sans)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500,
                  padding: "11px 20px", borderRadius: "var(--radius-pill)", cursor: "pointer", transition: "all var(--dur-fast)",
                  border: on ? "1px solid var(--brand)" : "1px solid var(--border-soft)",
                  background: on ? "var(--brand)" : "transparent", color: on ? "var(--white)" : "var(--ink-700)" }}>
                {c.label} <span style={{ opacity: 0.7 }}>· {c.count}</span>
              </button>
            );
          })}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {cat.items.map((s) => (
            <SRService key={s.name} name={s.name} description={s.desc} duration={s.duration} price={s.price} onBook={onBook} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <SRButton2 variant="gold" size="lg" onClick={onBook}>Ver los {D2.categories.reduce((a, c) => a + c.count, 0)}+ servicios y reservar</SRButton2>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="resenas" style={{ padding: "clamp(56px,8vw,110px) var(--gutter)", background: "var(--bg-page)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", marginBottom: "48px", textAlign: "center" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--brand)" }}>Reseñas verificadas</span>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3.4rem,7vw,5rem)", fontWeight: 600, color: "var(--accent-text)", lineHeight: 1 }}>5.0</div>
          <SRRating2 value={5} size={22} />
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--ink-500)", margin: 0 }}>Basado en 56 reseñas reales en Booksy</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {D2.reviews.map((r) => (
            <SRCard key={r.name} tone="blush" pad="lg">
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <SRRating2 value={5} size={15} />
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "19px", fontStyle: "italic", lineHeight: 1.5, color: "var(--ink-700)", margin: 0 }}>“{r.text}”</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" }}>
                  <SRAvatar name={r.name} size={40} />
                  <div style={{ lineHeight: 1.35 }}>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "14px", color: "var(--ink-900)" }}>{r.name}</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--ink-500)" }}>{r.service} · {r.date}</div>
                  </div>
                </div>
              </div>
            </SRCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramEmbeds({ posts }) {
  React.useEffect(() => {
    if (!posts || !posts.length) return undefined;
    const run = () => { if (window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process(); };
    if (window.instgrm && window.instgrm.Embeds) { run(); return undefined; }
    let s = document.getElementById("sr-ig-embed");
    if (!s) {
      s = document.createElement("script");
      s.id = "sr-ig-embed";
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(s);
    }
    s.addEventListener("load", run);
    let n = 0;
    const t = setInterval(() => {
      if (window.instgrm && window.instgrm.Embeds) { run(); clearInterval(t); }
      else if (++n > 25) clearInterval(t);
    }, 300);
    return () => { clearInterval(t); s.removeEventListener("load", run); };
  }, [posts]);
  if (!posts || !posts.length) return null;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", alignItems: "start", justifyItems: "center", margin: "16px 0 40px" }}>
      {posts.map((url) => (
        <blockquote
          key={url}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{ background: "var(--white)", border: 0, borderRadius: "14px", boxShadow: "var(--shadow-md)", margin: 0, width: "100%", maxWidth: "340px", minWidth: "240px" }}
        ></blockquote>
      ))}
    </div>
  );
}

function Gallery() {
  const tiles = D2.gallery.map((g, i) => ({ src: g, href: D2.instagram, alt: `Diseño ${i + 1}` }));
  return (
    <section id="galeria" style={{ padding: "clamp(56px,8vw,110px) var(--gutter)", background: "var(--ink-900)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <SRHeading2 tone="light" eyebrow="Galería" title="Últimos diseños" lead="Un vistazo al trabajo del salón. Síguenos en Instagram para inspiración diaria." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "12px", margin: "44px 0 40px" }}>
          {tiles.map((it, i) => (
            <a key={i} href={it.href} target="_blank" rel="noopener" style={{ display: "block", borderRadius: "var(--radius-md)", overflow: "hidden", aspectRatio: "1", gridColumn: i === 0 ? "span 2" : "span 1", gridRow: i === 0 ? "span 2" : "span 1" }}>
              <SmartImg src={it.src} alt={it.alt} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform var(--dur-slow) var(--ease-soft)" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} />
            </a>
          ))}
        </div>
        <div style={{ textAlign: "center", margin: "0 0 8px" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--rose-200)" }}>Desde nuestro Instagram</span>
        </div>
        <InstagramEmbeds posts={D2.instagramPosts} />
        <div style={{ textAlign: "center" }}>
          <SRButton2 variant="outline" size="md" href={D2.instagram} target="_blank" rel="noopener"
            style={{ color: "var(--rose-100)", borderColor: "var(--rose-300)" }}>
            <Icon name="instagram" size={16} /> @nailsbysilviarojano
          </SRButton2>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services, Reviews, Gallery });
