import type { AppProps } from "next/app";
import "../styles/app.sass";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
