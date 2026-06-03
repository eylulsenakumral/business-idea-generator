import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "İş Fikirleri - Türkiye İçin Doğrulanmış İş Fikirleri",
  description: "Türk pazarına özgü, doğrulanmış iş fikirleri. 48 saat başlangıç planı, pazar analizi ve gerçekçi bütçe tahminleri. Ücretsiz başla.",
  keywords: "iş fikirleri, Türkiye girişimcilik, startup fikirleri, iş kurma, girişimcilik Türkiye, iş fikirleri 2024",
  authors: [{ name: "İş Fikirleri" }],
  openGraph: {
    title: "İş Fikirleri - Türkiye İçin Doğrulanmış İş Fikirleri",
    description: "Türk pazarına özgü, doğrulanmış iş fikirleri. 48 saat başlangıç planı, pazar analizi ve gerçekçi bütçe tahminleri.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "İş Fikirleri - Türkiye İçin Doğrulanmış İş Fikirleri",
    description: "Türk pazarına özgü, doğrulanmış iş fikirleri. Ücretsiz başla.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
