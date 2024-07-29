import "./globals.css";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { Poppins } from "next/font/google";


const font = Poppins({ weight: ["400", "600"], subsets: ["latin"]});

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
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
