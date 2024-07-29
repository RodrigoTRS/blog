import type { Metadata } from "next";
import { Sidebar } from "./components/sidebar";


export const metadata: Metadata = {
  title: "Admin | Personal Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full bg-primary-foreground">
      <Sidebar/>
      <div className="flex flex-col w-full items-center justify-start ml-[332px]">
        <div className="flex flex-col w-full max-w-[1120px] p-6">
          {children}
        </div>
      </div>
    </main>
  )
}
