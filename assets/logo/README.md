# Logo — Silvia Rojano Beauty & Nails

Logo vectorial (reconstruido con colores planos) para usar a cualquier tamaño,
incluida gran impresión (pancartas, lonas…). Fondo transparente.

## Archivos

| Archivo | Para qué |
|---|---|
| `logo-sr.svg` | **Vectorial** — web, diseño y edición de colores. El recomendado. |
| `logo-sr.pdf` | **Vectorial** — imprenta / gran formato. |
| `logo-sr-256.png` | Iconos / usos pequeños (transparente). |
| `logo-sr-512.png` | Redes sociales (transparente). |
| `logo-sr-1024.png` | Uso general (transparente). |
| `logo-sr-2048.png` | Alta resolución (transparente). |

Para carteles usa **siempre el SVG o el PDF**: al ser vectoriales se amplían
sin pixelarse.

## Cambiar los colores (fácil)

El logo usa **2 tonos**. Están definidos en un único sitio, al principio de
`logo-sr.svg`:

```xml
<style>
  .sr-main  { fill: #D5738F; }   /* S, mariposa y texto */
  .sr-light { fill: #EFA6B9; }   /* R */
</style>
```

- `.sr-main`  → la **S**, la **mariposa** y el **texto**.
- `.sr-light` → la **R**.

Cambia esos dos códigos de color (formato hexadecimal `#RRGGBB`) y se actualiza
todo el logo. Puedes abrir el SVG con cualquier editor de texto (Bloc de notas)
o en Illustrator / Inkscape / Figma.

> Nota: los `.png` de arriba llevan los colores "quemados". Si cambias los
> colores en el SVG y necesitas los PNG con el color nuevo, hay que volver a
> exportarlos desde el SVG (cualquier editor vectorial lo hace en 1 clic).

## Colores actuales
- Rosa medio (`.sr-main`): `#D5738F`
- Rosa claro (`.sr-light`): `#EFA6B9`
