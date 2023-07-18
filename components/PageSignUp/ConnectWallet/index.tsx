import cn from "classnames";
import Image from "next/image";
import styles from "./ConnectWallet.module.sass";
import Icon from "../../Icon";
import Content from "../../Content";
import Link from "next/link";
import Loader from "../../Loader";

type ServicesType = {
    icon: string;
    title: string;
    url?: string;
    loading?: boolean;
    disabled?: boolean;
    error?: true;
};

const services: ServicesType[] = [
    {
        title: "Metamask",
        icon: "/images/content/logos/metamask.svg",
        url: "/get-started/create-account",
    },
    {
        title: "Coinbase wallet",
        icon: "/images/content/logos/coinbase.svg",
        error: true,
    },
    {
        title: "Trust wallet",
        icon: "/images/content/logos/trust.svg",
        loading: true,
    },
    {
        title: "Rainbow",
        icon: "/images/content/logos/rainbow.svg",
        disabled: true,
    },
];

type ConnectWalletProps = {
    setStatePage: (state: string) => any;
};

const ConnectWallet = ({ setStatePage }: ConnectWalletProps) => {
    return (
        <>
            <h2 className={cn("h2", styles.title)}>Connect wallet</h2>
            <div className={styles.note}>
                Choose one of available wallet providers or create a new wallet.
            </div>

            <div className={styles.list}>
                {services.map((x, index) => (
                    <button
                        key={index}
                        disabled={x.disabled}
                        onClick={x.error && (() => setStatePage("error"))}
                        className={cn(
                            "button-stroke",
                            styles.button,

                            {
                                [styles.loading]: x.loading,
                            }
                        )}
                    >
                        {!x.loading ? (
                            <>
                                <div className={styles.icon}>
                                    <Image
                                        src={x.icon}
                                        width={32}
                                        height={32}
                                        alt={x.title}
                                    />
                                </div>
                                {x.title}
                            </>
                        ) : (
                            <>
                                <Loader spinner={32} />
                                Loading...
                            </>
                        )}
                    </button>
                ))}
            </div>

            <div className={styles.footer}>
                <Content className={styles.more} moreButton>
                    <></>
                </Content>

                <Link href="/">
                    <a>What is a wallet?</a>
                </Link>
            </div>
        </>
    );
};

export default ConnectWallet;
