import BeforeAfter from '../beforeAfter/BeforeAfter';
import { comparisons } from '../../data/comparisons';
import './showcase.scss';

export default function Showcase() {
  return (
    <section className="showcase" id="how-it-works" aria-labelledby="showcase-heading">
      <h2 id="showcase-heading">TURN PHONE PHOTO INTO STUDIO IMAGE</h2>
      <div className="showcase__grid">
        {comparisons.map((comparison, index) => (
          <BeforeAfter key={comparison.name} {...comparison} priority={index < 2} />
        ))}
      </div>
      <p className="showcase__description">
        Don’t let a bad photo hurt your business. Your food deserves to look as good online as it does in<br className="desktop-break" />
        {' '}person. Make simple phone photos look polished, fresh, and ready to attract more customers.
      </p>
    </section>
  );
}
