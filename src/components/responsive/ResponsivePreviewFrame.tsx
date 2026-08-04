import type { ReactNode } from "react";

type ResponsivePreviewFrameProps = {
    children: ReactNode;
};

export default function ResponsivePreviewFrame({ children }: ResponsivePreviewFrameProps) {
    return <div className="w-full rounded-xl border border-border bg-surface p-4">{children}</div>;
}
