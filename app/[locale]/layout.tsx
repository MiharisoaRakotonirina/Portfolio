import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Providers from "./providers";
import { notFound } from "next/navigation";
import { GoogleTagManager } from "@next/third-parties/google";
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
  title: "Miharisoa Rakotonirina - Front-End Developer (React/TypeScript)",
  description:
    "Miharisoa's portfolio. Student and passionate front-end developer specializing in React, TypeScript, and building modern, responsive web applications.",
  openGraph: {
    title: "Miharisoa Rakotonirina | Front-End Developer Portfolio",
    description:
      "Check out Miharisoa's portfolio, a student and front-end developer, showcasing projects built with React, Next.js, and Tailwind CSS. Building modern, responsive websites with a focus on clean design.",
  },
  keywords:
    "Miharisoa Rakotonirina, front-end developer, portfolio, React, Next.js, Tailwind CSS, web development, responsive design,CSS, student portfolio",
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
