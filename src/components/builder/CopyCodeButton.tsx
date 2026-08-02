import CopyButton from "../ui/CopyButton";

type Props = {
    code: string;
};

export default function CopyCodeButton({
    code,
}: Props) {
    return (
        <div className="mt-4">
            <CopyButton text={code} />
        </div>
    );
}