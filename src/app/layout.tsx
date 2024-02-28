import type { Metadata } from "next";
import { Fredericka_the_Great } from "next/font/google";
import "./globals.css";
import ModeProvider from "./ModeProvider";

const playfairDisplay = Fredericka_the_Great({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Photo Dean Portfolio | Welcome",
  description: "Photo's By Photo Dean",
  authors: [{name: 'NnoromIV', url:'https://github.com/nnoromiv'}],
  keywords: ['photo', 'picture', 'images', 'dean', 'instagram', 'model'],
  publisher: 'NnoromIV'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfairDisplay.className}>
      <ModeProvider>
          {
            children
          }
        </ModeProvider>
      </body>
    </html>
  );
}
