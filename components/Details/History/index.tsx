import styles from "./History.module.sass";
import cn from "classnames";
import Image from "../../Image";
import Link from "next/link";
import Icon from "../../Icon";

type HistoryType = {
    title: string;
    author: string;
    date: string;
    price?: string;
    url?: string;
    avatar: string;
};

type HistoryProps = {
    className?: string;
    items: HistoryType[];
};

const History = ({ className, items }: HistoryProps) => (
    <div className={cn(styles.history, className)}>
        {items.map((item, index) => (
            <div className={styles.item} key={index}>
                <div className={styles.avatar}>
                    <Image
                        src={item.avatar}
                        width={48}
                        height={48}
                        alt="Avatar"
                    />
                </div>
                <div className={styles.details}>
                    <div className={styles.box}>
                        <div className={styles.author}>
                            {item.title} <span>@{item.author}</span>
                        </div>
                        <div className={styles.date}>{item.date}</div>
                    </div>
                    {item.price && (
                        <div className={styles.line}>
                            <div className={cn("title", styles.price)}>
                                {item.price}
                            </div>
                            {item.url && (
                                <Link href={item.url}>
                                    <a className={styles.link}>
                                        <Icon name="external-link" size="20" />
                                    </a>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        ))}
    </div>
);

export default History;
