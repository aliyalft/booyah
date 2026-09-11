import Image from "next/image";

const WA_NUMBER = "628157031751";

const whatsappLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo Booyah! Saya mau pesan Batagor Booyah 5 pcs / pax."
)}`;

export default function BatagorSection() {
  return (
    <section className="batagor-section" id="batagor">
      <div className="batagor-inner">

        {/* HEADER */}
        <div className="batagor-header">
          <div>
            <div className="section-kicker">
              — OUR SIGNATURE
            </div>

            <h2>
              Ini yang bikin
              <br />
              <span>Booyah.</span>
            </h2>
          </div>

          <p>
            Batagor premium yang dibuat dari 100% ikan tenggiri segar.
            Gurih, lembut di dalam, renyah di luar — cocok buat ngemil,
            sharing, atau dibawa pulang.
          </p>
        </div>

        {/* FEATURED PRODUCT */}
        <div className="batagor-featured">

          {/* FOTO */}
          <div className="batagor-main-photo">
            <Image
              src="/images/batagor-3.jpg"
              alt="Batagor Booyah"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
            />

            <div className="batagor-photo-badge">
              <span>✦</span>
              BEST
              <br />
              SELLER
            </div>

            <div className="batagor-photo-label">
              100% IKAN TENGGIRI
            </div>
          </div>

          {/* CONTENT */}
          <div className="batagor-product-info">

            <div className="product-number">
              <span>01</span>
              <span>SIGNATURE</span>
            </div>

            <h3>
              Batagor
              <br />
              Booyah
            </h3>

            <p>
              Dibuat menggunakan 100% ikan tenggiri segar dan bahan
              pilihan untuk menghasilkan batagor yang gurih, wangi,
              dan punya tekstur yang pas.
            </p>

            <div className="product-meta">
              <div>
                <span>ISI</span>
                <strong>5 pcs / pax</strong>
              </div>

              <div>
                <span>HARGA</span>
                <strong>Rp35.000</strong>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="batagor-order"
            >
              <span>Pesan Batagor</span>

              <span className="whatsapp-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.88 11.88 0 0 0 5.73 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.44ZM12.07 21.86h-.01a9.91 9.91 0 0 1-5.05-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.9 9.9 0 1 1 8.39 4.62Zm5.44-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </span>
            </a>

          </div>
        </div>

        
        {/* MINI GALLERY */}
        <div className="batagor-gallery">

          <div className="batagor-gallery-item">
            <Image
              src="/images/batagor-2.jpg"
              alt="Batagor Booyah"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="batagor-gallery-item">
            <Image
              src="/images/batagor-1.jpg"
              alt="Batagor Booyah"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="batagor-gallery-item gallery-text">
            <span>BOOYAH!</span>

            <small>
              Made with
              <br />
              good ingredients.
            </small>

            <div className="gallery-text-star">✦</div>
          </div>

        </div>

      </div>

      {/* DECORATION */}
      <div className="batagor-decoration batagor-decoration-one" />
      <div className="batagor-decoration batagor-decoration-two" />

    </section>
  );
}