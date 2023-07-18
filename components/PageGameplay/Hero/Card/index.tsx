import styles from "./Card.module.sass";
import Link from "next/link";
import cn from "classnames";
import Image from "../../../Image";

type ItemType = {
    url: string;
    title: string;
    label: string;
    image: string;
};

type CardProps = {
    className?: string;
    item: ItemType;
};

const Card = ({ className, item }: CardProps) => (
    <Link href={item.url}>
        <a className={cn(styles.card, className)}>
            <div className={styles.preview}>
                <Image src={item.image} layout="fill" alt="Card" />
            </div>
            <div className={styles.body}>
                <div className={cn("label-purple", styles.label)}>
                    {item.label}
                </div>
                <div className={cn("title", styles.title)}>{item.title}</div>
            </div>
        </a>
    </Link>
);

export default Card;
