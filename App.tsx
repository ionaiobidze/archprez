import React, { useState, useEffect, useCallback } from 'react';
import StatusBar from './components/StatusBar';
import TerminalWindow from './components/TerminalWindow';
import { SLIDES } from './constants';

const App: React.FC = () => {
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  
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

    </div>
  );
};

export default App;