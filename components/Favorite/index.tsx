import React, { useState } from "react";
import cn from "classnames";
import styles from "./Favorite.module.sass";
import Icon from "../Icon";
import ModalWishlist from "../ModalWishlist";

type FavoriteProps = {
    className?: string;
};

const Favorite = ({ className }: FavoriteProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [visibleModalWishlist, setVisibleModalWishlist] =
        useState<boolean>(false);

    const handleClick = (visible: boolean) => {
        setVisible(!visible);
        setVisibleModalWishlist(true);
    };

    return (
        <>
            <button
                className={cn(
                    styles.button,
                    {
                        [styles.active]: visible,
                    },
                    className
                )}
                onClick={() => handleClick(visible)}
            >
                <Icon name="heart" size="20" />
                <Icon name="heart-fill" size="20" />
            </button>

            <ModalWishlist
                visibleModal={visibleModalWishlist}
                setVisibleModal={() => setVisibleModalWishlist(false)}
            />
        </>
    );
};

export default Favorite;
