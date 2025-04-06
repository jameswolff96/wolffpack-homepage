'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Header() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <header className="w-full border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
                Wolffpack Works
            </Link>
            <ThemeToggle />
        </header>
    );
}
