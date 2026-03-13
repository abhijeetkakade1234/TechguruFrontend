import content from "@/data/content.json";

export default function AboutStats() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-24 items-start reveal" data-purpose="about-stats-section">
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-white">
            About TechGuru
          </h2>
          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            {content.about.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-12 gap-x-8">
          {content.about.stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-primary/30 pl-6">
              <div className="text-4xl font-bold mb-1 text-white">{stat.value}</div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24 reveal" data-purpose="sponsors-marquee">
        <h3 className="text-center text-sm font-bold uppercase tracking-[0.3em] text-zinc-600 mb-8">
          Our Strategic Partners
        </h3>
        <div className="relative overflow-hidden py-4 border-y border-white/5">
          <div className="animate-marquee whitespace-nowrap">
            <div className="flex gap-20 items-center px-10">
              {content.about.partners.map((p) => (
                <span key={p} className="font-black text-2xl tracking-tighter italic text-zinc-700 hover:text-zinc-400 transition-colors">{p}</span>
              ))}
              <span className="font-black text-2xl tracking-tighter italic text-zinc-700">QUANTUM DYNAMICS</span>
              <span className="font-black text-2xl tracking-tighter italic text-zinc-700">SYNAPSE NETWORKS</span>
            </div>
            <div className="flex gap-20 items-center px-10">
              {content.about.partners.map((p) => (
                <span key={p + "2"} className="font-black text-2xl tracking-tighter italic text-zinc-700 hover:text-zinc-400 transition-colors">{p}</span>
              ))}
              <span className="font-black text-2xl tracking-tighter italic text-zinc-700">QUANTUM DYNAMICS</span>
              <span className="font-black text-2xl tracking-tighter italic text-zinc-700">SYNAPSE NETWORKS</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
