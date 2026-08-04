import {
    ArrowLeft,
    ArrowRight,
    Bell,
    Calendar,
    Check,
    ChevronDown,
    CircleHelp,
    Code2,
    Copy,
    Download,
    ExternalLink,
    Eye,
    FileCode2,
    Filter,
    Heart,
    Image,
    Info,
    LayoutGrid,
    Link,
    Mail,
    Menu,
    MessageCircle,
    Moon,
    MoreHorizontal,
    MousePointer2,
    Palette,
    Play,
    Plus,
    Search,
    Settings,
    Share2,
    ShoppingCart,
    SlidersHorizontal,
    Sparkles,
    Star,
    Sun,
    Terminal,
    Trash2,
    Upload,
    User,
    X,
    Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const iconCategories = [
    "Actions",
    "Navigation",
    "Communication",
    "Interface",
    "Media",
    "Development",
] as const;

export type IconCategory = (typeof iconCategories)[number];

export type IconDefinition = {
    name: string;
    category: IconCategory;
    icon: LucideIcon;
};

// Add new Lucide icons here to extend the browser.
export const iconCatalog: IconDefinition[] = [
    { name: "Plus", category: "Actions", icon: Plus },
    { name: "Check", category: "Actions", icon: Check },
    { name: "Copy", category: "Actions", icon: Copy },
    { name: "Download", category: "Actions", icon: Download },
    { name: "Upload", category: "Actions", icon: Upload },
    { name: "Trash2", category: "Actions", icon: Trash2 },
    { name: "Share2", category: "Actions", icon: Share2 },
    { name: "ExternalLink", category: "Actions", icon: ExternalLink },
    { name: "ArrowLeft", category: "Navigation", icon: ArrowLeft },
    { name: "ArrowRight", category: "Navigation", icon: ArrowRight },
    { name: "ChevronDown", category: "Navigation", icon: ChevronDown },
    { name: "Menu", category: "Navigation", icon: Menu },
    { name: "MoreHorizontal", category: "Navigation", icon: MoreHorizontal },
    { name: "LayoutGrid", category: "Navigation", icon: LayoutGrid },
    { name: "Search", category: "Interface", icon: Search },
    { name: "Settings", category: "Interface", icon: Settings },
    { name: "Filter", category: "Interface", icon: Filter },
    { name: "SlidersHorizontal", category: "Interface", icon: SlidersHorizontal },
    { name: "Eye", category: "Interface", icon: Eye },
    { name: "CircleHelp", category: "Interface", icon: CircleHelp },
    { name: "Info", category: "Interface", icon: Info },
    { name: "Moon", category: "Interface", icon: Moon },
    { name: "Sun", category: "Interface", icon: Sun },
    { name: "Mail", category: "Communication", icon: Mail },
    { name: "MessageCircle", category: "Communication", icon: MessageCircle },
    { name: "Bell", category: "Communication", icon: Bell },
    { name: "User", category: "Communication", icon: User },
    { name: "Link", category: "Communication", icon: Link },
    { name: "Terminal", category: "Development", icon: Terminal },
    { name: "Code2", category: "Development", icon: Code2 },
    { name: "FileCode2", category: "Development", icon: FileCode2 },
    { name: "MousePointer2", category: "Development", icon: MousePointer2 },
    { name: "Sparkles", category: "Development", icon: Sparkles },
    { name: "Zap", category: "Development", icon: Zap },
    { name: "Image", category: "Media", icon: Image },
    { name: "Play", category: "Media", icon: Play },
    { name: "Heart", category: "Media", icon: Heart },
    { name: "Star", category: "Media", icon: Star },
    { name: "Palette", category: "Media", icon: Palette },
    { name: "ShoppingCart", category: "Media", icon: ShoppingCart },
    { name: "Calendar", category: "Media", icon: Calendar },
    { name: "X", category: "Actions", icon: X },
];

export function getIconSnippet(name: string): string {
    return `import { ${name} } from "lucide-react";\n\n<${name} size={24} />`;
}
