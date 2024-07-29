import type { Metadata } from "next";
import { Header } from "./components/header";
import { Footer } from "./components/footer";


export const metadata: Metadata = {
  title: "Admin | Personal Blog",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen items-center p-8 py-4 lg:p-4 bg-primary-foreground">
        <div className="flex flex-col w-full max-w-[1120px] items-center py-10">
            {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
