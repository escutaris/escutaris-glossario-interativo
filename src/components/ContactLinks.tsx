
import { Globe, Instagram, Linkedin, Youtube } from "lucide-react";

const ContactLinks = () => {
  const links = [
    { icon: Globe, url: "https://www.escutaris.com.br/" },
    { icon: Instagram, url: "https://www.instagram.com/escutarissaudemental/" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/escutaris/" },
    { icon: Youtube, url: "https://www.youtube.com/@Escutaris" }
  ];

  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-dark hover:text-primary transition-colors"
        >
          <link.icon size={24} />
          <span className="sr-only">Link to {link.url}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;

