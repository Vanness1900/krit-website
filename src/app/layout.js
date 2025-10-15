import "./globals.css";

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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
        <Footer />
      </body>
    </html>
  );
}