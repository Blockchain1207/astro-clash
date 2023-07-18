import { useState } from "react";
import styles from "./Item.module.sass";
import cn from "classnames";
import Image from "../../../Image";

type ItemProps = {
    className?: string;
    item: any;
    index: number;
};

const Item = ({ className, item, index }: ItemProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div
            className={cn(styles.item, { [styles.active]: visible }, className)}
        >
            <div className={styles.head} onClick={() => setVisible(!visible)}>
                <div className={cn("title", styles.number)}>{index + 1}</div>
                <div className={cn("h4", styles.title)}>{item.title}</div>
                <div
                    className={styles.preview}
                    style={{
                        backgroundColor: item.color,
                    }}
                >
                    <div className={styles.offset}>
                        <Image
                            src={item.image.src}
                            width={306}
                            height={306}
                            layout="fixed"
                            alt="Work"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.row}>
                    <div className={styles.content}>{item.content}</div>
                    <div className={styles.photo}>
                        <Image
                            src={item.image.src}
                            width={item.image.width}
                            height={item.image.height}
                            alt={item.image.alt}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
