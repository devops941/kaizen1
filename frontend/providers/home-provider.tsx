'use client';

import React from 'react';
import { Header } from "@/components/home/header/header";
import { Footer } from "@/components/home/footer/footer";

export function HomeProvider({ children }: { children: React.ReactNode }) {
  // You can add global states or other providers here in the future
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
