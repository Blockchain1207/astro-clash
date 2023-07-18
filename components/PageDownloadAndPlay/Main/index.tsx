import React from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Icon from "../../Icon";
import Link from "next/link";

type MainProps = {
    className?: string;
};

type PlatformsType = {
    title: string;
    info: string;
    icon: string;
    color: string;
    url: string;
};

const platforms: PlatformsType[] = [
    {
        title: "Astrowars for Windows",
        info: "Desktop",
        icon: "windows",
        color: "#71D1B5",
        url: "/",
    },
    {
        title: "Astrowars for Mac OS",
        info: "Desktop",
        icon: "apple",
        color: "#D0B3FF",
        url: "/",
    },
    {
        title: "Astrowars for iOS",
        info: "Mobile",
        icon: "appstore",
        color: "#FDC24F",
        url: "/",
    },
    {
        title: "Astrowars for Android",
        info: "Mobile",
        icon: "android",
        color: "#BEC4D6",
        url: "/",
    },
];

const Main = ({ className }: MainProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={cn("hero", styles.title)}>Download & play</div>
            <div className={cn("h5", styles.info)}>
                Play-to-Earn NFT Marketplace
            </div>
            <div className={styles.list}>
                {platforms.map((x, index) => (
                    <div className={styles.card} key={index}>
                        <div
                            className={styles.icon}
                            style={{ backgroundColor: x.color }}
                        >
                            <Icon name={x.icon} size={48} />
                        </div>
                        <div className={cn("h6", styles.card_title)}>
                            {x.title}
                        </div>
                        <div className={styles.card_info}>{x.info}</div>
                        <Link href={x.url}>
                            <a className={cn("button-sm", styles.button)}>
                                <Icon name="download" />
                                <span>Download</span>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
