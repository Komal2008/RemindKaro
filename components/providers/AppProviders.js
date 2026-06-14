'use client';

import { ThemeProvider } from './ThemeProvider';
import { SoundProvider } from './SoundProvider';

export default function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <SoundProvider>{children}</SoundProvider>
    </ThemeProvider>
  );
}
