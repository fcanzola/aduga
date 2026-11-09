# ADUGA — landing

Web estática (HTML + CSS + JS, sin build). Mismo flujo que The Slow Engagement: GitHub → Vercel.

## Qué editar

| Quiero cambiar… | Archivo |
|---|---|
| Precios, enlaces de Stripe, texto de envío, email, Instagram, tiendas, foto de fundador/a | `config.js` |
| Textos de la página | `index.html` |
| Aviso legal, privacidad, cookies, envíos, devoluciones | `legal.html` |
| Fotos | `assets/img/` (WebP, ~1200 px de ancho) |

Todo dato que falte se queda en `null` y la web lo marca como **pendiente** (en azul, con línea discontinua) en vez de inventarlo. Mientras falte algo, aparece una franja de "Borrador" abajo con la lista. Cuando esté todo, pon `showDraftBanner: false`.

### Añadir una tienda

En `config.js`:

```js
locations: [
  { name: "Nombre de la tienda", area: "Malasaña · C/ Ejemplo 12", mapsUrl: "https://maps.app.goo.gl/..." },
],
```

Si la lista está vacía, la sección "ADUGA por Madrid" no muestra tarjetas vacías.

### Stripe

Crea un Payment Link por pack en Stripe (Productos → Payment Links), con envío y dirección activados, y pega cada URL `https://buy.stripe.com/...` en `config.js`. Los botones solo se activan con enlaces de Stripe válidos.

### Formulario B2B

No hay servidor: "Enviar" abre el correo de la persona con el mensaje ya escrito, dirigido al `email` de `config.js`. No se guardan datos en la web.

## Publicar

Cada `git push` a `main` se publica solo en Vercel.

## Fuentes

- **Oswald** (OFL, libre) — autoalojada en `assets/fonts/`.
- **Instrument Serif** — desde Google Fonts. Para no depender de Google (RGPD), se puede autoalojar igual que Oswald.
- **Taldose** no se usa: la licencia de la carpeta de marca es *Demo for Personal Use* y no permite uso comercial.
