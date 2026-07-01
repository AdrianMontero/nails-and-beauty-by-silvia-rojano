/* Shared data + assets for the Silvia Rojano website UI kit.
   Photos are hotlinked from the salon's public Booksy gallery — replace
   with owned high-res assets in production. Each <img> has an onError
   fallback to a blush gradient so the layout never breaks. */
(function () {
  const CDN = "https://d375139ucebi94.cloudfront.net/region2/es/113413";
  window.SR_DATA = {
    booksyUrl: "https://booksy.com/es-es/113413_nails-and-beauty-by-silvia-rojano_salon-de-unas_68787_portol",
    // Enlace corto de Booksy: en móvil abre la app si está instalada (o la tienda si no).
    booksyApp: "https://cdl.booksy.com/911oHUKfxMb",
    // En móvil usamos el enlace de la app; en escritorio el perfil web directo
    // (el enlace corto en escritorio lleva a la home de Booksy, no al salón).
    bookingUrl: function () {
      try {
        var ua = navigator.userAgent || "";
        var isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua) ||
          (navigator.maxTouchPoints > 1 && /Macintosh/i.test(ua));
        return isMobile ? this.booksyApp : this.booksyUrl;
      } catch (e) { return this.booksyUrl; }
    },
    instagram: "https://www.instagram.com/nailsbysilviarojano",
    // ── Galería en vivo desde Instagram ──────────────────────────────
    // Pega aquí tu ID de feed de Behold.so (gratis, actualización automática).
    //   1. Entra en https://behold.so y conecta @nailsbysilviarojano
    //   2. Crea un feed y copia su ID (p. ej. "aBcD1234")
    //   3. Pégalo abajo. La galería se cargará sola y se actualizará al
    //      publicar o borrar fotos en Instagram. Vacío = usa las fotos de respaldo.
    instagramFeedId: "",
    instagramFeedUrl: function () { return this.instagramFeedId ? ("https://feeds.behold.so/" + this.instagramFeedId) : ""; },
    // Posts concretos de Instagram para la galería (embed oficial, sin token).
    instagramPosts: [
      "https://www.instagram.com/p/DJ40MbYNci5/",
      "https://www.instagram.com/p/CvNHrnUtwuT/",
      "https://www.instagram.com/p/C9ijIl7Nwqk/",
      "https://www.instagram.com/p/CpqfKQ0j8_h/",
      "https://www.instagram.com/p/CYcatnXjsaA/",
    ],
    address: "Carrer Gerani esquina Gladiol, local 12F, 1ª planta, 07141 Marratxí",
    phone: "+34 619 51 36 29",
    phoneHref: "tel:+34619513629",
    email: "silvia.rojano@hotmail.com",
    hero: CDN + "/biz_photo/cdb813ba5bfd45b1b0db9497e64d5b-nails-and-beauty-by-silvia-roj-biz-photo-f37566cf147d419c909fe013ad1fb1-booksy.jpeg",
    gallery: [
      CDN + "/inspiration/7b6d90c79aab40f091caeae316e3a9-nails-and-beauty-by-silvia-roj-inspiration-041eac82651048feacf8115e52e5b6-booksy.jpeg?size=640x0",
      CDN + "/inspiration/9bfa8b86309244bb8319ad83dee904-nails-and-beauty-by-silvia-roj-inspiration-a531b9d4594b43059441f02ab968c2-booksy.jpeg?size=640x0",
      CDN + "/inspiration/b960f718ed2b40e9a5b95b3a31bae5-nails-and-beauty-by-silvia-roj-inspiration-e3ffc63e43224f4490d40391af256b-booksy.jpeg?size=640x0",
      CDN + "/inspiration/d50002a566274e4ba9a2b5998a257b-nails-and-beauty-by-silvia-roj-inspiration-95f71c0affcb4aa3ab0dce97a5803a-booksy.jpeg?size=640x0",
      // Fotos de Instagram (@nailsbysilviarojano) descargadas y alojadas en el repo.
      "gallery/ig1.jpg",
      "gallery/ig2.jpg",
      "gallery/ig3.jpg",
      "gallery/ig4.jpg",
      "gallery/ig5.jpg",
    ],
    // Booksy service categories (real prices & durations)
    popular: [
      { name: "Mantenimiento uñas de gel color", desc: "Rebajado, relleno y color en gel. Acabado impecable de larga duración.", duration: "1h 30min", price: "40,00 €", popular: true },
      { name: "Pedicura exprés con semipermanente", desc: "Cuidado completo de pies con esmaltado semipermanente color.", duration: "1h 30min", price: "48,00 €", popular: true },
      { name: "Maderoterapia", desc: "Masaje corporal con útiles de madera para modelar y activar la circulación.", duration: "50min", price: "50,00 €", popular: true },
    ],
    categories: [
      { id: "semi", label: "Esmaltado semipermanente", count: 6, items: [
        { name: "Semipermanente color", desc: "Incluye manicura rusa (cuidado de cutículas) y nivelación (refuerzo).", duration: "1h 30min", price: "35,00 €" },
        { name: "Semipermanente francesa o varios colores", duration: "1h 30min", price: "40,00 €" },
        { name: "Semipermanente baby boomer", duration: "1h 45min", price: "40,00 €" },
        { name: "Eliminar semipermanente", duration: "1h", price: "25,00 €" },
      ]},
      { id: "gel", label: "Uñas de gel / Acrigel", count: 15, items: [
        { name: "Primera puesta sobre uña natural", duration: "1h 30min", price: "50,00 €" },
        { name: "Mantenimiento uñas de gel francesa", duration: "1h 30min", price: "43,00 €" },
        { name: "Primera puesta en extensión", desc: "Alargamiento con extensión y diseño personalizado.", duration: "2h", price: "70,00 €" },
        { name: "Baby boomer", duration: "1h 45min", price: "45,00 €" },
      ]},
      { id: "pedi", label: "Pedicura", count: 9, items: [
        { name: "Pedicura profunda", duration: "1h", price: "40,00 €" },
        { name: "Pedicura exprés con semipermanente francesa", duration: "1h 30min", price: "50,00 €" },
        { name: "Pedicura con esmalte tradicional", duration: "1h 30min", price: "45,00 €" },
      ]},
      { id: "estetica", label: "Estética", count: 12, items: [
        { name: "Limpieza facial", desc: "Peeling ácido, mascarilla y extracción de impurezas con ultrasonido e hidratación.", duration: "1h", price: "50,00 €" },
        { name: "Dermapen facial con ác. hialurónico", desc: "Estimula elastina y colágeno de forma natural; reduce manchas y arrugas.", duration: "1h", price: "70,00 €" },
        { name: "Radiofrecuencia facial", desc: "Ondas electromagnéticas para un efecto antiedad visible e inmediato.", duration: "1h", price: "45,00 €" },
        { name: "Lifting de pestañas", duration: "1h 30min", price: "50,00 €" },
        { name: "Laminado de cejas", duration: "1h", price: "50,00 €" },
      ]},
      { id: "masajes", label: "Masajes", count: 2, items: [
        { name: "Masaje relajante corporal", duration: "1h 20min", price: "50,00 €" },
        { name: "Maderoterapia", duration: "50min", price: "50,00 €" },
      ]},
    ],
    reviews: [
      { name: "Pilar", date: "mar. 2026", service: "Mantenimiento uñas de gel color", text: "Un local precioso y cuidado. Silvia me hizo unas uñas preciosas y me habló de detalles y curiosidades. Un rato muy agradable, como entre amigas." },
      { name: "Mónica", date: "mar. 2026", service: "Semipermanente color", text: "Es una máquina en lo que hace, le gusta su trabajo y se nota. Siempre voy a ella para cualquier cosa que se me antoja." },
      { name: "Cristina", date: "jul. 2025", service: "Semipermanente color", text: "Buscaba a alguien para las uñas de mi boda… ¡y no pude encontrar mejor que Silvia! Materiales de calidad e higiene impecable. Es un 10." },
      { name: "Malena", date: "jul. 2025", service: "Uñas de gel color", text: "Excelente profesional. Te recomienda lo que mejor va sobre tu uña, higiene al 100% y material totalmente esterilizado." },
    ],
  };
})();
