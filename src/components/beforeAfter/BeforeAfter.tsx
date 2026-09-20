import { useId, useState } from 'react';
import type { CSSProperties } from 'react';
import './beforeAfter.scss';

type BeforeAfterProps = {
  before: string;
  after: string;
  name: string;
  priority?: boolean;
};

type SplitStyle = CSSProperties & { '--split': string };

/**
 * Accessible before/after comparison. Drag anywhere on the photo, use the
 * slider, or focus the slider and use arrow keys to reveal the result.
 */
export default function BeforeAfter({ before, after, name, priority = false }: BeforeAfterProps) {
  const [value, setValue] = useState(50);
  const sliderId = useId();

  return (
    <div className="comparison" style={{ '--split': `${value}%` } as SplitStyle}>
      <img
        className="comparison-image image-before"
        src={before}
        alt={`${name} photographed on a phone, before enhancement`}
        loading={priority ? 'eager' : 'lazy'}
        draggable="false"
      />
      <img
        className="comparison-image image-after"
        src={after}
        alt={`${name} after promotional photo enhancement`}
        loading={priority ? 'eager' : 'lazy'}
        draggable="false"
      />
      <div className="comparison-divider" aria-hidden="true" />
      <div className="comparison-handle" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="29" height="29" fill="none">
          <path d="m15 13-7 7 7 7M25 13l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="comparison-label label-before" aria-hidden="true">Before</span>
      <span className="comparison-label label-after" aria-hidden="true">After</span>
      <label className="sr-only" htmlFor={sliderId}>{name}: move the slider to compare the before and after photos</label>
      <input
        id={sliderId}
        className="comparison-slider"
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        aria-valuetext={`${value} percent of the enhanced photo revealed`}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </div>
  );
}
