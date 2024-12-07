import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Todo",
  description: "Todo test application in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <AppProviders>{children}</AppProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
