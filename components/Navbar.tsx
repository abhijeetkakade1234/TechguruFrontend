export default function Navbar() {
  const navLinks = [
    { name: "ABOUT US", href: "#" },
    { name: "EVENTS", href: "#" },
    { name: "SCHEDULE", href: "#" },
    { name: "PROCESS", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold text-slate-500 dark:text-zinc-400 tracking-widest uppercase">
      {navLinks.map((link) => (
        <a key={link.name} className="hover:text-primary dark:hover:text-primary transition-colors py-2" href={link.href}>
          {link.name}
        </a>
      ))}
    </nav>
  );
}
