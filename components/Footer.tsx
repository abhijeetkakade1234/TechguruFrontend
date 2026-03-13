import content from "@/data/content.json";

export default function Footer() {
  return (
    <>
      <section className="mb-24 reveal max-w-7xl mx-auto px-6">
        <div className="bg-dark dark:bg-[#161616] text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Crafted with <span className="text-primary">Precision</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                {content.footer.mission}
              </p>
              <button className="px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors cursor-pointer">
                Meet the Team
              </button>
            </div>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="GCOERC Coding Club Team"
                className="w-full h-full object-cover"
                src={content.footer.teamImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        </div>
      </section>

      <footer
        className="bg-black text-white pt-24 pb-12 px-6 sm:px-10 lg:px-20 border-t border-white/5"
        data-purpose="main-footer"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center rotate-3">
                  <span className="text-black font-black text-lg">TG</span>
                </div>
                <span className="font-black text-2xl tracking-tighter italic uppercase">
                  TechGuru <span className="text-primary">2026</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
                {content.footer.description}
              </p>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all"
                  href="#"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all"
                  href="#"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
                Quick Links
              </h4>
              <ul className="space-y-4 text-sm text-gray-400">
                {content.footer.quickLinks.map((link) => (
                  <li key={link}>
                    <a className="hover:text-primary transition-colors" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
                Contact
              </h4>
              <ul className="space-y-4 text-sm text-gray-400 font-mono">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    location_on
                  </span>
                  <span>{content.footer.contact.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">mail</span>
                  <span>{content.footer.contact.email}</span>
                </li>
              </ul>
            </div>
            <div>
              <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all flex items-center justify-center gap-2 mb-4 cursor-pointer">
                <span className="material-symbols-outlined">download</span>
                <span className="font-bold text-sm">Event Brochure</span>
              </button>
            </div>
          </div>
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-center md:text-left text-gray-500">
            <p>© 2026 TechGuru. GCOERC Nashik.</p>
            <p className="font-medium tracking-wide uppercase">
              Created with ❤️ by the <span className="text-white">GCOERC Coding Club</span>
            </p>
            <div className="flex gap-6">
              <a className="hover:text-white" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-white" href="#">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
