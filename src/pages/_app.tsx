import { AuthProvider } from "contexts/AuthContext";
import type { AppProps } from "next/app";
import { Loading } from "shared/components/molecules/Loading";
import { TopBar } from "shared/components/organisms/TopBar";
import useLoading from "shared/hooks/useLoading";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/GlobalStyle";
import { light } from "styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const { isLoading } = useLoading();

  return (
    <AuthProvider>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <TopBar />

        {isLoading && <Loading />}

        {!isLoading && (
          <div className="main-wraper">
            <Component {...pageProps} />
          </div>
        )}
      </ThemeProvider>
    </AuthProvider>
  );
}
