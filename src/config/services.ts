import { type Service } from "@/types";

export const SERVICES: Service[] = [
    {
        id: "classic-haircut",
        type: "Classic",
        description: "Traditional haircut with clean lines and expert styling.",
        price: 25,
        category: "haircuts",
    },
    {
        id: "skin-fade",
        type: "Skin Fade",
        description: "A modern skin fade for a sharp and stylish look.",
        price: 30,
        category: "haircuts",
    },
    {
        id: "long-cut",
        type: "Long Cut & Style",
        description: "Trim and style tailored for longer hair lengths.",
        price: 35,
        category: "haircuts",
    },
    {
        id: "beard-trim",
        type: "Beard Trim",
        description: "Professional beard shaping and trimming to keep you sharp.",
        price: 15,
        category: "Beard Services",
    },
    {
        id: "luxury-beard",
        type: "Luxury Beard Treatment",
        description: "Includes beard trimming, shaping, and a conditioning treatment.",
        price: 25,
        category: "Beard Services",
    },
    {
        id: "straight-shave",
        type: "Straight Razor Shave",
        description: "A clean, classic shave with a straight razor for a smooth finish.",
        price: 20,
        category: "Beard Services",
    },
    {
        id: "hot-towel-shave",
        type: "Hot Towel Shave",
        description: "Traditional shave with a hot towel for a luxurious shave experience.",
        price: 25,
        category: "Shaves & Gromming",
    },
    {
        id: "royal-shave",
        type: "Royal Shave",
        description: "Full shave service with premium products and hot towel treatment.",
        price: 30,
        category: "Shaves & Gromming",
    },
    {
        id: "express-shave",
        type: "Express Shave",
        description: "Quick, clean shave for those on the go.Quick, clean shave for those on the go.",
        price: 15,
        category: "Shaves & Gromming",
    },
    // Packages
    {
        id: "ClassicCombo",
        type: "Classic Combo",
        description: "Haircut and beard trim, styled to perfection.",
        price: 35,
        category: "Packages",
    },
    {
        id: "UltimateGroomingPackage",
        type: "Ultimate Grooming Package",
        description: "Haircut, hot towel shave, and facial treatment.",
        price: 60,
        category: "Packages",
    },
    {
        id: "The Razor Brothers Experience",
        type: "TheRazorBrothersExperience",
        description: "Full-service experience - haircut, shave, and luxury beard treatment.",
        price: 70,
        category: "Packages",
    },
];

export const SERVICE_CATEGORIES = [
    {
        id: "haircut",
        name: "Haircuts",
        image : "/service1.webp",
    },
    {
        id: "beard",
        name: "Beard Services",
        image : "/service2.webp",
    },
    {
        id: "ShavesGromming",
        name: "Shaves & Gromming",
        image: "/service3.webp",
    },
    {
        id: "FacialSkin",
        name: "Facial & Skin",
        image: "/service4.webp",
    },
    {
        id: "package",
        name: "Packages",
        image: "/service5.webp",
    },
];