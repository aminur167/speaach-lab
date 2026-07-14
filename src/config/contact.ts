/**
 * Central contact configuration.
 *
 * ── HOW TO CHANGE PHONE / WHATSAPP ────────────────────────────────
 * Edit the values below. Everything on the website
 * (header, footer, floating buttons, mobile menu) updates automatically.
 *
 * `phoneIntl`     → international format used for tel: links (digits only, with country code)
 * `phoneDisplay`  → what visitors see on the page
 * `whatsappNumber`→ digits only, with country code, no +  (used to build wa.me link)
 * `whatsappMessage` → optional pre-filled greeting
 */

export const contact = {
  phoneIntl: "+8801778995001",
  phoneDisplay: "+880 1778-995001",
  whatsappNumber: "8801778995001",
  whatsappMessage: "Hello Therapy Lab, I would like to know more about your services.",
  email: "info@therapylabonline.com",
  emergencyPhone: "999",
};

export const telHref = `tel:${contact.phoneIntl.replace(/\s|-/g, "")}`;
export const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;
