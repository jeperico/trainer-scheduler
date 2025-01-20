'use client';

import React from 'react';
import { Suspense } from 'react';
import '@/styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          {children}
        </Suspense>
      </body>
    </html>
  );
}
