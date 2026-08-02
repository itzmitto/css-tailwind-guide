type Device = "desktop" | "tablet" | "mobile";

type Props = {
    value: Device;
    onChange(device: Device): void;
};

export default function DeviceSelector({
    value,
    onChange,
}: Props) {
    const devices: Device[] = [
        "desktop",
        "tablet",
        "mobile",
    ];

    return (
        <div className="mb-4 flex gap-2">
            {devices.map((device) => (
                <button
                    key={device}
                    onClick={() => onChange(device)}
                    className={`rounded-xl border px-4 py-2 transition ${
                        value === device
                            ? "border-blue-500 bg-blue-500 text-white"
                            : "border-border hover:bg-surface"
                    }`}
                >
                    {device}
                </button>
            ))}
        </div>
    );
}