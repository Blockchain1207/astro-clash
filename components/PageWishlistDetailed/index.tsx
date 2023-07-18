import cn from "classnames";
import Catalog from "../Catalog";
import styles from "./PageWishlistDetailed.module.sass";

import { sortingMarket } from "../../mocks/sortingCatalog";

type PageWishlistDetailedProps = {
    className?: string;
};

const PageWishlistDetailed = ({ className }: PageWishlistDetailedProps) => {
    return (
        <div className={styles.main}>
            <Catalog value={sortingMarket} />
        </div>
    );
};

export default PageWishlistDetailed;
