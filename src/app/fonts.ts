import localFont from "next/font/local";

export const aeonik = localFont({
  src: [
    {
      path: "../fonts/AeonikTRIAL-Regular.otf",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
});
