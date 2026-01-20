import React, { useState, useEffect, useCallback } from 'react';
import StatusBar from './components/StatusBar';
import TerminalWindow from './components/TerminalWindow';
import { SLIDES } from './constants';

const App: React.FC = () => {
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  const [showHelp, setShowHelp] = useState<boolean>(true);

  const currentSlide = SLIDES.find(s => s.id === currentSlideId) || SLIDES[0];

  // Handler for changing slides
  const changeSlide = useCallback((newId: number) => {
    if (newId >= 1 && newId <= SLIDES.length) {
      setCurrentSlideId(newId);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'l' ) {
        changeSlide(currentSlideId + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'h') {
        changeSlide(currentSlideId - 1);
      } else if (e.key === 'Escape') {
        setShowHelp(false);
      } else if (parseInt(e.key) >= 1 && parseInt(e.key) <= 9) {
          // Map key to slide index if within range
          const targetId = parseInt(e.key);
          if (targetId <= SLIDES.length) {
             changeSlide(targetId);
          }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideId, changeSlide]);

  // Clean title for terminal path display: "1: Title Page" -> "title_page"
  const cleanTitle = currentSlide.title.includes(':') 
    ? currentSlide.title.split(':')[1].trim().toLowerCase().replace(/\s+/g, '_')
    : currentSlide.title.toLowerCase().replace(/\s+/g, '_');

  return (
    <div className="h-screen w-screen flex flex-col pt-6 bg-[#222]">
      {/* i3 Status Bar */}
      <StatusBar 
        currentSlideId={currentSlideId} 
        slides={SLIDES} 
        onSlideChange={changeSlide}
      />

      {/* Main Workspace Area - Expanded to full width */}
      <div className="flex-1 p-2 overflow-hidden">
        <div className="h-full w-full">
          <TerminalWindow 
            title={`~/${cleanTitle}`} 
            isActive={true}
          >
            {currentSlide.content}
          </TerminalWindow>
        </div>
      </div>

      {/* Floating Help Modal (First Load) */}
      {showHelp && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] border-2 border-yellow-600 p-6 z-50 shadow-2xl max-w-sm w-full">
            <h3 className="text-yellow-500 font-bold mb-4 text-lg">WELCOME TO ARCH_PREZ</h3>
            <p className="text-sm text-gray-300 mb-4">
                This presentation environment mimics the <strong>i3 window manager</strong>.
            </p>
            <ul className="text-xs text-gray-400 space-y-2 mb-6 font-mono">
                <li><span className="bg-gray-700 text-white px-1">Arrow Left/Right</span> or <span className="bg-gray-700 text-white px-1">h/l</span> to navigate slides.</li>
                <li><span className="bg-gray-700 text-white px-1">Click Buttons</span> on top bar to jump workspaces.</li>
            </ul>
            <button 
                onClick={() => setShowHelp(false)}
                className="w-full bg-yellow-700 hover:bg-yellow-600 text-black font-bold py-2 text-sm"
            >
                [ ACKNOWLEDGE ]
            </button>
        </div>
      )}
    </div>
  );
};

export default App;