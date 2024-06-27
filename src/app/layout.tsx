import "../styles/global.css";
import { gabarito } from '../app/ui/fonts';
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Alexa Schreffler',
  description: 'A website portfolio for Alexa Schreffler.',
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={`${gabarito.className} antialiased min-h-screen`}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    )
  }