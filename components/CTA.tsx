const WA_NUMBER = "628157031751";

const whatsappLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo Booyah! Saya mau pesan."
)}`;

const instagramLink = "https://instagram.com/batagorbooyah";

const mapsLink =
  "https://maps.app.goo.gl/2WrL8Vwk5RBcfG8b8?g_st=ic";

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-shape cta-shape-one" />
      <div className="cta-shape cta-shape-two" />
     

      <div className="cta-inner">
        {/* HEADING */}
        <div className="cta-heading">
          <div className="cta-kicker">
            <span>✦</span>
            <strong>LET'S BOOYAH</strong>
          </div>

          <h2>
            Lagi pengen
            <br />
            <span>makan enak?</span>
          </h2>

          <p>
            Batagor buat ngemil, nasi box buat acara,
            atau catering buat rame-rame. Yuk, makan
            enak bareng Booyah.
          </p>
        </div>

        {/* CONTACT + MAP */}
        <div className="cta-content">
          {/* LEFT */}
          <div className="cta-left">
            <div className="cta-section-label">
              <span />
              HUBUNGI KAMI
            </div>

            <div className="cta-contact-list">
              {/* WHATSAPP */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-contact-item"
              >
                <div className="cta-contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 11.5a8.5 8.5 0 0 1-12.8 7.35L4 20l1.15-3.2A8.5 8.5 0 1 1 20 11.5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 9.5c.2 1.5 1.5 3.2 3 4.1 1.2.8 2.2 1.1 3 1.1"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="cta-contact-text">
                  <small>WhatsApp</small>
                  <strong>0815 7031 751</strong>
                </div>

                <span className="cta-contact-circle">↗︎</span>
              </a>

              {/* INSTAGRAM */}
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-contact-item"
              >
                <div className="cta-contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="3.5"
                      y="3.5"
                      width="17"
                      height="17"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="17.4"
                      cy="6.8"
                      r="1"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="cta-contact-text">
                  <small>Instagram</small>
                  <strong>@batagorbooyah</strong>
                </div>

                <span className="cta-contact-circle">↗︎</span>
              </a>

              {/* OPERASIONAL */}
              <div className="cta-contact-item cta-contact-static">
                <div className="cta-contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 7.5V12l3 2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="cta-contact-text">
                  <small>Jam Operasional</small>
                  <strong>09.00 – 19.00 WIB</strong>
                </div>
              </div>
            </div>

            
          </div>

          {/* RIGHT — MAP */}
          <div className="cta-right">
            <div className="cta-section-label">
              <span />
              TEMUI KAMI
            </div>

            <div className="cta-map-card">
              <div className="cta-map-frame">
                <iframe
                  src="https://www.google.com/maps?q=Batagor%20Booyah&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Batagor Booyah"
                />
              </div>

              <div className="cta-map-info">
                <div>
                  <small>GOOGLE MAPS</small>
                  <strong>Batagor Booyah</strong>
                </div>

                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-map-link"
                >
                  Buka Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="cta-bottom">
          <i>✦</i>
          <span>GOOD FOOD, GOOD MOOD.</span>
          <i>✦</i>
        </div>
      </div>
    </section>
  );
}