**ServiceCard** — the signature domain component: one bookable service, Booksy-style, with name, description, duration, gold price, and a Reservar action.

```jsx
<ServiceCard
  name="Mantenimiento uñas de gel color"
  description="Incluye manicura rusa y nivelación."
  duration="1h 30min"
  price="40,00 €"
  popular
  bookHref="https://booksy.com/es-es/113413_..."
/>
```

Set `popular` for the gold flag, `image` for a photo header, `bookHref` to link the button to Booksy.
