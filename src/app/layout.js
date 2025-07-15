//IMPORTS
import { Noto_Sans, Fredoka } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs"; //importing this to conditionally render the footer on the welcome page
import { Providers } from "@/Providers";
import Footer from "@/components/Footer";

// FONT SETUP
const OpenDyslexic = localFont({
  src: "./OpenDyslexic-Regular.woff",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

// METADATA - taken from problem domain
export const metadata = {
  title: "Magic Meadows",
  description:
    "Creating a safe hub for students to foster community and connections",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Providers>
          <body
            className={`${notoSans.variable} ${OpenDyslexic.variable} ${fredoka.variable} antialiased`}
          >
            {children}
            <SignedIn>
              <Footer />
            </SignedIn>
          </body>
        </Providers>
      </html>
    </ClerkProvider>
  );
}
