import HeroTemplate from "../../components/templates/HeroTemplate";
import NavbarTemplate from "../../components/templates/NavbarTemplate";
import FooterTemplate from "../../components/templates/FooterTemplate";
import FeaturesTemplate from "../../components/templates/FeaturesTemplate";
import PricingTemplate from "../../components/templates/PricingTemplate";
import TestimonialsTemplate from "../../components/templates/TestimonialsTemplate";

export type TemplateItem = {
    id: string;
    title: string;
    category: string;
    description: string;
    component: React.ComponentType;
};

export const templates: TemplateItem[] = [
    {
        id: "hero-default",
        title: "Startup Hero",
        category: "Hero",
        description: "Modern SaaS landing hero.",
        component: HeroTemplate,
    },
    {
        id: "navbar-default",
        title: "Navbar",
        category: "Navigation",
        description: "Simple responsive navigation.",
        component: NavbarTemplate,
    },
    {
        id: "features-default",
        title: "Features",
        category: "Features",
        description: "Three-column features.",
        component: FeaturesTemplate,
    },
    {
        id: "pricing-default",
        title: "Pricing",
        category: "Pricing",
        description: "Three pricing plans.",
        component: PricingTemplate,
    },
    {
        id: "testimonials-default",
        title: "Testimonials",
        category: "Testimonials",
        description: "Customer reviews.",
        component: TestimonialsTemplate,
    },
    {
        id: "footer-default",
        title: "Footer",
        category: "Footer",
        description: "Simple footer.",
        component: FooterTemplate,
    },
];