import { Search } from "lucide-react";

export default function Navbar() {
    return (
        <header className="h-16 border-b border-zinc-800 bg-zinc-950">
            <div className="flex h-full items-center justify-between px-8">
                <h1 className="text-xl font-bold text-white">
                    CSS → Tailwind
                </h1>

                <div className="relative w-80">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-2 pl-10 pr-4 text-white outline-none transition focus:border-blue-500"
                    />
                </div>
            </div>
        </header>
    );
}