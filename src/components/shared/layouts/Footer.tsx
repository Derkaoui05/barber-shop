import Link from "next/link";
import { FOOTER_NAV } from "@/config/navigation";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Premium barber services with traditional techniques and modern style.
            </p>
          </div>

          {Object.entries(FOOTER_NAV).map(([title, items]) => (
            <div key={title} className="space-y-2">
              <h3 className="font-serif font-medium capitalize">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}