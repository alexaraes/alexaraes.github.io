import "../styles/global.css";
import { jost } from '../app/ui/fonts';
import NavBar from "./ui/navbar";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={`${jost.className} antialiased`}>
          <NavBar />
          {children}
        </body>
      </html>
    )
  }