import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { searchData } from "../../data/searchData";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
    const [query, setQuery] = useState("");

    const results = useMemo(() => {
        if (!query.trim()) return [];

        return searchData.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    return (
        <header className="relative h-16 border-b border-zinc-800 bg-zinc-950">
            <div className="flex h-full items-center justify-between px-8">
                <h1 className="text-xl font-bold text-white">
                    CSS → Tailwind
                </h1>

                <div className="flex items-center gap-4">
                    <div className="relative w-96">
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            type="text"
                            placeholder="Search documentation..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-2 pl-10 pr-4 text-white outline-none transition focus:border-blue-500"
                        />

                        {results.length > 0 && (
                            <div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
                                {results.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setQuery("")}
                                        className="block border-b border-zinc-800 px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white last:border-none"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}