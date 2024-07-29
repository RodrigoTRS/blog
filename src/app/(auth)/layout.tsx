export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full min-h-screen">
      <div className="flex flex-col p-8 w-full max-w-[360px]">
        {children}
      </div>
      <div className="bg-muted w-full p-8 flex justify-end items-end">
        <span className="text-muted-foreground text-sm">Peronal Blog | All rights reserved {new Date().getFullYear()}</span>
      </div>
    </main>
  )
}
