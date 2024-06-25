import "../styles/global.css";
import { jost } from '../app/ui/fonts';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={`${jost.className} antialiased`}>{children}</body>
      </html>
    )
  }