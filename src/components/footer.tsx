export function Footer() {
    return (
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6">
            <p>
                Contact us at{' '}
                <a href="mailto:james@wolffpack.works" className="underline">
                    james@wolffpack.works
                </a>
            </p>
            <p className="mt-1">&copy; {new Date().getFullYear()} Wolffpack Works</p>
        </footer>
    );
}
