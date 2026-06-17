import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/custom/theme-provider";
import Providers from "./providers";
import { notFound } from "next/navigation";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miharisoa Rakotonirina - Full-Stack Developer (React/NestJS/TypeScript)",
  description:
      "Miharisoa's portfolio. Student and passionate Full-Stack developer specializing in React, NestJS, TypeScript, and building modern, responsive web applications.",
  openGraph: {
    title: "Miharisoa Rakotonirina | Full-Stack Developer Portfolio",
    description:
        "Check out Miharisoa's portfolio, a student and Full-Stack developer, showcasing projects built with React, Next.js, NestJS, and Tailwind CSS. Building modern, responsive websites with a focus on clean design.",
  },
  keywords:
      "Miharisoa Rakotonirina, full-stack developer, portfolio, React, Next.js, NestJS, TypeScript, Tailwind CSS, web development, responsive design, CSS, student portfolio",
  icons: {
    icon: "/web-app-manifest-512x512.png",
  },
};

const LOCALES = ["fr", "en"] as const;
type Locale = (typeof LOCALES)[number];

export const dynamicParams = false;
export function generateStaticParams() {
  const params = LOCALES.map((locale) => ({ locale }));
  return params;
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T3YLCLH6NW"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T3YLCLH6NW');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <Providers locale={locale}>{children}</Providers>
        </ThemeProvider>
        <Toaster richColors={true} />
      </body>
    </html>
  );
}
