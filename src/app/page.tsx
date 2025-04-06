import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Welcome to Wolffpack Works</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A creative home for James, Gabby, and our shared adventures.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/blog"
          className="block p-4 rounded-2xl shadow-soft bg-gray-200 dark:bg-gray-800 hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold">Blog</h2>
          <p>Occasional thoughts, dev logs, and updates from James.</p>
        </Link>

        <Link
          href="https://www.etsy.com/shop/ThePrintedWolff"
          className="block p-4 rounded-2xl shadow-soft bg-gray-200 dark:bg-gray-800 hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold">3D Printing</h2>
          <p>Browse printable goods from The Printed Wolff on Etsy.</p>
        </Link>

        <Link
          href="https://treats.wolffpack.works"
          className="block p-4 rounded-2xl shadow-soft bg-gray-200 dark:bg-gray-800 hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold">Candy & Treats</h2>
          <p>Sweet creations and seasonal specials by Gabby.</p>
        </Link>

        <Link
          href="/dev"
          className="block p-4 rounded-2xl shadow-soft bg-gray-200 dark:bg-gray-800 hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold">Dev & Portfolio</h2>
          <p>Tools, experiments, and professional work from James.</p>
        </Link>

        <Link
          href="https://gabby.wolffpack.works"
          className="block p-4 rounded-2xl shadow-soft bg-gray-200 dark:bg-gray-800 hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold">Gabby&apos;s Space</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            A place for writing, storytelling, and whatever she dreams up next.
          </p>
        </Link>
      </section>
    </div>
  );
}
