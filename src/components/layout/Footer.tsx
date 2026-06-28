import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Shield, ArrowUpRight } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";

// Assets in /public are referenced by absolute URL (not imported).
const logo = "/images/logo-shield.png";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border bg-card/40">
      <div className="container grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Zeel Kumbhani — Cybersecurity Expert"
              className="h-10 w-auto drop-shadow-[0_0_10px_rgba(56,189,248,0.45)]"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                Zeel Kumbhani
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-primary/80">
                Cybersecurity Expert
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Founder-led cybersecurity by{" "}
            <span className="font-medium text-foreground">{siteConfig.name}</span>{" "}
            — VAPT, web & application security, malware recovery, incident
            response and awareness training for businesses across India and
            worldwide.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg bg-secondary p-2.5 text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={siteConfig.socials.company}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-secondary px-3 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary"
            >
              CyberNexora <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">Explore</h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary" />
              <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-primary">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-primary" />
              <span>{siteConfig.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.brand}.
            All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield size={14} className="text-primary" />
            Security-first. Ethics-first.
          </p>
        </div>
      </div>
    </footer>
  );
}
