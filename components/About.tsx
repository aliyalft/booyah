import Image from "next/image";

export default function About() {
  return (
    <section className="about-section" id="about">
      {/* Decorative elements */}
      <div className="about-blob about-blob-one" />
      <div className="about-blob about-blob-two" />
      
      <div className="about-ring" />

      <div className="about-inner">

        {/* =========================
            HEADER
        ========================= */}

        <div className="about-top">

          <div className="about-heading">
            <div className="about-kicker">
            <span>— ABOUT BOOYAH</span>
            </div>

            <h2>
              Satu dapur,
              <br />
              <span>dua cara</span> bikin
              <br />
              hari lebih enak.
            </h2>
          </div>


          <div className="about-story">
            <span className="about-story-label">
              THE BOOYAH STORY
            </span>

            <p className="about-lead">
             Booyah hadir dengan makanan enak yang siap menemani berbagai momen.
            </p>

            <p className="about-text">
              Dari batagor premium berbahan 100% ikan tenggiri segar, sampai nasi box, rice bowl, dan catering untuk kebutuhan sehari-hari maupun berbagai acara.
            </p>
          </div>

        </div>


        <div className="about-brands">

  <a
    href="#batagor"
    className="brand-card brand-card-red"
  >
    <div className="brand-card-logo">
      <Image
        src="/images/logo-batagor.jpg"
        alt="Batagor Booyah"
        width={80}
        height={80}
      />
    </div>

    <div className="brand-card-info">
      <span>SIGNATURE</span>
      <h3>Batagor Booyah</h3>
    </div>

    <div className="brand-card-arrow">
      <span>Lihat menu</span>
    </div>
  </a>

  <a
    href="#kitchen"
    className="brand-card brand-card-yellow"
  >
    <div className="brand-card-logo">
      <Image
        src="/images/logo-kitchen.jpg"
        alt="Booyah Kitchen"
        width={80}
        height={80}
      />
    </div>

    <div className="brand-card-info">
      <span>KITCHEN</span>
      <h3>Booyah Kitchen</h3>
    </div>

    <div className="brand-card-arrow">
      <span>Lihat menu</span>
    </div>
  </a>

</div>

        {/* =========================
            SMALL BRAND STATEMENT
        ========================= */}

        <div className="about-statement">

          

          <p>
            Dari ngemil santai sampai acara ramai,
            <strong> Booyah siap nemenin.</strong>
          </p>

          

        </div>

      </div>


      <div className="about-bottom">
  <div className="about-marquee">
    <div className="about-marquee-track">

      {/* SET 1 */}
      <div className="about-marquee-set">
        <span>GOOD FOOD</span>
        <i>✦</i>
        <span>GOOD MOOD</span>
        <i>✦</i>
        <span>BOOYAH MOMENT</span>
        <i>✦</i>
        <span>GOOD FOOD</span>
        <i>✦</i>
        <span>GOOD MOOD</span>
        <i>✦</i>
        <span>BOOYAH MOMENT</span>
        <i>✦</i>
      </div>

      {/* SET 2 — DUPLICATE */}
      <div className="about-marquee-set" aria-hidden="true">
        <span>GOOD FOOD</span>
        <i>✦</i>
        <span>GOOD MOOD</span>
        <i>✦</i>
        <span>BOOYAH MOMENT</span>
        <i>✦</i>
        <span>GOOD FOOD</span>
        <i>✦</i>
        <span>GOOD MOOD</span>
        <i>✦</i>
        <span>BOOYAH MOMENT</span>
        <i>✦</i>
      </div>

    </div>
  </div>
</div>

    </section>
  );
}