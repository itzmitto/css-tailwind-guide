import Editor from "@monaco-editor/react";

type Props = {
    value: string;
    onChange(value: string): void;
};

export default function CssEditor({
    value,
    onChange,
}: Props) {
    return (
        <Editor
            height="384px"
            language="css"
            theme="vs-dark"
            value={value}
            onChange={(value) =>
                onChange(value ?? "")
            }
            options={{
                minimap: {
                    enabled: false,
                },
                fontSize: 15,
                roundedSelection: true,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                wordWrap: "on",
                tabSize: 4,
            }}
        />
    );
}