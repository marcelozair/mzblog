import "../styles/globals.css";
import "../styles/auth/auth.css";
import "../styles/common/InputField.css";
import "../styles/common/ButtonField.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
