import Image from "next/image";

const WA_NUMBER = "628157031751";

export default function Hero() {
  const whatsappLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Halo Booyah! Saya mau pesan."
  )}`;

  return (
    <section className="hero" id="home">
      <div className="hero-decoration hero-decoration-two" />

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            BATAGOR BOOYAH × BOOYAH KITCHEN
          </div>

          <h1>
            Bikin makan
            <br />
            jadi lebih <span>BOOYAH.</span>
          </h1>

          <p className="hero-description">
            Dari batagor premium berbahan 100% ikan tenggiri sampai pilihan
            catering untuk berbagai momen. Dibuat dengan bahan pilihan,
            disajikan dengan rasa yang bikin balik lagi.
          </p>

          {/* BUTTON DESKTOP */}
          <div className="hero-actions hero-actions-desktop">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Pesan Sekarang
            </a>

            <a href="#batagor" className="btn-secondary">
              Lihat Menu
            </a>
          </div>

          
            
          
        </div>

        <div className="hero-visual">
          <div className="hero-yellow-shape" />

          <div className="hero-image-wrap">
            <Image
              src="/images/batagor-hero2.png"
              alt="Batagor Booyah"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 48vw"
              className="hero-food-image"
            />
          </div>

          <div className="hero-sticker hero-sticker-top">
            <span>100%</span>
            <small>
              IKAN
              <br />
              TENGGIRI
            </small>
          </div>

          <div className="hero-sticker hero-sticker-bottom">
            <span>✦</span>
            <strong>
              MAKAN
              <br />
              ENAK!
            </strong>
          </div>

          <div className="hero-circle-text">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path
                  id="circlePath"
                  d="M 60,60 m -43,0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
                />
              </defs>

              <text>
                <textPath href="#circlePath">
                  BOOYAH • BOOYAH • BOOYAH •
                </textPath>
              </text>
            </svg>

            <span>✦</span>
          </div>
        </div>

        {/* BUTTON MOBILE */}
        <div className="hero-actions hero-actions-mobile">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Pesan Sekarang
          </a>

          <a href="#batagor" className="btn-secondary">
            Lihat Menu
          </a>
        </div>
      </div>
    </section>
  );
}