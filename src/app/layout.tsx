import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/components/ModeToggle";
import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "@/components/Header";
 
export const metadata: Metadata = {
  title: "ShhpingList",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=""  suppressHydrationWarning>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen w-full flex-col">
            <HeaderComponent />
            <main className="main">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
