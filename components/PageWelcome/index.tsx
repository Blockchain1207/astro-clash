import { useState } from "react";
import cn from "classnames";
import styles from "./PageWelcome.module.sass";
import Card from "./Card";
import Link from "next/link";
import ModalPurchase from "../ModalPurchase";

import { ItemsSlideType } from "../../types";

const items: ItemsSlideType[] = [
    {
        title: "Astronauto",
        image: {
            src: "/images/content/characters/image-2.png",
            width: 335,
            height: 320,
            alt: "Astronauto",
        },
        location: "Earth",
        crypto: "0,008 ETH",
        price: 32.16,
    },
    {
        title: "Lumburr",
        image: {
            src: "/images/content/characters/image-3.png",
            width: 335,
            height: 320,
            alt: "Lumburr",
        },
        location: "Mars",
        crypto: "0,008 ETH",
        price: 32.16,
    },
];

type WelcomeProps = {};

const Welcome = ({}: WelcomeProps) => {
    const [checkItem, setCheckItem] = useState<ItemsSlideType>();
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    return (
        <div className={styles.wrapper}>
            <div className={cn("container-md", styles.container)}>
                <h2 className={cn("h2", styles.title)}>Welcome to the game</h2>
                <h6 className={cn("h6", styles.info)}>
                    Which side you wanna be on?
                </h6>
                <div className={styles.cards}>
                    {items.map((x, index) => (
                        <Card
                            value={checkItem}
                            setValue={setCheckItem}
                            item={x}
                            key={index}
                        />
                    ))}
                </div>
                <div className={styles.note}>
                    You can upgrade your character later in game.&nbsp;
                    <Link href="/">
                        <a>Learn more</a>
                    </Link>
                </div>
                <button
                    className={cn("button", styles.button)}
                    onClick={() => setVisibleModal(true)}
                >
                    Purchase now
                </button>

                <ModalPurchase
                    visibleModal={visibleModal}
                    setVisibleModal={() => setVisibleModal(false)}
                />
            </div>
        </div>
    );
};

export default Welcome;
