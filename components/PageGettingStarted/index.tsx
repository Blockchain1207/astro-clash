import cn from "classnames";
import Image from "../Image";
import Link from "next/link";
import styles from "./PageGettingStarted.module.sass";

type ItemsType = {
    preview: string;
    title: string;
    color: string;
};

const items: ItemsType[] = [
    {
        preview: "/images/content/connect-wallet.png",
        title: "Connect wallet & create account",
        color: "#E45F35",
    },
    {
        preview: "/images/content/characters.png",
        title: "Get your characters in the market place",
        color: "#9F73E6",
    },
    {
        preview: "/images/content/weapon.png",
        title: "Download game & play with friends",
        color: "#30B28C",
    },
];

type GettingStartedProps = {};

const PageGettingStarted = ({}: GettingStartedProps) => {
    return (
        <div className={cn("container-md", styles.container)}>
            <div className={cn("hero", styles.title)}>
                Getting started with Astroclash
            </div>

            <Link href="/sign-up">
                <a className={cn("button", styles.button)}>Get started now</a>
            </Link>

            <div className={styles.list}>
                {items.map((x, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.preview}>
                            <Image
                                src={x.preview}
                                height={236}
                                width={331}
                                alt={x.title}
                            />
                        </div>
                        <div
                            className={cn(styles.number)}
                            style={{ backgroundColor: x.color }}
                        >
                            {index + 1}
                        </div>
                        <div className={cn("h6", styles.note)}>{x.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageGettingStarted;
