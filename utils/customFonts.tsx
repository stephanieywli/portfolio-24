import localFont from "next/font/local";

const Garamond = localFont({
  src: [
    {
      path: "../assets/apple-garamond/AppleGaramond-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/apple-garamond/AppleGaramond.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/apple-garamond/AppleGaramond-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/apple-garamond/AppleGaramond-LightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/apple-garamond/AppleGaramond-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/apple-garamond/AppleGaramond-BoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-garamond",
});

const Neue = localFont({
  src: [
    {
      path: "../assets/neue-haas/NeueHaasDisplayBlack.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayBlackItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayLight.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayLightItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayMediu.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayMediumItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayRoman.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayRomanItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayThin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayThinItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayXThin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayXThinItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayXXThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/neue-haas/NeueHaasDisplayXXThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-neue",
});

export { Garamond, Neue };
