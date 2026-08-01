
import { Globe, Instagram, Linkedin, Youtube } from "lucide-react";

const links = [
  { icon: Globe, url: "https://www.escutaris.com.br/", label: "Site da Escutaris" },
  { icon: Instagram, url: "https://www.instagram.com/escutarissaudemental/", label: "Instagram da Escutaris" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/escutaris/", label: "LinkedIn da Escutaris" },
  { icon: Youtube, url: "https://www.youtube.com/@Escutaris", label: "Canal do YouTube da Escutaris" }
];

const ContactLinks = () => {
  return (
    <div className="flex gap-3">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-offwhite/25 p-3 text-offwhite/80 transition-colors hover:border-terracota hover:bg-terracota hover:text-offwhite focus:outline-none focus-visible:ring-2 focus-visible:ring-offwhite"
          aria-label={link.label}
        >
          <link.icon size={20} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
