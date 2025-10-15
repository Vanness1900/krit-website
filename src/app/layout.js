import "./globals.css";

import Navbar from '@/components/Navbar';

export const metadata = {
  title: "KRIT",
  description: "Krit's Website",
  icons: {
    icon: '/Krit_Favicon.svg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}