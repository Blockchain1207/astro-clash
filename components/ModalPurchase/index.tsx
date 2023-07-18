import { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./ModalPurchase.module.sass";
import Modal from "../Modal";
import Icon from "../Icon";

import { numberWithCommas } from "../../utils";

import PreviewLoader from "../PreviewLoader";
import Link from "next/link";

const item = {
    name: "Lumburr",
    crypto: "0,008 ETH",
    price: 32.018,
    location: "Mars",
};

const exchange = 2646.4;

type ModalPurchaseProps = {
    visibleModal: boolean;
    setVisibleModal: (e: boolean) => void;
};

type ModalStatesType = "confirm" | "waiting" | "complete" | "error";

type ModalType = {
    setStateModal: (e: ModalStatesType) => void;
};

const Confirm = ({ setStateModal }: ModalType) => (
    <>
        <div className={cn("title", styles.title)}>Confirm purchase</div>
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
            onClick={() => setStateModal("waiting")}
        >
            Confirm purchase
        </button>
        <div className={styles.note}>
            Corrupti et voluptas. Ut ipsum <span>0,009 ETH</span> fugiat odio.
            Impedit ullam vel et est rror enim.
        </div>
    </>
);

const Waiting = ({}) => (
    <div className={cn(styles.waiting, styles.centered)}>
        <PreviewLoader
            className={styles.loader}
            srcImage="/images/content/loader-char.jpg"
        />
        <h5 className={cn("h5", styles.subtitle)}>Waiting for confirmation</h5>
        <div className={styles.text}>
            You are purchasing <span className={styles.red}>Lumburr</span> for{" "}
            <span className={styles.dark}>0,0008 ETH</span>
        </div>
    </div>
);

const Complete = ({}) => (
    <div className={cn(styles.centered)}>
        <div className={cn(styles.icon, styles.success)}>
            <Icon name="check" size="48" />
        </div>
        <h5 className={cn("h5", styles.subtitle)}>Purchased</h5>
        <div className={styles.text}>Awesome, transaction submitted.</div>
        <Link href="/">
            <a className={styles.explore}>
                View on explore
                <Icon name="external-link" size="16" />
            </a>
        </Link>
    </div>
);

const Error = ({
    setStateModal,
}: {
    setStateModal: (e: ModalStatesType) => void;
}) => (
    <div className={cn(styles.centered)}>
        <div className={cn(styles.icon, styles.error)}>
            <Icon name="alert" size="40" />
        </div>
        <h5 className={cn("h5", styles.subtitle)}>Something went wrong</h5>
        <div className={styles.text}>Sorry, transaction failed</div>
        <button
            className={cn("button-sm", styles.retry)}
            onClick={() => setStateModal("confirm")}
        >
            Try again
        </button>
    </div>
);

const ModalPurchase = ({
    visibleModal,
    setVisibleModal,
}: ModalPurchaseProps) => {
    const [stateModal, setStateModal] = useState<ModalStatesType>("confirm");
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
        >
            <div className={styles.wrapper}>
                {
                    {
                        confirm: <Confirm setStateModal={handleStateModal} />,
                        waiting: <Waiting />,
                        complete: <Complete />,
                        error: <Error setStateModal={handleStateModal} />,
                    }[stateModal]
                }
            </div>
        </Modal>
    );
};

export default ModalPurchase;
