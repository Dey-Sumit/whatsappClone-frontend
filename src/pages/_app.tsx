import { LayoutProvider } from "src/context/layout.context";
import "tailwindcss/tailwind.css";
import "../../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}

export default MyApp;
