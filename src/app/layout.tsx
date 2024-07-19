import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "jj-immigration",
  description: "Votre clé pour une vie meilleure au Canada. Services d'immigration fiables et personnalisés.",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        // className={inter.className}
      >
        <ToastContainer />
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  );
}
