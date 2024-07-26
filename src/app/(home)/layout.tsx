import "../globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const font = Poppins({ weight: ["400", "600"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Admin | Personal Blog",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex flex-col min-h-screen items-center p-8 py-4 lg:p-4 bg-primary-foreground">
            <div className="flex flex-col w-full max-w-[1120px] items-center py-10">
                {children}
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
