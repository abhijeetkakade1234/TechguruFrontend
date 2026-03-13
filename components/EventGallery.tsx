import content from "@/data/content.json";

export default function EventGallery() {
  return (
    <section className="mb-24 reveal" data-purpose="event-gallery">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
        {/* Left Side: Title and Small Grid */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="flex-1 p-8 rounded-3xl flex flex-col justify-end bg-slate-50 dark:bg-[#161616]">
            <h2 className="text-4xl font-bold mb-4 text-dark dark:text-white leading-tight">
              The TechGuru<br />
              Experience
            </h2>
            <p className="text-gray-500 mb-8">{content.gallery.description}</p>
          </div>
          <div className="h-[450px] relative rounded-3xl overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={content.gallery.images[0].tag}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={content.gallery.images[0].url}
            />
            <div className="absolute bottom-6 left-6">
              <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold border border-black/5 tracking-widest uppercase text-dark shadow-sm">
                {content.gallery.images[0].tag}
              </span>
            </div>
          </div>
        </div>
        {/* Middle Column: Large Image */}
        <div className="md:col-span-5 relative rounded-3xl overflow-hidden group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={content.gallery.images[1].tag}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={content.gallery.images[1].url}
          />
          <div className="absolute bottom-6 left-6">
            <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold border border-black/5 tracking-widest uppercase text-dark shadow-sm">
              {content.gallery.images[1].tag}
            </span>
          </div>
        </div>
        {/* Right Side: Vertical Bento Grid */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <div className="h-[350px] relative rounded-3xl overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={content.gallery.images[2].tag}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={content.gallery.images[2].url}
            />
            <div className="absolute bottom-6 left-6">
              <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold border border-black/5 tracking-widest uppercase text-dark shadow-sm">
                {content.gallery.images[2].tag}
              </span>
            </div>
          </div>
          <div className="flex-1 relative rounded-3xl overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={content.gallery.images[3].tag}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={content.gallery.images[3].url}
            />
            <div className="absolute bottom-6 left-6">
              <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold border border-black/5 tracking-widest uppercase text-dark shadow-sm">
                {content.gallery.images[3].tag}
              </span>
            </div>
          </div>
          <button className="w-full py-5 rounded-full border border-gray-200 dark:border-[#27272a] text-dark dark:text-white font-bold hover:bg-dark dark:hover:bg-white dark:hover:text-black transition-all shadow-sm cursor-pointer">
            See More Events
          </button>
        </div>
      </div>
    </section>
  );
}
