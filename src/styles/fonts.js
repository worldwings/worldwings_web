import { Gideon_Roman as Font1 } from "next/font/google";
import localFont from "next/font/local";

const font1 = Font1({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-primary",
});

const sunsive = localFont({
  src: [
    {
      path: "../../public/fonts/sunsive-medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sunsive",
});

export const FONTS = {
  font1: font1.className,
  font2: sunsive.className,
};

export const FONT_VARIABLES = `${font1.variable} ${sunsive.variable}`;

export default FONTS;
