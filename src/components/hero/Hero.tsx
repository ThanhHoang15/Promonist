import './hero.scss';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="what-we-do">
      <div className="section-title hero-title">
        <h1 id="what-we-do"><span className="title-box">WHAT</span> WE DO?</h1>
        <span className="title-line" aria-hidden="true" />
      </div>

      <img
        className="hero-image"
        src="/images/hero.webp"
        width="1849"
        height="851"
        alt="Colorful illustration of a pizza shop, burger shop, noodle restaurant, and taco shop, with examples of social media promotions"
        fetchPriority="high"
      />

      <p className="hero-description">
        Promonist helps small local businesses get more customers by making online promotion<br className="desktop-break" />
        {' '}simple. Upload your product photos, create eye-catching promotional content with AI,<br className="desktop-break" />
        {' '}and share it across the platforms your customers use most—all from one place.
      </p>
      <div className="hero-underline" aria-hidden="true" />
    </section>
  );
}
