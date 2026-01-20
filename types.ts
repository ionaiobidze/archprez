import React from 'react';

export interface SlideData {
  id: number;
  title: string;
  content: React.ReactNode;
  notesPrompt: string; // Prompt to send to Gemini for speaker notes
}

export enum WindowState {
  TILED = 'TILED',
  FLOATING = 'FLOATING',
  FULLSCREEN = 'FULLSCREEN'
}

export interface TerminalProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}