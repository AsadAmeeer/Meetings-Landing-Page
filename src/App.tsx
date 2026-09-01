import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MainLayoutShowcase } from './components/MainLayoutShowcase';
import { ProblemSection } from './components/ProblemSection';
import { CaptureModes } from './components/CaptureModes';
import { AIIntelligence } from './components/AIIntelligence';
import { AttendanceSection } from './components/AttendanceSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { CompetitorSection } from './components/CompetitorSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { InstantMeetingModal } from './components/InstantMeetingModal';
import { SendBotModal } from './components/SendBotModal';

export function App() {
  const [isInstantMeetingOpen, setIsInstantMeetingOpen] = useState(false);
  const [isSendBotOpen, setIsSendBotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-purple-200 selection:text-purple-950">
      {/* Navigation Header */}
      <Navbar 
        onOpenInstantMeeting={() => setIsInstantMeetingOpen(true)}
        onOpenSendBot={() => setIsSendBotOpen(true)}
      />

      <main>
        {/* Hero Section with 3D Laptop & Neon Halo Ring */}
        <Hero 
          onOpenInstantMeeting={() => setIsInstantMeetingOpen(true)}
          onOpenSendBot={() => setIsSendBotOpen(true)}
        />

        {/* Middle Floating Container & 3-Phone Layout matching new reference image */}
        <MainLayoutShowcase 
          onOpenInstantMeeting={() => setIsInstantMeetingOpen(true)}
          onOpenSendBot={() => setIsSendBotOpen(true)}
        />

        {/* Section 4: Problem Section */}
        <ProblemSection />

        {/* Section 5: The 3 Capture Modes */}
        <CaptureModes 
          onOpenInstantMeeting={() => setIsInstantMeetingOpen(true)}
          onOpenSendBot={() => setIsSendBotOpen(true)}
        />

        {/* Section 6: AI Meeting Intelligence Engine */}
        <AIIntelligence />

        {/* Section 7: Team Accountability & Attendance */}
        <AttendanceSection />

        {/* Section 8: TCO Savings Calculator */}
        <SavingsCalculator />

        {/* Section 9: Competitor Section */}
        <CompetitorSection />

        {/* Section 10: Our Unfair Advantages */}
        <AdvantagesSection />

        {/* Section 11: FAQ Section */}
        <FAQSection />

        {/* Section 12: Final CTA */}
        <FinalCTA 
          onOpenInstantMeeting={() => setIsInstantMeetingOpen(true)}
          onOpenSendBot={() => setIsSendBotOpen(true)}
        />
      </main>

      {/* Section 13: Footer */}
      <Footer />

      {/* Interactive Modals */}
      <InstantMeetingModal 
        isOpen={isInstantMeetingOpen}
        onClose={() => setIsInstantMeetingOpen(false)}
      />

      <SendBotModal 
        isOpen={isSendBotOpen}
        onClose={() => setIsSendBotOpen(false)}
      />
    </div>
  );
}

export default App;
