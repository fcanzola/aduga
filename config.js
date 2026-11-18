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
  /* shopOpen: true  = se muestran los packs con precio.
               false = bloque "¿Quieres ADUGA en casa? Escríbenos".
     orderMode: "whatsapp" = cada botón abre WhatsApp con el pedido ya escrito.
                "stripe"   = cada botón va a su Payment Link de Stripe. */
  shopOpen: true,
  orderMode: "whatsapp",

  packs: {
    /* Precios con IVA incluido, 3 €/lata (ver doc "Pricing" del proyecto). */
    pack6: {
      price: "18,00 €",
      perCan: "3,00 €",
      shipping: "+ 2 € de entrega · solo dentro de la M-30",
      waMessage: "¡Hola! Quiero un pack de 6 latas de ADUGA (18 € + 2 € de entrega).\nMi dirección de entrega (dentro de la M-30) es: ",
      stripeLink: null,
    },
    pack12: {
      price: "36,00 €",
      perCan: "3,00 €",
      shipping: "Envío gratis a toda España",
      waMessage: "¡Hola! Quiero un pack de 12 latas de ADUGA (36 €, envío gratis).\nMi dirección de envío es: ",
      stripeLink: "https://buy.stripe.com/test_14A5kC0vU0uE0IidsdcIE00",   // SANDBOX (test), solo con orderMode "stripe"
    },
    pack24: {
      price: "72,00 €",
      perCan: "3,00 €",
      shipping: "Envío gratis a toda España",
      waMessage: "¡Hola! Quiero un pack de 24 latas de ADUGA (72 €, envío gratis).\nMi dirección de envío es: ",
      stripeLink: "https://buy.stripe.com/test_dRm7sK1zY5OY3UudsdcIE01",   // SANDBOX (test), solo con orderMode "stripe"
    },
  },

  /* Zonas y plazos de entrega, se muestran ANTES de comprar.
     ej. "Enviamos a península en 48–72 h laborables." */
  shipping: "Pack de 6: entrega en mano dentro de la M-30. Packs de 12 y 24: envío gratis a toda España por Correos.",
  payment: "Bizum o efectivo. En efectivo solo en entregas en mano en Madrid.",

  /* ---------- Contacto ---------- */
  email: "federica@aduga.co",
  instagram: "https://www.instagram.com/drinkaduga/", // handle tomado de las piezas de marca (@drinkaduga) — verifícalo
  tiktok: "https://www.tiktok.com/@drinkaduga",
  whatsapp: "+34650528538",                           // se enlaza como https://wa.me/34650528538

  /* ---------- Puntos de venta en Madrid ----------
     Solo tiendas confirmadas. Si la lista está vacía, la sección
     muestra el texto + botón de compra, sin tarjetas vacías.
     Formato:
     { name: "Nombre de la tienda", area: "Malasaña · C/ Ejemplo 12", mapsUrl: "https://maps.app.goo.gl/..." },
  */
  locations: [
    { name: "Underground", area: "Cafetería de la EOI Jesús Maestro · C/ Jesús Maestro s/n, Chamberí", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Escuela+Oficial+de+Idiomas+Jes%C3%BAs+Maestro+Madrid" },
    { name: "BRUTA Café", area: "Salamanca · C/ del Conde de Peñalver, 62", mapsUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0xd422916fc7fe909:0x9c1e7d5941302414" },
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
