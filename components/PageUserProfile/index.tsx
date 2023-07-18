import cn from "classnames";
import Main from "./Main";
import Catalog from "../Catalog";
import JoinCommunity from "../JoinCommunity";
import styles from "./PageUserProfile.module.sass";

import { sortingProfile } from "../../mocks/sortingCatalog";

type UserProfileProps = {};

const UserProfile = ({}: UserProfileProps) => {
    return (
        <div className={cn("section-main", styles.section)}>
            <Main />
            <Catalog
                value={sortingProfile}
                sort
                crop
                className={styles.catalog}
                saleItem
            />
            <JoinCommunity />
        </div>
    );
};

export default UserProfile;
