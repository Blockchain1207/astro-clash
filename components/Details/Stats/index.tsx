import styles from "./Stats.module.sass";
import cn from "classnames";
import Image from "../../Image";
import Icon from "../../Icon";

import { numberWithCommas } from "../../../utils";

type StatsType = {
    title: string;
    content?: string;
    value?: number;
    image?: string;
    icon?: string;
    color?: string;
    fill?: string;
    circle?: boolean;
};

type StatsProps = {
    className?: string;
    items: StatsType[];
};

const Stats = ({ className, items }: StatsProps) => (
    <div className={cn(styles.stats, className)}>
        {items.map((item, index) => (
            <div className={styles.item} key={index}>
                <div
                    className={styles.preview}
                    style={{ backgroundColor: item.color }}
                >
                    {item.image && (
                        <Image
                            src={item.image}
                            width={48}
                            height={48}
                            alt="Avatar"
                        />
                    )}
                    {item.icon && <Icon name={item.icon} fill={item.fill} />}
                    {item.circle && <div className={styles.circle}></div>}
                </div>
                <div className={styles.details}>
                    <div className={styles.title}>{item.title}</div>
                    {item.content && (
                        <div className={styles.content}>{item.content}</div>
                    )}
                    {item.value && (
                        <div className={styles.content}>
                            {numberWithCommas(item.value)}
                        </div>
                    )}
                </div>
            </div>
        ))}
    </div>
);

export default Stats;
