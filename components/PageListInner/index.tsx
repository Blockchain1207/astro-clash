import styles from "./PageListInner.module.sass";
import Link from "next/link";
import cn from "classnames";

type PageListInnerProps = {};

const links = [
    { title: "Home", url: "/" },
    { title: "Gameplay", url: "/gameplay" },
    { title: "Marketplace", url: "/marketplace" },
    { title: "Character details", url: "/character-details" },
    { title: "Item details", url: "/item-details" },
    { title: "Bundle details", url: "/bundle-details" },
    { title: "Planet details", url: "/planet-details" },
    { title: "Planet location", url: "/planet-location" },
    { title: "Getting started", url: "/getting-started" },
    { title: "Sign Up", url: "/sign-up" },
    { title: "Welcome to the game", url: "/welcome" },
    { title: "Download and play", url: "/download-and-play" },
    { title: "Meet the team", url: "/meet-the-team" },
    { title: "User profile", url: "/user-profile" },
    { title: "User setting", url: "/user-setting" },
    { title: "My wishlist", url: "/wishlist" },
    { title: "Wishlist detailed", url: "/wishlist-detailed" },
    { title: "Roadmap", url: "/roadmap" },
    { title: "Settings", url: "/settings" },
    { title: "Privacy notice", url: "/privacy" },
    { title: "FAQ", url: "/faq" },
];

const PageListInner = ({}: PageListInnerProps) => (
    <div className={styles.page}>
        <div className={cn("container-xl", styles.container)}>
            {links.map((x, index) => (
                <p key={index}>
                    <Link href={x.url}>
                        <a>{x.title}</a>
                    </Link>
                </p>
            ))}
        </div>
    </div>
);

export default PageListInner;
