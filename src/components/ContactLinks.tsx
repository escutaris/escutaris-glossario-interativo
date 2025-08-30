
import { Globe, Instagram, Linkedin, Youtube } from "lucide-react";

const ContactLinks = () => {
  const links = [
    { icon: Globe, url: "https://www.escutaris.com.br/", label: "Site da Escutaris" },
    { icon: Instagram, url: "https://www.instagram.com/escutarissaudemental/", label: "Instagram da Escutaris" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/escutaris/", label: "LinkedIn da Escutaris" },
    { icon: Youtube, url: "https://www.youtube.com/@Escutaris", label: "Canal do YouTube da Escutaris" }
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-secondary transition-colors p-2 rounded-full hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label={link.label}
        >
          <link.icon size={20} />
          <span className="sr-only">{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
