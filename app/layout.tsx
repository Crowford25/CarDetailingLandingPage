import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOIR Auto Detail | Premium Car Detailing Malaysia",
  description: "Premium car detailing, paint correction, ceramic coating and interior detailing services in Kuala Lumpur and Petaling Jaya.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
