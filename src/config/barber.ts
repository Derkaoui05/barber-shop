import { type Barber } from "@/types";

export const getBarber : Barber[] = [
    {
        id: 1,
        name: "John",
        speciality: ["Classic Scissor Haircuts", "Beard Specialist"],
        description:
          "Co-owner of The Sharp Look, brings over 30 years of expertise to the shop. Known for his precision and creativity, John ensures every client leaves looking their best",
          image: "/about3.webp",
      },
      {
        id: 2,
        name: "Mark",
        speciality: ["Modern Hair Styling", "Straight Razor Shaves"],
        description:
          "As co-owner and brother to John, Mark brings a dynamic flair to The Sharp Look. With a talent for modern styles and impeccable shaves, Mark ensures each visit is a blend of tradition and innovation.",
          image: "/mark.webp",
      },
      {
        id: 3,
        name: "James",
        speciality: ["Beard Sculpting", "Skin Fades"],
        description:
          "James is the shop's go-to expert for sharp skin fades and meticulously sculpted beards. His dedication to detail and trend-savvy approach make him a favorite among clients seeking a fresh, stylish look.",
          image: "/james.webp",
      },
      {
        id: 4,
        name: "Nicole",
        speciality: ["Hair Coloring", "Grooming Treatments"],
        description:
          "Nicole brings a touch of versatility to the team with her expertise in hair coloring and specialized grooming treatments. Passionate and skilled, she's dedicated to enhancing every client's unique style and confidence.",
          image: "/nicole.webp"
      },
]