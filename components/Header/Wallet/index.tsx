import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";
import cn from "classnames";
import styles from "./Wallet.module.sass";
import Icon from "../../Icon";
import Image from "../../Image";

import { formatWalletAddress } from "../../../utils";

type NotificationProps = {
    className?: string;
    wide?: boolean;
};

const Notification = ({ className, wide }: NotificationProps) => {
    const [visible, setVisible] = useState(false);
    const wallet: string = "hk980io73bz880hk980io73bz880";

    return (
        <OutsideClickHandler onOutsideClick={() => !wide && setVisible(false)}>
            <div
                className={cn(styles.wallet, className, {
                    [styles.active]: visible,
                    [styles.wide]: wide,
                })}
            >
                <button
                    className={cn(styles.head, styles.active, {
                        [styles.wide]: wide,
                    })}
                    onClick={() => setVisible(!visible)}
                >
                    <div className={styles.avatar}>
                        <Image
                            src="/images/content/avatars/fox.svg"
                            width={20}
                            height={20}
                            alt="Avatar"
                        />
                    </div>
                    <div className={styles.code}>
                        {wide
                            ? formatWalletAddress(wallet, 10, 10)
                            : formatWalletAddress(wallet, 7, 7)}
                    </div>
                </button>
                <div
                    className={cn(styles.body, {
                        [styles.wide]: wide,
                    })}
                >
                    <div className={styles.label}>Connected with Metamask</div>
                    <div className={styles.line}>
                        <div className={styles.code}>
                            {formatWalletAddress(wallet, 10, 10)}
                        </div>
                        <button className={styles.copy}>
                            <Icon name="copy" size="20" />
                        </button>
                    </div>
                    <button
                        className={cn(
                            "button-stroke button-sm",
                            styles.disconnectButton
                        )}
                    >
                        Disconnect wallet
                    </button>
                    <div className={styles.link}>
                        <a href="#" target="_blank" rel="noreferrer">
                            View on explore
                            <Icon name="external-link" size="16" />
                        </a>
                    </div>
                    <div className={styles.foot}>
                        <div className={styles.balance}>
                            <div className={styles.currency}>
                                <Image
                                    src="/images/content/etherium.svg"
                                    width={40}
                                    height={40}
                                    alt="Etherium"
                                />
                            </div>
                            <div className={styles.details}>
                                <div className={styles.label}>Balance</div>
                                <div className={cn("h6", styles.price)}>
                                    1.5836
                                </div>
                            </div>
                        </div>
                        <button className={cn("button-md", styles.button)}>
                            Withdraw
                        </button>
                    </div>
                </div>
            </div>
        </OutsideClickHandler>
    );
};

export default Notification;
