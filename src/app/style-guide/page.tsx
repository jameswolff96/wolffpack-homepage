export default function StyleGuide() {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-12">
            <header>
                <h1 className="text-4xl font-bold">Wolffpack Style Guide</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Design tokens and UI components for consistent theming.
                </p>
            </header>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Colors</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { name: "Primary", className: "bg-wolff-primary" },
                        { name: "Accent", className: "bg-wolff-accent" },
                        { name: "Hover", className: "bg-wolff-hover" },
                        { name: "Background", className: "bg-wolff-background" },
                        { name: "Foreground", className: "bg-wolff-foreground" },
                    ].map(({ name, className }) => (
                        <div key={name} className="space-y-1">
                            <div className={`w-24 h-12 rounded shadow-inner ${className}`} />
                            <p className="text-sm">{name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Typography</h2>
                <p className="text-lg font-sans">This is sans-serif text using Inter/system-ui.</p>
                <p className="text-lg font-mono">This is monospaced text using JetBrains Mono.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Buttons & Cards</h2>
                <div className="flex flex-wrap gap-4 items-start">
                    <button className="px-4 py-2 bg-wolff-primary text-white rounded-xl shadow-soft">
                        Primary Button
                    </button>
                    <button className="px-4 py-2 bg-wolff-hover text-black rounded-xl">
                        Hover Button
                    </button>
                    <div className="p-4 rounded-2xl shadow-soft bg-gray-200 dark:bg-gray-800 max-w-sm">
                        <h3 className="text-xl font-semibold">Card Example</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            A reusable UI block with theme support.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
