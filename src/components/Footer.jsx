// Footer.jsx
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
                <div className="space-y-2">
                    <a
                        href="https://t.me/girls_hubintl"
                        className="block text-sm hover:text-pink-400 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Telegram: @girls_hubintl
                    </a>
                    <a
                        href="mailto:sodiqxonoval@gmail.com"
                        className="block text-sm hover:text-pink-400 transition-colors duration-300"
                    >
                        sodiqxonoval@gmail.com
                    </a>
                    <span className="block text-xs text-gray-400">© 2025 Girls Hub</span>
                </div>

                <div className="text-sm">
                    Developed by&nbsp;
                    <a
                        href="https://github.com/DolimovS"
                        className="underline hover:text-pink-400 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        DolimovS
                    </a>
                </div>
            </div>
        </footer>
    );
}
