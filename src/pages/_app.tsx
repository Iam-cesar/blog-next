import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../contexts/AuthContext";
import Navbar from "../shared/components/molecules/Navbar";
import useLoading from "../shared/hooks/useLoading";
import { GlobalStyle } from "../styles/GlobalStyle";
import { dark } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Navbar />

        {useLoading()}

        <div className="main-wraper">
          <Component {...pageProps} />

          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}
