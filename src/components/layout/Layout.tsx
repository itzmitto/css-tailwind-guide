import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <Navbar />

            <div className="flex">
                <Sidebar />

                <main className="flex-1 p-10">
                    {children}
                </main>
            </div>
        </div>
    );
}