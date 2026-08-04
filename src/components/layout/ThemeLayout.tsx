import type { ReactNode } from "react";
import { useTheme } from "../../context/ThemeContext";

type ThemeLayoutProps = {
    children: ReactNode;
};

export default function ThemeLayout({
    children,
}: ThemeLayoutProps) {
    const { theme } = useTheme();

    return (
        <div
            className={
                theme === "dark"
                    ? "min-h-screen bg-zinc-950 text-white transition-colors duration-300"
                    : "min-h-screen bg-zinc-100 text-zinc-900 transition-colors duration-300"
            }
        >
            {children}
        </div>
    );
}
