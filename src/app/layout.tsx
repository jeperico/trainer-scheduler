'use client';

import React from 'react';
import { Suspense } from 'react';
import '@/styles/global.css';
import { usePathname } from 'next/navigation';
import Header from '@/layout/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="min-h-screen">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div>Loading...</div>
            </div>
          }
        >
          {pathname === '/new-training' ? null : <Header />}
          {children}
        </Suspense>
      </body>
    </html>
  );
}
