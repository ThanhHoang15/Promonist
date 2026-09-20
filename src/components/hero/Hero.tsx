import './hero.scss';

export default function Hero() {
  return (
    <section className="intro" aria-labelledby="what-we-do">
      <div className="section-heading section-heading--intro">
        <h1 id="what-we-do"><span className="section-heading__boxed">WHAT</span> WE DO?</h1>
        <span className="section-heading__rule" aria-hidden="true" />
      </div>

      <img
        className="intro__illustration"
        src="/images/hero.webp"
        width="1849"
        height="851"
        alt="Colorful illustration of a pizza shop, burger shop, noodle restaurant, and taco shop, with examples of social media promotions"
        fetchPriority="high"
      />

      <p className="intro__description">
        Promonist helps small local businesses get more customers by making online promotion<br className="desktop-break" />
        {' '}simple. Upload your product photos, create eye-catching promotional content with AI,<br className="desktop-break" />
        {' '}and share it across the platforms your customers use most—all from one place.
      </p>
      <div className="intro__underline" aria-hidden="true" />
    </section>
  );
}
