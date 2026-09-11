import Image from "next/image";

const WA_NUMBER = "628157031751";

const whatsappLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo Booyah! Saya mau konsultasi catering untuk acara saya."
)}`;

const eventTypes = [
  "Meeting",
  "Arisan",
  "Pengajian",
  "Acara Keluarga",
  "Birthday",
  "Event",
];

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="catering-whatsapp-svg"
    >
      <path
        d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.49 0 .15 5.34.15 11.91c0 2.1.55 4.15 1.59 5.96L.05 24l6.27-1.64a11.87 11.87 0 0 0 5.73 1.47h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.23-6.17-3.44-8.44ZM12.06 21.67h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.72.98.99-3.63-.23-.37a9.83 9.83 0 1 1 8.34 4.6Zm5.39-7.37c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.73.93-.9 1.12-.16.2-.33.22-.61.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.49.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.08-.15-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5h-.55c-.19 0-.49.07-.75.37-.26.29-.99.97-.99 2.37s1.01 2.75 1.15 2.94c.14.2 1.99 3.04 4.82 4.26.67.29 1.19.46 1.59.59.67.21 1.28.18 1.76.11.54-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z"
      />
    </svg>
  );
}

export default function CateringSection() {
  return (
    <section className="catering-section" id="catering">
      <div className="catering-decor catering-decor-one" />
      <div className="catering-decor catering-decor-two" />
      

      <div className="catering-inner">
        {/* =========================
            VISUAL
        ========================= */}
        <div className="catering-visual">
          <div className="catering-photo">
            <Image
              src="/images/catering-1.jpeg"
              alt="Booyah Kitchen catering"
              fill
              sizes="(max-width: 900px) 90vw, 48vw"
            />

            <div className="catering-photo-caption">
              <span>BOOYAH</span>
              <strong>KITCHEN</strong>
            </div>
          </div>

          <div className="catering-sticker">
            <span>✦</span>
            <strong>
              MADE
              <br />
              FOR YOUR
              <br />
              EVENT.
            </strong>
          </div>
        </div>

        {/* =========================
            CONTENT
        ========================= */}
        <div className="catering-content">
          <div className="catering-kicker">
            <span className="catering-kicker-star">✦</span>
            <span>CUSTOM CATERING</span>
            
          </div>

          <h2>
            Punya acara?
            <br />
            Biar makanannya
            <br />
            <span>Booyah yang handle.</span>
          </h2>

          <p className="catering-lead">
            Meeting, pengajian, arisan, birthday, sampai acara keluarga.
            Kasih tahu kebutuhan dan jumlah orangnya, kami bantu siapkan
            pilihan menu yang sesuai.
          </p>

          {/* EVENT TYPES */}
          <div className="catering-events-wrap">
            <div className="catering-events-label">
              <span>COCOK UNTUK</span>
              <i />
            </div>

            <div className="catering-event-list">
              {eventTypes.map((event, index) => (
                <span key={event}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  {event}
                </span>
              ))}
            </div>
          </div>

          {/* INFO CARDS */}
          <div className="catering-info-grid">
            <div className="catering-info-card catering-info-price">
              <span>STARTING FROM</span>

              <strong>
                Rp15.000
                <small>/pax</small>
              </strong>

              <p>Sesuaikan dengan kebutuhan acara.</p>
            </div>

            <div className="catering-info-card catering-info-custom">
              <span>FLEXIBLE</span>

              <strong>
                Menu & Jumlah
              </strong>

              <p>Bisa disesuaikan dengan kebutuhan.</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="catering-cta"
          >
            <div className="catering-cta-copy">
              <span>Butuh catering untuk acara?</span>
              <strong>Konsultasi via WhatsApp</strong>
            </div>

            <div className="catering-cta-icon">
              <WhatsAppIcon />
            </div>
          </a>

          
        </div>
      </div>
    </section>
  );
}