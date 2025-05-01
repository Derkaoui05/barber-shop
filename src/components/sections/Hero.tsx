import { SITE_CONFIG } from "@/config/site";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen font-oswald w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/Hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Titles */}
          <div className="space-y-7 text-start">
            <h1 className="text-5xl md:text-6xl text-white">
              Welcome to The SharpLook
            </h1>
            <div className="space-y-2">
              <p className="text-8xl md:text-[150px] text-primary">
                Expert Grooming.
              </p>
              <p className="text-8xl md:text-[150px] text-primary">
                Distinct Style.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex items-start gap-3 text-white/90">
              <MapPin className="w-6 h-6 text-primary shrink-0" />
              <p>{SITE_CONFIG.contact.address}</p>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3 text-white/90">
              <Clock className="w-6 h-6 text-primary shrink-0" />
              <div className="space-y-1">
                {SITE_CONFIG.contact.hours.map((schedule) => (
                  <p key={schedule.days}>
                    <span className="font-medium">{schedule.days}:</span>{" "}
                    {schedule.hours}
                  </p>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-white/90">
              <Phone className="w-6 h-6 text-primary shrink-0" />
              <a 
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="hover:text-primary transition-colors"
              >
                {SITE_CONFIG.contact.phone}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-white/90">
              <Mail className="w-6 h-6 text-primary shrink-0" />
              <a 
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="hover:text-primary transition-colors"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
