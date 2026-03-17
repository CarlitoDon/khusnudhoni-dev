"use client";

import { useState } from "react";
import { TrendingUp, Eye } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export function HiddenImpactSection({ 
  results, 
  metrics 
}: { 
  results: string[];
  metrics?: { value: number; prefix?: string; suffix?: string; label: string }[];
}) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative liquid-pill py-8 px-6 sm:px-8 rounded-2xl shadow-sm animate-enter delay-300 overflow-hidden group">
      <span className="font-mono text-sm text-green-700 uppercase tracking-widest flex items-center gap-2 mb-6 border-b border-gray-200 pb-3">
        <TrendingUp className="h-5 w-5" /> Business Impact
      </span>
      
      <div className={`relative transition-all duration-700 ${!isRevealed ? "blur-[6px] opacity-40 select-none" : "blur-none opacity-100"}`}>
        
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-white/50 border border-green-100/50 rounded-xl p-5 flex flex-col justify-center items-start shadow-sm">
                <div className="flex items-baseline text-2xl sm:text-3xl font-bold text-green-700 mb-1">
                  <AnimatedCounter 
                    value={isRevealed ? metric.value : 0} 
                    prefix={metric.prefix} 
                    suffix={metric.suffix} 
                  />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-green-800/70">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <ul className="result-list text-black text-base font-medium leading-relaxed space-y-4">
          {results.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {!isRevealed && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/20 backdrop-blur-[2px] transition-opacity duration-300">
          <button
            onClick={() => setIsRevealed(true)}
            className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white/95 hover:bg-white text-blue-700 shadow-[0_4px_32px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:scale-105 border border-blue-100 cursor-pointer"
            aria-label="Reveal Impact"
          >
            <Eye className="h-8 w-8" />
            <span className="text-[0.65rem] font-mono font-bold tracking-wider mt-1">REVEAL IMPACT</span>
          </button>
        </div>
      )}
    </div>
  );
}

