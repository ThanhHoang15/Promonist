import { useEffect, useRef } from 'react';
import { dialogCopy, type DialogKey } from './dialogContent';
import './infoDialog.scss';

type InfoDialogProps = {
  dialog: DialogKey;
  onClose: () => void;
};

export default function InfoDialog({ dialog, onClose }: InfoDialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      // Prevent keyboard focus moving behind this simple modal.
      if (event.key === 'Tab') {
        const buttons = document.querySelectorAll<HTMLButtonElement>('.info-dialog button:not(:disabled)');
        const first = buttons.item(0);
        const last = buttons.item(buttons.length - 1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="info-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-heading" aria-describedby="dialog-description">
        <button ref={closeButtonRef} className="info-dialog__close" type="button" aria-label="Close dialog" onClick={onClose}>×</button>
        <img src="/images/promonist-logo.png" alt="" width="148" height="45" />
        <h2 id="dialog-heading">{dialogCopy[dialog].title}</h2>
        <p id="dialog-description">{dialogCopy[dialog].description}</p>
        <button className="info-dialog__done" type="button" onClick={onClose}>Got it</button>
      </section>
    </div>
  );
}
