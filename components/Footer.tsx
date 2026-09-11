const WA_NUMBER = "628157031751";

const whatsappLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo Booyah! Saya mau pesan."
)}`;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
                booyah<span>!</span>
            </a>

            <p>
                Good food, good mood.
                <br />
                Dibuat untuk setiap momen.
            </p>

            <div className="footer-brand-logos">
                <img
                src="/images/logo-batagor.jpg"
                alt="Batagor Booyah"
                />

                <span>×</span>

                <img
                src="/images/logo-kitchen.jpg"
                alt="Booyah Kitchen"
                />
            </div>
            </div>

          <div className="footer-column">
            <span className="footer-heading">EXPLORE</span>

            <a href="#about">About</a>
            <a href="#batagor">Batagor</a>
            <a href="#kitchen">Kitchen</a>
            <a href="#catering">Catering</a>
          </div>

          <div className="footer-column">
            <span className="footer-heading">ORDER</span>

            <a href="#batagor">Batagor Booyah</a>
            <a href="#kitchen">Nasi Box</a>
            <a href="#kitchen">Rice Bowl</a>
            <a href="#catering">Custom Catering</a>
          </div>

          <div className="footer-column footer-contact">
            <span className="footer-heading">SAY HELLO</span>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
              
            </a>

            <a
              href="https://instagram.com/batagorbooyah"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              
            </a>

            <a
              href="https://maps.app.goo.gl/2WrL8Vwk5RBcfG8b8?g_st=ic"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
              
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BOOYAH</span>

          

          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}