'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const STORAGE_KEY = 'remindkaro-sound';

const SoundContext = createContext({
  soundEnabled: false,
  toggleSound: () => {},
  mounted: false,
});

export function SoundProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'true') {
      setSoundEnabled(true);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_KEY, soundEnabled ? 'true' : 'false');
  }, [soundEnabled, mounted]);

  const toggleSound = useCallback(() => {
    setSoundEnabled((s) => !s);
  }, []);

  const value = useMemo(
    () => ({ soundEnabled, toggleSound, mounted }),
    [soundEnabled, mounted, toggleSound]
  );

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}
