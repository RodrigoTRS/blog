import "../globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Poppins } from "next/font/google";
import { Sidebar } from "./components/sidebar";


const font = Poppins({ weight: ["400", "600"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Admin | Personal Blog",
};

export default function RootLayout({
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
            <main className="flex min-h-screen w-full bg-primary-foreground">
              <Sidebar/>
              <div className="flex flex-col w-full items-center justify-start ml-[332px]">
                <div className="flex flex-col w-full max-w-[1120px] p-12">
                  {children}
                </div>
              </div>
            </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
