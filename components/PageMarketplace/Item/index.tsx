import styles from "./Item.module.sass";
import cn from "classnames";
import Image from "../../Image";

import { numberWithCommas } from "../../../utils/index";

type ItemProps = {
    className?: string;
    item: any;
};

const Item = ({ className, item }: ItemProps) => (
    <div className={cn(styles.item, className)}>
        <div className={styles.preview} style={{ backgroundColor: item.color }}>
            <Image src={item.image} width={64} height={64} alt="Marketplace" />
        </div>
        <div className={styles.details}>
            <div className={styles.title}>{item.title}</div>
            <div className={cn("h3", styles.value)}>
                {numberWithCommas(item.value)}
                {item.price && (
                    <span className={styles.price}>
                        ${numberWithCommas(item.price)}
                    </span>
                )}
            </div>
        </div>
    </div>
);

export default Item;
