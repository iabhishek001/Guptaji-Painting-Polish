import React from "react";

// =====================
// QUICK CONFIG — Edit only this object
// =====================
const cfg = {
  businessName: "Gupta Ji Painting & Polish (GJPP)",
  tagline: "Professional Painting • Wood Polish • On‑time Delivery",
  phone: "+91 7999615694",
  whatsapp: "+917999615694", // keep with country code, no spaces
  whatsappPrefill: "Hello Sir, I’m interested in your painting & polish service.",
  email: "contact@gjpp.example",
  addressLine: "Raipur, Chhattisgarh",
  googleBusinessUrl: "https://g.page/r/PLACE_ID", // ← paste your Google Business Profile URL here
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.000000!2d81.6300!3d21.2500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGupta%20Ji%20Painting%20%26%20Polish!5e0!3m2!1sen!2sin!4v1710000000000", // optional: replace with your actual map embed
  heroImages: [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1400&auto=format&fit=crop",
  ],
  galleryImages: [
    "https://images.unsplash.com/photo-1582582429416-1b2119d6b66c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582582494700-3f5b9513762d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582582428462-7d4c2b9601b9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop",
  ],
  videos: [
    // paste YouTube/TikTok/Drive share links
    { title: "Interior Wall Finish", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ],
  services: [
    { title: "Interior & Exterior Painting", desc: "Premium emulsion, enamel, and advanced textures." },
    { title: "Wood Polish & PU/DUCO", desc: "Furniture, doors, wardrobes — mirror‑finish." },
    { title: "Putty + Primer + Finishing", desc: "Smooth base, sharp lines, long‑lasting shine." },
    { title: "Waterproofing", desc: "Damp‑proofing solutions for monsoon protection." },
    { title: "Texture & Stencil", desc: "Feature walls that pop — rustic, metallic, stone." },
    { title: "Commercial Sites", desc: "Shops, offices, showrooms — fast & clean execution." },
  ],
  highlights: [
    { stat: "500+", label: "Projects" },
    { stat: "4.9★", label: "Google Rating" },
    { stat: "15+", label: "Expert Team" },
    { stat: "On‑Time", label: "Delivery" },
  ],
  faqs: [
    {
      q: "Material kaun sa use hota hai?",
      a: "Asian Paints, Nerolac, Berger jaise top brands. Client ke budget aur surface need ke hisaab se recommend karte hain.",
    },
    {
      q: "Estimate kaise milega?",
      a: "Site visit + measurements ke baad detailed quotation. WhatsApp par 24h ke andar share kar dete hain.",
    },
    {
      q: "Payment terms?",
      a: "Booking advance + stage‑wise milestones. Online/UPI supported.",
    },
  ],
};

// =====================
// Small helpers
// =====================
const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-4">
      {title && (
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm">{children}</span>
);

const WhatsAppBtn = ({ className = "" }) => (
  <a
    href={`https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(cfg.whatsappPrefill)}`}
    target="_blank"
    rel="noreferrer"
    className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 border shadow hover:shadow-md transition ${className}`}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.77 11.77 0 0 0 12 .75 11.28 11.28 0 0 0 .75 12a11.19 11.19 0 0 0 1.6 5.8L.75 23.25l5.6-1.47A11.32 11.32 0 0 0 12 23.25 11.28 11.28 0 0 0 23.25 12c0-3.16-1.24-6.13-3.48-8.52Zm-8.52 18A9.5 9.5 0 0 1 6.7 20l-.34-.2-3.32.87.9-3.2-.22-.34A9.52 9.52 0 1 1 12 21.48Zm5.43-6.88c-.3-.15-1.76-.86-2.03-.96-.27-.1-.46-.15-.65.15s-.76.96-.93 1.15c-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.74-1.65-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.35.46-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.65-1.57-.9-2.15-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.07c.15.2 2.1 3.2 5.1 4.48.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/></svg>
    WhatsApp Now
  </a>
);

export default function Website() {
  return (
    <div className="font-sans text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-300 border flex items-center justify-center font-bold">
              GJ
            </div>
            <div>
              <div className="font-bold leading-tight">{cfg.businessName}</div>
              <div className="text-xs text-gray-500 -mt-0.5">{cfg.tagline}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#gallery" className="hover:opacity-80">Gallery</a>
            <a href="#videos" className="hover:opacity-80">Videos</a>
            <a href="#reviews" className="hover:opacity-80">Reviews</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={`tel:${cfg.phone}`} className="hidden sm:inline-block px-4 py-2 rounded-xl border hover:shadow">
              Call: {cfg.phone}
            </a>
            <WhatsAppBtn />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            alt="Hero"
            src={cfg.heroImages[0]}
            className="w-full h-[52vh] md:h-[66vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <Pill>Raipur • Residential • Commercial</Pill>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              Beautiful Walls, On‑time Delivery
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              From putty to polish — end‑to‑end finishing with premium materials and a professional crew.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppBtn />
              <a
                href={cfg.googleBusinessUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border shadow hover:shadow-md"
              >
                View Photos on Google
              </a>
            </div>
            <div className="mt-6 flex gap-3 text-sm text-gray-600">
              {cfg.highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2">
                  <div className="font-semibold">{h.stat}</div>
                  <span className="text-gray-400">•</span>
                  <div>{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section id="services" title="Services" subtitle="Everything you need for a flawless finish">
        <div className="grid md:grid-cols-3 gap-6">
          {cfg.services.map((s) => (
            <div key={s.title} className="border rounded-2xl p-6 shadow-sm hover:shadow transition">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" title="Project Gallery" subtitle="Real sites • Clean execution • Sharp lines">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cfg.galleryImages.map((src, i) => (
            <div key={i} className="relative group overflow-hidden rounded-2xl border">
              <img src={src} alt={`Work ${i+1}`} className="h-56 w-full object-cover group-hover:scale-105 transition" />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a
            href={cfg.googleBusinessUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border shadow hover:shadow-md"
          >
            See More Photos on Google
          </a>
        </div>
      </Section>

      {/* VIDEOS */}
      <Section id="videos" title="Videos" subtitle="Walkthroughs, textures & time‑lapses">
        <div className="grid md:grid-cols-2 gap-6">
          {cfg.videos.map((v) => (
            <div key={v.url} className="aspect-video w-full rounded-2xl overflow-hidden border">
              <iframe
                className="w-full h-full"
                src={v.url}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section id="reviews" title="Client Reviews" subtitle="What people say about GJPP">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border p-6 shadow-sm">
              <div className="flex items-center gap-2 text-amber-500">★★★★★</div>
              <p className="mt-3 text-gray-700">“Professional team, smooth finishing, and on‑time completion. Highly recommended!”</p>
              <div className="mt-4 text-sm text-gray-500">Verified Google Review</div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a
            href={cfg.googleBusinessUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border shadow hover:shadow-md"
          >
            Read All Reviews on Google
          </a>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ" subtitle="Most‑asked questions, answered">
        <div className="space-y-4">
          {cfg.faqs.map((f) => (
            <details key={f.q} className="group border rounded-2xl p-5">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact & Location" subtitle="Book a site visit or get a free estimate">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="font-semibold">Reach us</h3>
            <div className="mt-3 space-y-2 text-gray-700">
              <div><span className="font-medium">Phone: </span><a className="underline" href={`tel:${cfg.phone}`}>{cfg.phone}</a></div>
              <div><span className="font-medium">WhatsApp: </span><a className="underline" href={`https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(cfg.whatsappPrefill)}`} target="_blank" rel="noreferrer">Chat now</a></div>
              <div><span className="font-medium">Email: </span><a className="underline" href={`mailto:${cfg.email}`}>{cfg.email}</a></div>
              <div><span className="font-medium">Address: </span>{cfg.addressLine}</div>
              <div className="pt-2">
                <a href={cfg.googleBusinessUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border shadow hover:shadow-md">Open on Google</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border">
            <iframe
              src={cfg.mapEmbedUrl}
              style={{ border: 0, width: "100%", height: 360 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="GJPP Map"
            />
          </div>
        </div>
      </Section>

      {/* CTA STRIP */}
      <section className="bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Ready to transform your space?</h3>
            <p className="text-gray-700">Talk to our expert today for a free site visit & quote.</p>
          </div>
          <div className="flex gap-3">
            <a href={`tel:${cfg.phone}`} className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border shadow hover:shadow-md">Call Now</a>
            <WhatsAppBtn />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-10 text-sm text-gray-600 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {cfg.businessName}. All rights reserved.</div>
          <div className="flex flex-wrap gap-3">
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#videos">Videos</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
