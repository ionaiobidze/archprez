import React, { useEffect, useState } from 'react';
import { Wifi, Battery, Volume2, Clock, Maximize2, Minimize2 } from 'lucide-react';
import { SlideData } from '../types';

interface StatusBarProps {
  currentSlideId: number;
  slides: SlideData[];
  onSlideChange: (id: number) => void;
}

const StatusBar: React.FC<StatusBarProps> = ({ currentSlideId, slides, onSlideChange }) => {
  const [time, setTime] = useState(new Date());
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="h-6 bg-black text-xs flex justify-between items-center px-1 select-none font-mono fixed top-0 left-0 w-full z-50">
      {/* Workspaces (Slides) */}
      <div className="flex h-full overflow-x-auto no-scrollbar">
        {slides.map((slide) => {
          // Parse title "1: Title Page" -> "title_page"
          // We assume the format "ID: Title" from constants
          const rawTitle = slide.title.includes(':') ? slide.title.split(':')[1].trim() : slide.title;
          const displayTitle = rawTitle.toLowerCase().replace(/\s+/g, '_');

          return (
            <button
              key={slide.id}
              onClick={() => onSlideChange(slide.id)}
              className={`h-full px-3 flex items-center gap-1 transition-colors whitespace-nowrap ${
                currentSlideId === slide.id
                  ? 'bg-blue-700 text-white font-bold'
                  : 'bg-[#222] text-gray-500 hover:bg-[#333]'
              }`}
            >
              <span>{slide.id}:</span>
              <span className="hidden sm:inline">{displayTitle}</span>
            </button>
          );
        })}
      </div>

      {/* System Status Mock */}
      <div className="flex items-center h-full divide-x divide-[#333] flex-shrink-0">
         <div className="px-3 flex items-center gap-2 text-green-500">
            <span className="hidden sm:inline">IPV4: 192.168.1.12</span>
            <Wifi size={12} />
         </div>
         <div className="px-3 flex items-center gap-2 text-yellow-500">
             <span className="hidden sm:inline">VOL: 85%</span>
             <Volume2 size={12} />
         </div>
         <div className="px-3 flex items-center gap-2 text-white">
            <span className="hidden sm:inline">BAT: 100%</span>
            <Battery size={12} />
         </div>
         <div className="px-3 flex items-center gap-2 text-blue-400 bg-[#333] h-full">
            <Clock size={12} />
            {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
         </div>
         <button
            onClick={toggleFullscreen}
            className="px-3 flex items-center gap-2 text-purple-400 hover:bg-[#444] h-full transition-colors"
            title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
         >
            {isFullscreen ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
         </button>
      </div>
    </div>
  );
};

export default StatusBar;