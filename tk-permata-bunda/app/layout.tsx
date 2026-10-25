import { SiteLayout } from "@/components/layout/site-layout"
import "./globals.css"

export const metadata = {
  title: "TK Permata Bunda Jombang - Sistem Informasi Sekolah",
  description: "Website resmi TK Permata Bunda / KB Permata Bunda / TPA Permata Bunda Jombang",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
