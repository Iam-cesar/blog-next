import { theme } from "@UI/styles/theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import dynamic from "next/dynamic";
import { AppProvider } from "src/providers/AppProvider";

const TopBar = dynamic(() => import("@UI/components/TopBar/TopBar"), {});

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>

      <body>
        <AppProvider>
          <MantineProvider theme={theme}>
            <TopBar />

            {children}
          </MantineProvider>
        </AppProvider>
      </body>
    </html>
  );
}
