import { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./ModalSale.module.sass";
import Modal from "../Modal";
import Icon from "../Icon";
import Input from "../Input";

import { numberWithCommas } from "../../utils";

import PreviewLoader from "../PreviewLoader";
import Link from "next/link";
import Image from "../Image";

const item = {
    name: "Lumburr",
    crypto: "1 ETH",
    price: 32.018,
    location: "Mars",
};

const exchange = 2646.4;

type ModalSaleProps = {
    visibleModal: boolean;
    setVisibleModal: (e: boolean) => void;
};

type ModalStatesType = "setprice" | "confirm" | "complete";

type ModalType = {
    setStateModal: (e: ModalStatesType) => void;
};

const SetPrice = ({ setStateModal }: ModalType) => {
    const [value, setValue] = useState<string>("");
    return (
        <div className={cn(styles.set_price, styles.centered)}>
            <PreviewLoader
                className={styles.loader}
                srcImage="/images/content/loader-char.jpg"
            />
            <h5 className={cn("title", styles.subtitle)}>
                You’re putting Lumburr #07892 on sale for
            </h5>
            <div className={styles.field_price}>
                <Input
                    placeholder="0.00"
                    className={styles.input}
                    value={value}
                    onChange={setValue}
                />
                <div className={styles.currency}>
                    <span>ETH</span>
                    <Image
                        src="/images/content/etherium.svg"
                        width={24}
                        height={24}
                        alt="Etherium"
                    />
                </div>
            </div>
            <div className={styles.note}>
                Non officia et rerum fugit. Officia optio minima vel fugiat vel
                velit praesentium sit.
            </div>
            <button
                className={cn("button", styles.continue)}
                onClick={() => setStateModal("confirm")}
            >
                Continue
                <Icon name="arrow-right" size={20} />
            </button>
        </div>
    );
};

const Confirm = ({ setStateModal }: ModalType) => (
    <>
        <div className={cn("title", styles.title)}>Confirm sell</div>
        <div className={styles.info}>
            <div>
                <div className={cn("h6", styles.name)}>{item.name}</div>
                <div className={styles.location}>
                    <Icon name="location" size={20} />
                    {item.location}
                </div>
            </div>
            <div>
                <div className={cn("h6", styles.crypto)}>{item.crypto}</div>
                <div className={styles.price}>
                    ~ $ {numberWithCommas(item.price)}
                </div>
            </div>
        </div>
        <div className={styles.exchange}>
            <Icon name="usd" />
            Price
            <div className={styles.value}>
                1 ETH = ${numberWithCommas(exchange)}
            </div>
        </div>

        <button
            className={cn("button", styles.confirm)}
            onClick={() => setStateModal("complete")}
        >
            Confirm
        </button>
        <div className={styles.note}>
            Corrupti et voluptas. Ut ipsum <span>0,009 ETH</span> fugiat odio.
            Impedit ullam vel et est rror enim.
        </div>
    </>
);

const Complete = ({}) => (
    <div className={cn(styles.centered)}>
        <div className={cn(styles.icon, styles.success)}>
            <Icon name="check" size="48" />
        </div>
        <h5 className={cn("h5", styles.subtitle)}>Congrats!</h5>
        <div className={styles.text}>Awesome, your item was put on sale.</div>
        <Link href="/marketplace">
            <a className={cn("button", styles.view)}>View on marketplace</a>
        </Link>
        <Link href="/">
            <a className={styles.explore}>
                View on explore
                <Icon name="external-link" size="16" />
            </a>
        </Link>
    </div>
);

const ModalSale = ({ visibleModal, setVisibleModal }: ModalSaleProps) => {
    const [stateModal, setStateModal] = useState<ModalStatesType>("setprice");
    const [transferModal, setTransferModal] =
        useState<ModalStatesType>(stateModal);
    const [blink, setBlink] = useState<boolean>(false);

    const handleStateModal = (state: ModalStatesType) => {
        setBlink(true);
        setTransferModal(state);
    };

    useEffect(() => setStateModal(transferModal), [transferModal]);

    return (
        <Modal
            visible={visibleModal}
            onClose={() => setVisibleModal(false)}
            blink={blink}
            setBlink={setBlink}
        >
            <div className={styles.wrapper}>
                {
                    {
                        setprice: <SetPrice setStateModal={handleStateModal} />,
                        confirm: <Confirm setStateModal={handleStateModal} />,
                        complete: <Complete />,
                    }[stateModal]
                }
            </div>
        </Modal>
    );
};

export default ModalSale;
