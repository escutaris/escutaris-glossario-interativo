
import { Link as LinkIcon } from "lucide-react";

const ContactLinks = () => {
  const links = [
    { label: "Site", url: "https://www.escutaris.com.br/" },
    { label: "Instagram", url: "https://www.instagram.com/escutarissaudemental/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/escutaris/" },
    { label: "Youtube", url: "https://www.youtube.com/@Escutaris" }
  ];

  return (
    <div className="space-y-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary-dark hover:text-primary transition-colors"
        >
          <LinkIcon size={16} />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;

