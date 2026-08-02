export default function NavbarTemplate() {
    return (
        <nav className="flex items-center justify-between rounded-2xl border border-border bg-background px-8 py-5">
            <h2 className="text-2xl font-black">
                TailwindBuilder
            </h2>

            <div className="flex gap-8">
                <a href="#">Home</a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">About</a>
            </div>

            <button className="rounded-xl bg-blue-500 px-5 py-3 text-white">
                Login
            </button>
        </nav>
    );
}