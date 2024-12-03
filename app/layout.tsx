import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import { ClerkProvider } from '@clerk/nextjs'


const ubuntu = Inter({
  weight: ['400', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Eslintask | Crea listas de reproducción personalizadas en Spotify",
  description: "Crea y comparte listas de reproducción personalizadas con Plaisync. Descubre música nueva y organiza tus canciones favoritas fácilmente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body
          className={`${ubuntu.className} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >

            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
