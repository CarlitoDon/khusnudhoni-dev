export function TrustedBy() {
  const brands = [
    { name: "Santi Mebel", label: "Retail & E-commerce" },
    { name: "Santi Living", label: "Property & Rental" },
    { name: "Kita Jago Digital", label: "Health & Beauty" },
    { name: "Local Brands", label: "Growth Partner" },
  ];

  return (
    <section className="mb-16 sm:mb-24 animate-enter delay-100 w-full overflow-hidden relative">
      <div className="text-center mb-6">
        <span className="font-mono text-[0.65rem] text-blue-700 dark:text-blue-400 uppercase tracking-widest bg-blue-50/50 dark:bg-blue-900/20 px-3 py-1 rounded-full border border-blue-100/50 dark:border-blue-800/50">
          Trusted By Growth-Focused Brands
        </span>
      </div>
      
      {/* Scroll container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="py-4 animate-marquee flex gap-8 sm:gap-12 whitespace-nowrap w-max pr-8 sm:pr-12">
          {brands.map((brand, i) => (
            <div key={`brand-1-${i}`} className="flex flex-col items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200 font-sans">
                {brand.name}
              </span>
              <span className="text-[0.6rem] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                {brand.label}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless infinite scroll */}
          {brands.map((brand, i) => (
            <div key={`brand-2-${i}`} className="flex flex-col items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200 font-sans">
                {brand.name}
              </span>
              <span className="text-[0.6rem] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                {brand.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Gradient fades for edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fbfdfd] dark:from-slate-900 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fbfdfd] dark:from-slate-900 to-transparent z-10"></div>
      </div>
    </section>
  );
}
