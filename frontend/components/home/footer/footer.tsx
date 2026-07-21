'use client';

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.4 5.4 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 text-zinc-400 overflow-hidden pt-20 pb-10 border-t border-zinc-900">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand & Newsletter - Span 4 */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-black text-white tracking-tighter uppercase">KAIZEN.</span>
                <span className="text-2xl font-black text-emerald-500 tracking-tighter uppercase">INFINITIES</span>
              </Link>
              <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-sm">
                Engineering intelligent digital enterprises through advanced cloud infrastructure, AI-powered automation, and zero-trust cybersecurity.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm tracking-widest uppercase">Stay Updated</h4>
              <div className="flex items-center max-w-sm">
                <input
                  type="email"
                  placeholder="Enterprise email address"
                  className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                />
                <Button className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-none rounded-r-lg px-6 py-3 h-auto">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Grid - Span 8 */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 lg:ml-12">
            <div>
              <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Solutions</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">CyberNex Security</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Cloud Infrastructure</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">AI Automation</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">ERP Systems</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Framework</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">KINETIC™ Delivery</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Zero-Trust Architecture</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Agile Engineering</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">CI/CD Pipelines</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Connect</h4>
              <div className="flex flex-col space-y-4">
                <a href="#" className="flex items-center gap-3 hover:text-emerald-400 transition-colors text-sm">
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-emerald-400 transition-colors text-sm">
                  <TwitterIcon className="w-4 h-4" /> Twitter
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-emerald-400 transition-colors text-sm">
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-emerald-400 transition-colors text-sm">
                  <Mail className="w-4 h-4" /> Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Kaizen Infinities Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-zinc-600">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
