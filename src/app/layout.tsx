import type { Metadata } from "next";
import { Poppins, Source_Code_Pro } from "next/font/google";
import "@/app/styles/globals.css";
import VantaBackground from "@/components/ui/vantaBackground";
import Sidebar from "@/components/layout/sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-code-pro",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Mouad Ouaammou — Software Engineer Portfolio",
  description:
    "Full Stack Software Engineer specializing in web development, cloud technologies, and scalable systems. Explore my projects, experience, and technical skills.",
  keywords: [
    "Mouad Ouaammou",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript",
    "Cloud Engineering",
  ],
  authors: [{ name: "Mouad Ouaammou" }],
  creator: "Mouad Ouaammou",
  openGraph: {
    title: "Mouad Ouaammou — Software Engineer",
    description:
      "Portfolio showcasing projects, experience, and skills in full stack development and cloud technologies.",
    url: "https://github.com/mouaammou",
    siteName: "Mouad Ouaammou Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js"></script>
      </head>
      <body>
        {/* vanta background effect */}
        <VantaBackground />
        {/* sidebar */}
        <Sidebar />
        <div className="ml-14">
          {children}
        </div>
      </body>
    </html>
  );
}
