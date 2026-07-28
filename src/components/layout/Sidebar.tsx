import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";

export default function Sidebar() {
    return (
        <aside className="h-[calc(100vh-64px)] w-72 overflow-y-auto border-r border-zinc-800 bg-inherit">
            <nav className="p-6">
                {navigation.map((section) => (
                    <div
                        key={section.title}
                        className="mb-8"
                    >
                        <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500">
                            {section.title}
                        </h2>

                        <ul className="space-y-1">
                            {section.links.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `block rounded-lg px-4 py-2 transition ${isActive
                                                ? "bg-blue-600 text-white"
                                                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    );
}