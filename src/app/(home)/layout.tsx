import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/header";
import "../globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Footer } from "@/components/footer";

const font = Poppins({ weight: ["400", "600"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Personal Blog",
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
          <Header />
          <main className="flex flex-col min-h-screen items-center p-8 py-4 lg:p-4">
            <div className="flex flex-col w-full max-w-[1120px] items-center py-10">
              {children}
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
