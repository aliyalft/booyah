export default function WhyUs() {
  const testimonials = [
    {
      number: "01",
      text: "pembelian kedua masih sama dalam rasa, kualitas, dan pelayanan. semua enak dan baik",
      label: "REPEAT CUSTOMER",
    },
    {
      number: "02",
      text: "enak banget batagornya isinya bukan yang aci doang, enggak kalah sama yang mahal",
      label: "BATAGOR LOVER",
    },
  ];

  return (
    <section className="why-section" id="why-us">
      <div className="why-decor why-decor-one" />
      <div className="why-decor why-decor-two" />
     

      <div className="why-inner">
        {/* HEADER */}
        <div className="why-header">
          <div className="why-heading">
            <span className="why-label">
              <b>✦</b>
              WHAT THEY SAY
            </span>

            <h2>
              Bukan cuma
              <br />
              kami yang <span>bilang.</span>
            </h2>
          </div>

          <div className="why-intro">
            <div className="why-quote-mark">“</div>

            <p>
              Yang paling bikin senang bukan cuma makanan yang habis,
              tapi ketika orang balik lagi dan cerita kalau mereka suka.
            </p>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article
              className={`testimonial-card testimonial-card-${testimonial.number}`}
              key={testimonial.number}
            >
              <div className="testimonial-top">
                <span className="testimonial-number">
                  {testimonial.number}
                </span>

                <div className="testimonial-stars" aria-label="5 stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>

              <div className="testimonial-content">
                <div className="testimonial-quote">
                  “
                </div>

                <p>{testimonial.text}</p>
              </div>

              <div className="testimonial-bottom">
                <span>{testimonial.label}</span>

                <div className="testimonial-mini-mark">
                  <span>booyah</span>
                  <b>!</b>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="why-footer">
          <div className="why-footer-line" />

          <div className="why-footer-copy">
            
            <span>HAPPY CUSTOMER</span>
            
            
          </div>

          <div className="why-footer-line" />
        </div>
      </div>
    </section>
  );
}