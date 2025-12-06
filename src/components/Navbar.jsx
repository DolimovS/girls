import { useState, useEffect } from "react";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [active, setActive] = useState("home");

    const links = [
        { name: "Home", id: "home" },
        { name: "Grow", id: "grow" },
        { name: "Inspire", id: "inspire" },
        { name: "Empower", id: "empower" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            links.forEach((link) => {
                const el = document.getElementById(link.id);
                if (el) {
                    const top = el.getBoundingClientRect().top;
                    if (top <= 150) setActive(link.id);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActive(id);
        setMobileMenuOpen(false);
    };

    return (
        <div className="bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-600 min-h-screen">
            {/* Navbar */}
            <header className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-md">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div
                        className="text-2xl font-bold cursor-pointer text-white"
                        onClick={() => scrollToSection("home")}
                    >
                        Girls Hub
                    </div>

                    {/* Desktop links */}
                    <div className="hidden lg:flex gap-8">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`relative text-sm font-semibold transition-colors duration-300 ${active === link.id ? "text-pink-400" : "text-white"
                                    }`}
                            >
                                {link.name}
                                {active === link.id && (
                                    <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-gradient-to-r from-violet-300 to-pink-300"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Mobile button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="text-white text-2xl"
                        >
                            ☰
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* overlay */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    ></div>

                    {/* slide-out menu */}
                    <div className="relative ml-auto w-64 h-full bg-gray-900 p-6 flex flex-col gap-6 overflow-y-auto slide-in-right">
                        <button
                            className="self-end text-white text-2xl"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            ×
                        </button>
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`text-lg text-left w-full transition-colors duration-300 ${active === link.id ? "text-pink-400" : "text-white"
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section
                id="home"
                className="min-h-screen flex justify-center items-center px-6 lg:px-20 text-center"
            >
                <div className="animate-fadeIn px-4 sm:px-6 lg:px-20 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-snug text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] max-w-4xl mx-auto">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 animate-gradient-x">
                            Girls Hub
                        </span>{" "}
                        is an{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 animate-gradient-x">
                            international youth-led
                        </span>{" "}
                        platform{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-pink-400 to-fuchsia-400 animate-gradient-x">
                            empowering girls
                        </span>{" "}
                        from diverse backgrounds to access{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-rose-400 animate-gradient-x">
                            education, global opportunities
                        </span>{" "}
                        and personal growth.
                    </h1>
                </div>

            </section>
        </div>
    );
}
