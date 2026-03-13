interface NavLink {
  name: string;
  href: string;
}

export default function Navbar({ links }: { links: NavLink[] }) {
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
      {links.map((link) => (
        <a key={link.name} className="hover:text-primary transition-colors" href={link.href}>
          {link.name}
        </a>
      ))}
    </nav>
  );
}
