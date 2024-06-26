import "../styles/global.css";
import { jost, gabarito } from '../app/ui/fonts';
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";

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