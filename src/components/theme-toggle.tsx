'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const isDark = theme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle Theme"
            className="relative flex items-center gap-1 px-1 py-1 w-16 h-8 rounded-full bg-wolff-primary hover:bg-wolff-hover transition-colors cursor-pointer"
        >
            <div className="relative w-16 h-6">
                <span
                    className={`text-sm absolute top-[2px] left-[2px] h-5 w-5 bg-white dark:bg-wolff-background rounded-full shadow transition-transform duration-300 ${isDark ? 'translate-x-8' : ''
                        }`}
                >{isDark ? '🌙' : '☀️'}</span>
            </div>
        </button>
    );
}
