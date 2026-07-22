'use client';

import React from 'react';

interface AnimatedButtonProps {
  children: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  charDelay?: number; // ms delay between each character, default 18ms
  px?: string;        // horizontal padding e.g. "px-4", "px-6" — default "px-5"
  py?: string;        // vertical padding e.g. "py-2", "py-3" — default "py-2.5"
  icon?: React.ReactNode; // optional icon to render after the animated text
}

export function AnimatedButton({
  children,
  className = "",
  onClick,
  type = "button",
  charDelay = 18,
  px = "px-5",
  py = "py-2.5",
  icon,
}: AnimatedButtonProps) {
  const chars = children.split("");

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group cursor-pointer select-none ${px} ${py} ${className}`}
    >
      <span className="inline-flex items-center gap-3 leading-none" aria-label={children}>
        <span className="inline-flex items-center leading-none">
          {chars.map((char, idx) => (
            <span
              key={idx}
              className="relative inline-block overflow-hidden"
              style={{ height: '1.1em' }}
            >
              <span
                className="relative inline-block transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
                style={{
                  transitionDelay: `${idx * charDelay}ms`,
                  transitionDuration: '400ms',
                }}
              >
                {char === " " ? "\u00A0" : char}
                <span className="absolute top-full left-0">
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            </span>
          ))}
        </span>
        {icon && (
          <span className="inline-flex items-center leading-none">
            {icon}
          </span>
        )}
      </span>
    </button>
  );
}
