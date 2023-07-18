import { useState } from "react";
import cn from "classnames";
import styles from "./ModalWishlist.module.sass";
import Modal from "../Modal";
import Form from "../Form";
import Icon from "../Icon";
import Image from "../Image";
import Link from "next/link";

type ModalWishlistProps = {
    visibleModal: boolean;
    setVisibleModal: (e: boolean) => void;
};

const collections = [
    {
        image: {
            src: "/images/content/marketplace-3.png",
            height: 64,
            width: 64,
            alt: "Collection",
        },
        name: "Astronauto",
        quantity: "3 NFTs",
        color: "#30B28C",
    },
    {
        image: {
            src: "/images/content/marketplace-3.png",
            height: 64,
            width: 64,
            alt: "Collection",
        },
        name: "Lumburr",
        quantity: "3 NFTs",
        color: "#FDC24F",
    },
    {
        image: {
            src: "/images/content/marketplace-3.png",
            height: 64,
            width: 64,
            alt: "Collection",
        },
        name: "Items",
        quantity: "3 NFTs",
        color: "#9F73E6",
    },
];

const ModalWishlist = ({
    visibleModal,
    setVisibleModal,
}: ModalWishlistProps) => {
    const [search, setSearch] = useState<string>("");
    const [collection, setCollection] = useState<number>();

    const handleSubmit = () => alert();

    return (
        <Modal
            size="medium"
            visible={visibleModal}
            onClose={() => setVisibleModal(false)}
        >
            <div className={cn("title", styles.title)}>Add to wishlist</div>
            <Form
                className={styles.form}
                value={search}
                setValue={setSearch}
                onSubmit={() => handleSubmit()}
                placeholder="Search collection"
                type="text"
                name="search"
                icon="search"
            />
            <div className={styles.collections}>
                {collections.map((x, index) => (
                    <div
                        className={cn(styles.item, {
                            [styles.selected]: index === collection,
                        })}
                        onClick={() => setCollection(index)}
                        key={index}
                    >
                        <div
                            className={styles.preview}
                            style={{ backgroundColor: x.color }}
                        >
                            <Image
                                src={x.image.src}
                                height={x.image.height}
                                width={x.image.width}
                                alt={x.image.alt}
                            />
                        </div>
                        <div>
                            <div className={cn("title")}>{x.name}</div>
                            <div className={styles.quantity}>{x.quantity}</div>
                        </div>
                        <div className={styles.select}>
                            <Icon name="plus" />
                            <Icon name="check" size={20} />
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.append}>
                <button className={styles.select}>
                    <Icon name="plus" />
                </button>
            </div>

            <Link href="/wishlist">
                <a className={cn("button", styles.wishlist)}>Your wishlist</a>
            </Link>
        </Modal>
    );
};

export default ModalWishlist;
