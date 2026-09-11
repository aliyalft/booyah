import Image from "next/image";

const WA_NUMBER = "628157031751";

const menuItems = [
  {
    number: "01",
    category: "NASI BOX",
    name: "Nasi Box",
    description:
      "Paket nasi lengkap untuk acara, meeting, kumpul keluarga, dan berbagai kebutuhan.",
    price: "Mulai Rp20.000",
    image: "/images/nasi-box.jpg",
    message: "Halo Booyah! Saya mau pesan Nasi Box.",
  },
  {
    number: "02",
    category: "RICE BOWL",
    name: "Rice Bowl",
    description:
      "Praktis, mengenyangkan, dan cocok buat makan siang atau kebutuhan acara.",
    price: "Mulai Rp15.000",
    image: "/images/rice-bowl.jpg",
    message: "Halo Booyah! Saya mau pesan Rice Bowl.",
  },
  {
    number: "03",
    category: "CATERING LAUK",
    name: "Catering Lauk",
    description:
      "Pilihan lauk untuk melengkapi meja makan dan kebutuhan catering kamu.",
    price: "Mulai Rp15.000",
    image: "/images/catering-lauk.jpg",
    message: "Halo Booyah! Saya mau pesan Catering Lauk.",
  },
];

export default function KitchenSection() {
  return (
    <section className="kitchen-section" id="kitchen">
      {/* DECORATION */}
      <div className="kitchen-deco kitchen-deco-one" />
      <div className="kitchen-deco kitchen-deco-two" />
      

      <div className="kitchen-inner">
        {/* HEADER */}
        <div className="kitchen-header">
          <div className="kitchen-heading">
            <div className="kitchen-kicker">
              <span>—</span>
              <strong>BOOYAH KITCHEN</strong>
            </div>

            <h2>
              Mau makan
              <br />
              apa <span>hari ini?</span>
            </h2>
          </div>

          <div className="kitchen-intro">
            <p>
             Booyah Kitchen siap nemenin kebutuhan
            makan kamu, dari satu porsi sampai acara rame-rame.
            </p>

            
          </div>
        </div>

        {/* MENU CARDS */}
        <div className="kitchen-grid">
          {menuItems.map((item) => {
            const whatsappLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              item.message
            )}`;

            return (
              <article className="kitchen-card" key={item.name}>
                <div className="kitchen-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="kitchen-number">
                    {item.number}
                  </div>

                  <div className="kitchen-category">
                    {item.category}
                  </div>
                </div>

                <div className="kitchen-card-content">
                  <div className="kitchen-card-main">
                    <h3>{item.name}</h3>

                    <p>{item.description}</p>
                  </div>

                  <div className="kitchen-card-bottom">
                    <strong>{item.price}</strong>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Pesan ${item.name}`}
                    >
                      <span>Pesan</span>

                      <b className="message-icon">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20 3H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h3.8l3.2 3 3.2-3H20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 13H13.4l-1.4 1.3L10.6 16H4V5h16v11Z" />
                          <path d="M6 8h12v1.8H6zm0 3.5h8v1.8H6z" />
                        </svg>
                      </b>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* DISCLAIMER */}
        <div className="kitchen-disclaimer">
          Harga dapat berubah sewaktu-waktu menyesuaikan jumlah pesanan
          dan kebutuhan acara.
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="kitchen-bottom-note">
          <span className="kitchen-bottom-line" />

          <p>
            Dari <strong>makan sendiri</strong> sampai
            <strong> rame-rame.</strong>
          </p>

          <span className="kitchen-bottom-line" />
        </div>
      </div>
    </section>
  );
}