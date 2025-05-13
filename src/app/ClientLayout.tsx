'use client';

import LoadingScreen from './components/LoadingScreen';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoadingScreen />
      {children}
    </>
  );
} 