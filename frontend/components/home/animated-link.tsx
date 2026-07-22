'use client';

import React from 'react';
import Link from 'next/link';

interface AnimatedLinkProps {
  href: string;
  children: string;
  className?: string;
  external?: boolean;
}

export function AnimatedLink({ href, children, className = "", external = false }: AnimatedLinkProps) {
  const words = children.split(" ");
  let charCounter = 0;

  const inner = (
    <span className="group relative inline-flex flex-wrap cursor-pointer overflow-hidden select-none" aria-label={children}>
      {words.map((word, wordIdx) => {
        const chars = word.split("");
        const isLastWord = wordIdx === words.length - 1;
        return (
          <React.Fragment key={wordIdx}>
            <span className="inline-block whitespace-nowrap">
              {chars.map((char, charIdx) => {
                const idx = charCounter++;
                return (
                  <span key={charIdx} className="relative inline-flex overflow-hidden leading-tight">
                    <span
                      className="relative inline-block transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
                      style={{ transitionDelay: `${idx * 0.015}s`, transitionDuration: '0.4s' }}
                    >
                      {char}
                      <span
                        className="absolute top-full left-0 text-[#c8b4a0]"
                        style={{ transitionDelay: `${idx * 0.015}s` }}
                      >
                        {char}
                      </span>
                    </span>
                  </span>
                );
              })}
            </span>
            {!isLastWord && <span className="inline-block">&nbsp;</span>}
          </React.Fragment>
        );
      })}
    </span>
  );

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
