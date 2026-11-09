/* =========================================================
   ADUGA — datos editables de la web
   ---------------------------------------------------------
   Todo lo que cambia a menudo vive aquí: precios, enlaces de
   Stripe, envío, puntos de venta y contacto.
   Edita, guarda, haz commit → Vercel publica solo.

   Regla: si un dato no está confirmado, déjalo en null.
   La web lo marcará como pendiente en vez de inventarlo.
   ========================================================= */

window.ADUGA = {

  /* ---------- Tienda ---------- */
  packs: {
    pack8: {
      price: null,          // ej. "24,00 €"
      stripeLink: null,     // ej. "https://buy.stripe.com/xxxxxxxx"
    },
    pack12: {
      price: null,          // ej. "33,00 €"
      stripeLink: null,     // ej. "https://buy.stripe.com/yyyyyyyy"
    },
  },

  /* Texto corto de envío que se muestra ANTES de comprar.
     ej. "Envío a península: 4,90 €. Gratis a partir de X €. Entrega en 48–72 h." */
  shipping: null,

  /* ---------- Contacto ---------- */
  email: "federica@aduga.co",
  instagram: "https://www.instagram.com/drinkaduga/", // handle tomado de las piezas de marca (@drinkaduga) — verifícalo

  /* ---------- Puntos de venta en Madrid ----------
     Solo tiendas confirmadas. Si la lista está vacía, la sección
     muestra el texto + botón de compra, sin tarjetas vacías.
     Formato:
     { name: "Nombre de la tienda", area: "Malasaña · C/ Ejemplo 12", mapsUrl: "https://maps.app.goo.gl/..." },
  */
  locations: [
  ],

  /* ---------- Fundador/a (sección "Sobre ADUGA") ----------
     Si añades una foto real, sustituye a la foto de la nevera.
     ej. photo: "assets/img/fundadora.jpg", name: "Nombre Apellido · Fundadora" */
  founder: {
    photo: null,
    name: null,
  },

  /* Muestra una franja de "borrador" con lo que falta.
     Ponlo en false cuando la web esté lista para el público. */
  showDraftBanner: true,
};
