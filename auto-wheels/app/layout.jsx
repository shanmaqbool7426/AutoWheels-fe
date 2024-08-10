"use client";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./styles/globals.scss";
import classes from "./styles/Demo.module.scss";
import {
  ColorSchemeScript,
  MantineProvider,
  Button,
  TextInput,
  Input,
  Checkbox,
} from "@mantine/core";
import { SessionProvider } from "next-auth/react";


import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

// Font configurations
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Theme configuration
const theme = {
  fontFamily: inter.style.fontFamily,
  fontSmoothing: true,
  headings: {
    fontFamily: poppins.style.fontFamily,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <ColorSchemeScript defaultColorScheme="auto" />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
          <MantineProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </MantineProvider>
       </body>
    </html>
  );
}
