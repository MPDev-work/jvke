import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="flex h-9 w-9 items-center justify-center transition-all duration-500 ease-out hover:text-[var(--accent)]"
      style={{ border: '1px solid var(--line)', borderRadius: '9999px' }}
    >
      {theme === 'dark' ? (
        <Sun size={15} strokeWidth={1.75} />
      ) : (
        <Moon size={15} strokeWidth={1.75} />
      )}
    </button>
  );
}
