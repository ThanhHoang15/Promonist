import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Showcase from '../../components/showcase/Showcase';
import InfoDialog from '../../components/infoDialog/InfoDialog';
import type { DialogKey } from '../../components/infoDialog/dialogContent';
import './home.scss';

export default function Home() {
  const [dialog, setDialog] = useState<DialogKey | null>(null);

  return (
    <div className="home-page">
      <Navbar onOpenDialog={setDialog} />
      <main>
        <Hero />
        <Showcase />
      </main>
      {dialog && <InfoDialog dialog={dialog} onClose={() => setDialog(null)} />}
    </div>
  );
}
