import Link from "next/link";
import { FOOTER_NAV } from "@/config/navigation";
import { SITE_CONFIG } from "@/config/site";
import Image from "next/image";
import { Scissors } from "lucide-react";

const SOCIAL_LINKS = [
  { name: "Whatsapp", href: "https://whatsapp.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Tiktok", href: "https://tiktok.com" },
  { name: "Snap", href: "https://snapchat.com" },
  { name: "Youtube", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-16 relative" style={{
      clipPath: "polygon(0 0, 50% 5%, 100% 0, 100% 100%, 0 100%)"
    }}>
      <div className="container mx-auto px-4 pt-8 md:pt-12">
        {/* Logo */}
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 mb-8 md:mb-12">
          <Link href="/" className="flex items-center gap-2 group">
            <Scissors className="w-5 h-5 md:w-6 md:h-6 text-primary rotate-[-45deg] group-hover:rotate-[-30deg] transition-transform duration-300" />
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight">
              Sharp<span className="text-primary">Look</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-[#B88C46] mb-6 md:mb-8">
            {FOOTER_NAV.legal.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="transition-colors hover:text-primary relative group text-sm md:text-base"
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Description */}
          <p className="text-gray-400 max-w-3xl text-center text-sm md:text-base">
            Hairstyling is our specialty at Sharp Look. The haircut has never
            been more fun or enjoyable. Anyone interested in a classic, mohawk,
            layered, design or any other type of haircut is welcome. We attach
            great importance to the quality of the service we provide.
          </p>
        </div>

        {/* Instagram Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 mb-8 md:mb-12 relative">
          <div className="relative aspect-square">
            <Image
              src="/gallery2.png"
              alt="Gallery image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/gallery1.webp"
              alt="Gallery image 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/gallery3.webp"
              alt="Gallery image 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/gallery4.jpg"
              alt="Gallery image 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/gallery5.jpg"
              alt="Gallery image 5"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Link
              href="https://instagram.com"
              className="bg-[#B88C46] text-white px-4 py-1.5 md:px-6 md:py-2 inline-block text-sm md:text-base"
            >
              INSTAGRAM
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 md:mb-8">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="text-[#B88C46] hover:text-[#B88C46]/80 border border-[#B88C46] px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base"
            >
              {social.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-xs md:text-sm text-gray-400">
          {new Date().getFullYear()} © All rights reserved | Created by <Link className="text-[#B88C46] hover:underline duration-500 transition-colors" href="https://derkaoui.netlify.app" target="blank">Derkaoui Yassir</Link>
        </div>
      </div>
    </footer>
  );
}
