'use client';

import React from 'react';

export interface TextSegment {
  text: string;
  isHighlighted?: boolean;
  className?: string;
}

interface AnimatedTitleProps {
  segments: TextSegment[];
  className?: string;
  theme?: 'dark' | 'light';
}

export function AnimatedTitle({ segments, className = "", theme = "dark" }: AnimatedTitleProps) {
  let charCounter = 0;

  // Compute clean text for screen readers
  const fullText = segments.map(s => s.text).join("");

  const isLight = theme === "light";

  return (
    <h2 className={`group relative cursor-default select-none ${className}`}>
      <span className="sr-only">{fullText}</span>
      <span className="flex flex-wrap items-baseline" aria-hidden="true">
        {segments.map((segment, segIdx) => {
          // Split segment text into individual words
          const words = segment.text.split(" ");
          
          // Determine colors based on theme and segment properties
          let defaultNormal = isLight ? "text-[#080808]" : "text-white";
          let defaultHighlight = isLight ? "text-[#9e7b56]" : "text-[#c8b4a0]";
          let defaultHoverHighlight = isLight ? "text-[#080808]" : "text-white";
          let defaultHoverNormal = isLight ? "text-[#9e7b56]" : "text-[#c8b4a0]";

          let colorClass = segment.isHighlighted ? defaultHighlight : defaultNormal;
          let hoverColorClass = segment.isHighlighted ? defaultHoverHighlight : defaultHoverNormal;
          
          // If the segment has a custom className with a text color override, respect it
          if (segment.className?.includes("text-white/40")) {
            colorClass = isLight ? "text-[#080808]/50" : "text-white/40";
            hoverColorClass = isLight ? "text-[#9e7b56]" : "text-[#c8b4a0]/60";
          } else if (segment.className?.includes("text-white/60")) {
            colorClass = isLight ? "text-[#080808]/70" : "text-white/60";
            hoverColorClass = isLight ? "text-[#9e7b56]" : "text-[#c8b4a0]/80";
          }

          const isBlock = segment.className?.includes("block");

          return (
            <span 
              key={segIdx} 
              className={`inline-flex flex-wrap ${isBlock ? "w-full block" : ""}`}
            >
              {words.map((word, wordIdx) => {
                const isLastWord = wordIdx === words.length - 1;
                const chars = word.split("");
                
                return (
                  <React.Fragment key={wordIdx}>
                    {/* Word wrapper: ensures words wrap naturally and don't split */}
                    <span className="inline-block whitespace-nowrap">
                      {chars.map((char, charIdx) => {
                        const currentIdx = charCounter++;
                        return (
                          <span
                            key={charIdx}
                            className="relative inline-flex overflow-hidden"
                          >
                            <span
                              className="relative inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
                              style={{ transitionDelay: `${currentIdx * 0.006}s` }}
                            >
                              <span className={colorClass}>{char}</span>
                              <span
                                className={`absolute top-full left-0 ${hoverColorClass}`}
                                style={{ transitionDelay: `${currentIdx * 0.006}s` }}
                              >
                                {char}
                              </span>
                            </span>
                          </span>
                        );
                      })}
                    </span>
                    {/* Add spacing between words */}
                    {!isLastWord && (
                      <span className="inline-block">&nbsp;</span>
                    )}
                  </React.Fragment>
                );
              })}
            </span>
          );
        })}
      </span>
    </h2>
  );
}
