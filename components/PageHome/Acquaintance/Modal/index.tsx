import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import styles from "./Modal.module.sass";
import Image from "../../../Image";
import Details from "../Details";
import Character from "../Character";
import Icon from "../../../Icon";
import Back from "../../../Back";
import Floor from "../Floor";

type ModalProps = {
    value: any;
    visible: boolean;
    onClose?: (
        event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => void;
};

const Modal = ({ value, visible, onClose }: ModalProps) => {
    const [test, setTest] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [stateModal, setStateModal] = useState<boolean>(visible);
    const ref = useRef(null);

    const escFunc = useCallback(
        (e) => e.keyCode === 27 && onClose && onClose(e),
        [onClose]
    );

    useEffect(() => {
        document.addEventListener("keydown", escFunc, false);

        return () => document.removeEventListener("keydown", escFunc, false);
    }, [escFunc]);

    useEffect(() => setLoaded(true), []);

    useEffect(
        () => (visible ? disablePageScroll() : enablePageScroll()),
        [visible]
    );

    useEffect(() => setStateModal(visible), [visible]);
    return (
        <>
            {loaded &&
                createPortal(
                    <CSSTransition
                        in={stateModal}
                        nodeRef={ref}
                        timeout={100}
                        classNames={{
                            exitDone: styles.loaded,
                        }}
                        onEnter={() => setStateModal(false)}
                        mountOnEnter
                        unmountOnExit={!visible}
                    >
                        <div
                            className={cn(styles.container, {
                                [styles.visible]: visible,
                            })}
                            ref={ref}
                            data-scroll-lock-scrollable
                            data-scroll-lock-fill-gap
                        >
                            <div className={cn("container-xl", styles.wrapper)}>
                                <div className={styles.description}>
                                    <div className={styles.content}>
                                        <Details
                                            value={value}
                                            className={styles.details}
                                            forModal
                                        />
                                        <div className={styles.text}>
                                            {value.text}
                                        </div>
                                    </div>

                                    <button
                                        className={cn(
                                            "button-stroke button-sm",
                                            styles.next
                                        )}
                                    >
                                        <span>Next</span>
                                        <Icon name="arrow-right" size={16} />
                                    </button>
                                </div>

                                <div className={styles.char_container}>
                                    <Character
                                        value={value.video}
                                        className={styles.character}
                                        forModal
                                    />
                                    <Floor className={styles.floor} />
                                </div>
                                <Back
                                    onAction={onClose}
                                    tooltip="Back"
                                    placementTooltip="left"
                                    className={styles.close}
                                />
                            </div>
                        </div>
                    </CSSTransition>,
                    document.body
                )}
        </>
    );
};

export default Modal;
