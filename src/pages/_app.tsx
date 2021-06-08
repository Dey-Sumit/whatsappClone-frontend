import axios from "axios";
import { AuthProvider } from "src/context/auth.context";
import { LayoutProvider } from "src/context/layout.context";
import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {
  return (
    <LayoutProvider>
      <AuthProvider>
        <div className="font-serif">
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </LayoutProvider>
  );
}

export default MyApp;
