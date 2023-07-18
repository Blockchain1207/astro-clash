import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";
import cn from "classnames";
import styles from "./Notification.module.sass";
import Icon from "../../Icon";
import Image from "../../Image";

type NotificationType = {
    title: string;
    time: string;
    avatar: string;
    username: string;
    url: string;
};

type NotificationProps = {
    className?: string;
    items: NotificationType[];
};

const Notification = ({ items, className }: NotificationProps) => {
    const [visible, setVisible] = useState(false);

    return (
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div
                className={cn(styles.notification, className, {
                    [styles.active]: visible,
                })}
            >
                <button
                    className={cn(styles.head, styles.active)}
                    onClick={() => setVisible(!visible)}
                >
                    <Icon name="notification" />
                    <div className={styles.counter}>3</div>
                </button>
                <div className={styles.body}>
                    <div className={styles.top}>
                        <div className={cn("title", styles.title)}>
                            Notification
                        </div>
                        <button
                            className={styles.close}
                            onClick={() => setVisible(false)}
                        >
                            <Icon name="close" size="20" />
                        </button>
                    </div>
                    <div className={styles.list}>
                        {items.map((x, index) => (
                            <Link href={x.url} key={index}>
                                <a
                                    className={styles.item}
                                    onClick={() => setVisible(!visible)}
                                >
                                    <div className={styles.avatar}>
                                        <Image
                                            src={x.avatar}
                                            width={48}
                                            height={48}
                                            alt="Avatar"
                                        />
                                    </div>
                                    <div className={styles.details}>
                                        <div className={styles.line}>
                                            <div className={styles.subtitle}>
                                                {x.title}
                                            </div>
                                            <div className={styles.time}>
                                                {x.time}
                                            </div>
                                        </div>
                                        <div className={styles.content}>
                                            <span>@{x.username}</span> purchased
                                            your item
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </OutsideClickHandler>
    );
};

export default Notification;
