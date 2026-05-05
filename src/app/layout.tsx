import type { Metadata } from "next";
import { Poppins as PoppinsFont } from "next/font/google";
import { Sedgwick_Ave as SedgwickAveFont } from "next/font/google";
import { Inter as InterFont } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "/logo-image.png",
        href: "/logo-image.png",
      },
    ],
  },
};
// const Sedgwick_Ave = SedgwickAveFont({
//   variable: "--font-Sedgwick_Ave",
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });
const Sedgwick_Ave = SedgwickAveFont({
  variable: "--font-Sedgwick_Ave", 
  weight: "400",                 
  subsets: ["latin"],
});
const Inter = InterFont({
  variable: "--font-inter",
  weight: ["400", "500" ,"600", "700"],
  subsets: ["latin"],

});
const Poppins = PoppinsFont({
  variable: "--font-poppins",
  weight: ["400", "500" ,"600", "700"],
  subsets: ["latin"],

});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Poppins.variable} ${Inter.variable} ${Sedgwick_Ave.variable} antialiased`}
      >   
          <main>{children}</main>

  
      </body>
    </html>
  );
}
