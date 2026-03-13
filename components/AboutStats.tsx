export default function AboutStats() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-24 items-start reveal" data-purpose="about-stats-section">
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-dark dark:text-white">About TechGuru</h2>
          <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-base md:text-lg">
            At TechGuru 2026, we believe that innovation is more than just code; it&apos;s about creating solutions that redefine the human experience. Join us at GCOERC Nashik for a journey into the next era of technology.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-12 gap-x-8">
          <div className="border-l border-primary/20 pl-6">
            <div className="text-4xl font-bold mb-1 text-dark dark:text-white">25+</div>
            <div className="text-sm text-gray-500 dark:text-zinc-500 uppercase tracking-widest">Exciting Events</div>
          </div>
          <div className="border-l border-primary/20 pl-6">
            <div className="text-4xl font-bold mb-1 text-dark dark:text-white">₹2,00,000+</div>
            <div className="text-sm text-gray-500 dark:text-zinc-500 uppercase tracking-widest">Prize Pool</div>
          </div>
          <div className="border-l border-primary/20 pl-6">
            <div className="text-4xl font-bold mb-1 text-dark dark:text-white">1500+</div>
            <div className="text-sm text-gray-500 dark:text-zinc-500 uppercase tracking-widest">Participants</div>
          </div>
          <div className="border-l border-primary/20 pl-6">
            <div className="text-4xl font-bold mb-1 text-dark dark:text-white">10+</div>
            <div className="text-sm text-gray-500 dark:text-zinc-500 uppercase tracking-widest">Industry Partners</div>
          </div>
        </div>
      </section>

      <section className="mb-24 reveal" data-purpose="sponsors-marquee">
        <h3 className="text-center text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
          Our Strategic Partners
        </h3>
        <div className="relative overflow-hidden py-4 border-y border-gray-100 dark:border-zinc-800">
          <div className="animate-marquee whitespace-nowrap">
            <div className="flex gap-20 items-center px-10">
              <span className="font-black text-2xl tracking-tighter italic opacity-40">TECH CORP</span>
              <span className="font-black text-2xl tracking-tighter italic opacity-40">NEXUS GLOBAL</span>
              <span className="font-black text-2xl tracking-tighter italic opacity-40">CYBER_SYS</span>
              <span className="font-black text-2xl tracking-tighter italic opacity-40">ARCH_AI</span>
              <span className="font-black text-2xl tracking-tighter italic opacity-40">QUANTUM DYNAMICS</span>
              <span className="font-black text-2xl tracking-tighter italic opacity-40">SYNAPSE NETWORKS</span>
            </div>
            <div className="flex gap-20 items-center px-10">
              <span className="font-black text-2xl tracking-tighter italic opacity-40">TECH CORP</span>
              <span className="font-black text-2xl tracking-tighter italic opacity-40">NEXUS GLOBAL</span>
              <span className="font-black text-2xl tracking-tighter italic opacity-40">CYBER_SYS</span>
              <span className="font-black text-2xl tracking-tighter italic opacity-40">ARCH_AI</span>
              <span className="font-black text-2xl tracking-tighter italic opacity-40">QUANTUM DYNAMICS</span>
              <span className="font-black text-2xl tracking-tighter italic opacity-40">SYNAPSE NETWORKS</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
