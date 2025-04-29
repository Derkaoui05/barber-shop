import { type NavItem } from "@/types";

export const MAIN_NAV: NavItem[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Services",
        href: "/services",
        description: "Explore our premium grooming services",
    },
    {
        title: "Gallery",
        href: "/gallery",
        description: "View our work and styling portfolio",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

export const BOOKING_NAV: NavItem[] = [
    {
        title: "Book Now",
        href: "/booking",
        description: "Schedule your appointment",
    },
    {
        title: "My Bookings",
        href: "/booking/my-bookings",
        description: "View your upcoming appointments",
    },
];

export const MOBILE_NAV: NavItem[] = [
    ...MAIN_NAV,
    ...BOOKING_NAV,
];

export const FOOTER_NAV = {
    services: [
        { title: "Haircuts", href: "/services#haircuts" },
        { title: "Beard Trims", href: "/services#beards" },
        { title: "Shaves", href: "/services#shaves" },
        { title: "Packages", href: "/services#packages" },
    ],
    company: [
        { title: "About Us", href: "/about" },
        { title: "Our Barbers", href: "/about#barbers" },
        { title: "Testimonials", href: "/about#testimonials" },
        { title: "Contact", href: "/contact" },
    ],
    legal: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
        { title: "Cancellation Policy", href: "/cancellation" },
    ],
};