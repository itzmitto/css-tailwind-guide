import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ThemeLayout from "./ThemeLayout";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <ThemeLayout>
            <Navbar />

            <div className="flex">
                <Sidebar />

                <main className="flex-1 p-10">
                    {children}
                </main>
            </div>
        </ThemeLayout>
    );
}