import cn from "classnames";
import Catalog from "../Catalog";
import styles from "./PageWishlist.module.sass";

import { sortingWishlist } from "../../mocks/sortingWishlist";

type PageWishlistProps = {
    className?: string;
};

const PageWishlist = ({ className }: PageWishlistProps) => {
    return (
        <div className={styles.main}>
            <div className={cn("container")}>
                <h1 className={cn("h2", styles.title)}>My wishlist</h1>
            </div>

            <Catalog value={sortingWishlist} wishlist />
        </div>
    );
};

export default PageWishlist;
