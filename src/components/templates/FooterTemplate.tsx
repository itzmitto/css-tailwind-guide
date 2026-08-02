export default function FooterTemplate() {
    return (
        <footer className="rounded-2xl border border-border bg-background px-8 py-12">
            <div className="flex flex-col items-center gap-5 text-center">
                <h2 className="text-3xl font-bold">
                    Tailwind Builder
                </h2>

                <p className="text-muted">
                    Build beautiful websites faster.
                </p>

                <div className="flex gap-6">
                    <a href="#">Docs</a>
                    <a href="#">GitHub</a>
                    <a href="#">Discord</a>
                </div>

                <p className="text-sm text-muted">
                    © 2026 Tailwind Builder
                </p>
            </div>
        </footer>
    );
}