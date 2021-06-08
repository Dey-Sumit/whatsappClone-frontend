import axios from "axios";
import { AuthProvider } from "src/context/auth.context";
import { LayoutProvider } from "src/context/layout.context";
import { SWRConfig } from "swr";
import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {
  return (
    <LayoutProvider>
      <AuthProvider>
        <SWRConfig
          value={{
            fetcher: (url: string) => axios(url).then((res) => res.data),
          }}
        >
          <div className="font-serif">
            <Component {...pageProps} />
          </div>
        </SWRConfig>
      </AuthProvider>
    </LayoutProvider>
  );
}

export default MyApp;
