import LagebersichtPanel from './components/LagebersichtPanel';
import Funktionsumfang from './components/Funktionsumfang';
import Integrationskontext from './components/Integrationskontext';
import Betriebskontext from './components/Betriebskontext';
import DemoBuchung from './components/DemoBuchung';

export default function App() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0.012_240)] text-[oklch(0.92_0.008_240)]">
      <main>
        <LagebersichtPanel />
        <Funktionsumfang />
        <Integrationskontext />
        <Betriebskontext />
        <DemoBuchung />
      </main>
    </div>
  );
}
