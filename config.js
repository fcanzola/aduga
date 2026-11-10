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
    /* Único formato online: pack de 12 latas. Precio con IVA incluido
       (ver doc "Pricing" del proyecto). Debe coincidir con el Payment Link de Stripe.
       El cliente elige cuántos packs en el checkout: activa
       "Permitir que los clientes ajusten la cantidad" en el Payment Link. */
    pack12: {
      price: "36,00 €",
      perCan: "3,00 €",
      shipping: "Envío gratis",         // tarifa de envío 0,00 € en el Payment Link
      multiple: true,                   // muestra "¿Más de un pack?" con 2, 3 y 4 packs
      stripeLink: null,                 // ej. "https://buy.stripe.com/xxxxxxxx"
    },
  },

  /* Zonas y plazos de entrega, se muestran ANTES de comprar.
     ej. "Enviamos a península en 48–72 h laborables." */
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
