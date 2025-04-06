import { Comic_Neue, Poppins, Fredoka } from "next/font/google";
import "./globals.css";

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "HackHerVerse 2025 | A Dreams of Codes",
  description: "Where pastel meets power — a hackathon for dreamers and coders!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${comicNeue.variable} ${poppins.variable} ${fredoka.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
