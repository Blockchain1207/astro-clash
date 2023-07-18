import { useRouter } from "next/router";
import cn from "classnames";
import styles from "./Layout.module.sass";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

import {
    getDescriptionFromRoute,
    getTitleFromRoute,
    getMetaImageFromRoute,
} from "../../routes";

type LayoutProps = {
    hideHeader?: boolean;
    hideFooter?: boolean;
    children: React.ReactNode;
    gray?: boolean;
    noAuth?: boolean;
};

const Layout = ({
    hideHeader,
    hideFooter,
    children,
    gray,
    noAuth,
}: LayoutProps) => {
    const router = useRouter();
    const title = getTitleFromRoute(router.pathname);
    // const description = getDescriptionFromRoute(router.pathname);
    // const image = getMetaImageFromRoute(router.pathname);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
                />
                <meta name="format-detection" content="telephone=no" />
                <link rel="icon" href="/metadata/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/metadata/apple-touch-icon.png"
                />
                <link
                    rel="mask-icon"
                    href="/metadata/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/metadata/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/metadata/favicon-16x16.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/metadata/android-chrome-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="512x512"
                    href="/metadata/android-chrome-512x512.png"
                />
                <meta
                    name="msapplication-TileImage"
                    content="/metadata/mstile-150x150.png"
                ></meta>
                <link rel="manifest" href="/metadata/site.webmanifest" />
                {/* Description no longer than 155 characters */}
                <meta
                    name="AstroClash: Play-to-Earn NFT Marketplace Kit"
                    content="Epic Play-to-Earn NFT Marketplace Kit"
                />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ui8" />
                <meta
                    name="twitter:title"
                    content="AstroClash: Play-to-Earn NFT Marketplace Kit"
                />
                <meta
                    name="twitter:description"
                    content="AstroClash: Play-to-Earn NFT Marketplace Kit"
                />
                <meta name="twitter:creator" content="@ui8" />
                <meta name="twitter:image" content="/metadata/twitter.png" />
                {/* Open Graph data */}
                <meta
                    property="og:title"
                    content="AstroClash: Play-to-Earn NFT Marketplace Kit"
                />
                <meta property="og:type" content="Article" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/astroclash-play-to-earn-nft-marketplace-kit"
                />
                <meta property="og:image" content="/metadata/facebook.png" />
                <meta
                    property="og:description"
                    content="AstroClash: Play-to-Earn NFT Marketplace Kit"
                />
                <meta
                    property="og:site_name"
                    content="AstroClash: Play-to-Earn NFT Marketplace Kit"
                />
                <meta property="fb:admins" content="132951670226590" />
            </Head>
            <div className={cn(styles.layout, { [styles.gray]: gray })}>
                {!hideHeader && <Header noAuth={noAuth} />}
                <div className={styles.inner}>{children}</div>
                {!hideFooter && <Footer />}
            </div>
        </>
    );
};

export default Layout;
