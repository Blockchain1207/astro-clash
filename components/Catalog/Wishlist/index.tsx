import cn from "classnames";
import styles from "./Wishlist.module.sass";
import CardGhost from "./CardGhost";
import Card from "./Card";

import { wishlists } from "../../../mocks/wishlists";

const listKeys = Object.keys(wishlists);

type WishlistProps = {
    className?: string;
    value: number;
};

const Wishlist = ({ className, value }: WishlistProps) => {
    const list = wishlists[listKeys[value]];

    return (
        <div className={styles.list}>
            {list.map((x, index) => (
                <Card
                    item={x}
                    key={index + Date.now()}
                    className={styles.card}
                />
            ))}
            <CardGhost className={styles.card} />
        </div>
    );
};

export default Wishlist;
