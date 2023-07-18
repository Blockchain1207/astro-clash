import styles from "./List.module.sass";
import cn from "classnames";
import Card from "../../Card";
import Loader from "../../Loader";
import AppendCard from "./AppendCard";

import { ItemsType } from "../../../types";

type ListProps = {
    className?: string;
    items: ItemsType[];
    bigPreview?: boolean;
    col2?: boolean;
    crop?: boolean;
    saleItem?: boolean;
};

const List = ({
    className,
    items,
    bigPreview,
    col2,
    crop,
    saleItem,
}: ListProps) => {
    const list = crop ? items.slice(0, 2) : items;

    return (
        <>
            <div
                className={cn(
                    styles.list,
                    { [styles.list_2]: col2 },
                    className
                )}
            >
                {list.map((x, index) => (
                    <Card
                        className={styles.card}
                        item={x}
                        key={index + Date.now()}
                        bigPreview={bigPreview}
                        saleItem={saleItem}
                    />
                ))}
                {crop && <AppendCard className={styles.card} />}
            </div>
            {!crop && (
                <div className={styles.btns}>
                    <button className={cn("button-stroke", styles.button)}>
                        <Loader className={styles.loader} />
                        Load more
                    </button>
                </div>
            )}
        </>
    );
};

export default List;
