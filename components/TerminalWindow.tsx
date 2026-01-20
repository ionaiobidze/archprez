import React from 'react';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ title, children, isActive = true, className = "" }) => {
  return (
    <div className={`flex flex-col border-2 ${isActive ? 'border-blue-600' : 'border-gray-700'} bg-[#1a1a1a] h-full ${className}`}>
      {/* Title Bar */}
      <div className={`${isActive ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'} px-2 py-1 text-xs font-bold flex justify-between items-center select-none`}>
        <span>{title}</span>
        <span className="text-[10px] opacity-75">[pts/0]</span>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 p-4 overflow-auto relative">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;