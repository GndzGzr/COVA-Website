import './globals.css';
import type { Metadata } from "next";
import ClientLayout from './ClientLayout';
import { LoadingProvider } from './context/LoadingContext';

export const metadata: Metadata = {
  title: "Beyond Vision",
  description: "A mobile visual assistant for visually impaired individuals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/font/HelveticaNeueRoman.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/font/HelveticaNeueBold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/font/HelveticaNeueMedium.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </head>
      <body className="font-['Helvetica_Neue'] antialiased">
        <LoadingProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </LoadingProvider>
      </body>
    </html>
  );
}
