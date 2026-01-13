import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "RoundX Transport | Nationwide Transport & Shipping Services USA",
  description:
      "RoundX Transport provides reliable nationwide transport services across the USA. Safe, fast, and affordable shipping for vehicles, freight, and more.",
  keywords: [
    "RoundX Transport",
    "nationwide transport company USA",
    "vehicle shipping USA",
    "freight shipping USA",
    "auto transport nationwide",
    "logistics services USA",
    "truck transport USA",
    "shipping company USA",
  ],
  openGraph: {
    title: "RoundX Transport | Nationwide Transport & Shipping Services USA",
    description:
        "Reliable nationwide transport services across the USA. Vehicle, freight, and auto shipping made easy with RoundX Transport.",
    url: "https://roundxtransport.com",
    siteName: "RoundX Transport",
    images: [
      {
        url: "https://roundxtransport.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon/favicon.ico",      // default favicon
    apple: "favicon/apple-touch-icon.png", // apple touch icon
  },
};


export default function RootLayout({ children }) {
  return (
      <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <script
              dangerouslySetInnerHTML={{
                  __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  // Fallback if localStorage is not available
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
              }}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.ico"/>*/}
          {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico"/>*/}
          {/*<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>*/}
          {/*<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg"/>*/}
          {/*<link rel="shortcut icon" href="/favicon/favicon.ico"/>*/}
          {/*<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>*/}
          {/*<link rel="manifest" href="/favicon/site.webmanifest"/>*/}

          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/site.webmanifest"/>
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable}`}>
      <ThemeProvider>
          <Script
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC5YK7fEcUyWSyjeMq_VKcgqF2THj2NMiQ&callback=initMap&libraries=places"
              strategy="beforeInteractive"
        />
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-077RQE453D"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-077RQE453D');
            `}
        </Script>
        {children}
      </ThemeProvider>
      </body>
      </html>
  );
}


