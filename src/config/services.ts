import { type Service } from "@/types";

export const SERVICES: Service[] = [
    {
        id: "classic-haircut",
        name: "Classic Haircut",
        description: "Precision haircut with clippers and scissors, including neck shave and styling",
        duration: 30,
        price: 35,
        category: "haircut",
        popular: true,
    },
    {
        id: "premium-haircut",
        name: "Premium Haircut",
        description: "Detailed haircut with hot towel treatment and hair wash",
        duration: 45,
        price: 50,
        category: "haircut",
    },
    {
        id: "beard-trim",
        name: "Beard Trim",
        description: "Precision beard shaping with straight razor detailing",
        duration: 20,
        price: 25,
        category: "beard",
        popular: true,
    },
    {
        id: "royal-shave",
        name: "Royal Shave",
        description: "Traditional hot towel shave with pre-shave oil and post-shave balm",
        duration: 30,
        price: 40,
        category: "beard",
    },
    {
        id: "complete-grooming",
        name: "Complete Grooming",
        description: "Haircut, beard trim, and hot towel shave package",
        duration: 60,
        price: 75,
        category: "package",
        popular: true,
    },
];

export const SERVICE_CATEGORIES = [
    {
        id: "haircut",
        name: "Haircuts",
    },
    {
        id: "beard",
        name: "Beard Services",
    },
    {
        id: "package",
        name: "Packages",
    },
];