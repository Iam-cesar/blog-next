import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../contexts/AuthContext";
import Navbar from "../shared/components/molecules/Navbar";
import { GlobalStyle } from "../styles/GlobalStyle";
import { dark } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Navbar />
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
      </ThemeProvider>
    </AuthProvider>
  );
}
