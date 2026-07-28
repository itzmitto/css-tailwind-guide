import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="w-64 border-r border-zinc-800 bg-zinc-950">
            <nav className="p-6">
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/"
                            className="block rounded-lg px-4 py-2 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
                        >Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/colors"
                            className="block rounded-lg px-4 py-2 text-zinc-300 transition hover:bg-zinc-800 hover:text-white">Colors
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}