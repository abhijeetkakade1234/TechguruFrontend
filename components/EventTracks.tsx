import content from "@/data/content.json";

export default function EventTracks() {
  return (
    <section className="mb-24 reveal" data-purpose="event-tracks">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Explore Our Tracks</h2>
        <div className="flex gap-4">
          <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-zinc-400 hover:text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.tracks.map((track, i) => (
          <div key={track.id} className="group cursor-pointer text-center sm:text-left">
            <div className="relative h-64 overflow-hidden rounded-2xl mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={track.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={track.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20">
                {track.id}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
              {track.title}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{track.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
