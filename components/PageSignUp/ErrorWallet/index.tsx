import cn from "classnames";
import styles from "./ErrorWallet.module.sass";
import Icon from "../../Icon";
import Link from "next/link";
import Image from "../../Image";

type BrowserType = {
    icon: string;
    title: string;
};

const browsers: BrowserType[] = [
    {
        icon: "/images/content/logos/google.svg",
        title: "Chrome",
    },
    {
        icon: "/images/content/logos/firefox.svg",
        title: "Firefox",
    },
];

type ErrorWalletProps = {};

const ErrorWallet = ({}: ErrorWalletProps) => {
    return (
        <div className={styles.body}>
            <div className={styles.alert}>
                <Icon name="alert" size={40} />
            </div>
            <div className={cn("h6", styles.title)}>
                Safari browser doesn&apos;t support MetaMask
            </div>
            <div className={styles.note}>
                You can only play Astrowars on desktop browser like Chrome or
                Firefox.
            </div>
            <div className={styles.buttons}>
                {browsers.map((x, index) => (
                    <button
                        className={cn("button-stroke", styles.button)}
                        key={index}
                    >
                        <div className={styles.browser}>
                            <Image
                                src={x.icon}
                                height={32}
                                width={32}
                                alt={x.title}
                            />
                        </div>
                        {x.title}
                    </button>
                ))}
            </div>
            <div className={styles.footer}>
                <Link href="/">
                    <a>Contact support</a>
                </Link>
            </div>
        </div>
    );
};

export default ErrorWallet;
