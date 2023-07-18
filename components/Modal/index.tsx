import { useState, useEffect, useCallback, useRef } from "react";
import cn from "classnames";
import styles from "./Modal.module.sass";
import { createPortal } from "react-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { CSSTransition } from "react-transition-group";

import Icon from "../Icon";

type ModalProps = {
    className?: string;
    children: React.ReactNode;
    visible: boolean;
    onClose?: (
        event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => void;
    blink?: boolean;
    setBlink?: (e: boolean) => void;
    size?: "small" | "medium" | "large" | "xlarge";
};

const Modal = ({
    className,
    children,
    visible,
    onClose,
    blink,
    setBlink,
    size = "small",
}: ModalProps) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [stateModal, setStateModal] = useState<boolean>(blink || visible);
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

    useEffect(() => setStateModal(blink || visible), [blink, visible]);

    return (
        <>
            {loaded &&
                createPortal(
                    <CSSTransition
                        in={stateModal}
                        nodeRef={ref}
                        timeout={100}
                        classNames={{
                            exit: styles.blink,
                            exitDone: styles.blink_done,
                        }}
                        className={cn(styles.overlay, {
                            [styles.visible]: visible,
                        })}
                        onEnter={() => {
                            setStateModal(false);
                            {
                                setBlink && setBlink(false);
                            }
                        }}
                        mountOnEnter
                        unmountOnExit={!visible}
                    >
                        <div
                            ref={ref}
                            data-scroll-lock-scrollable
                            data-scroll-lock-fill-gap
                            onClick={onClose}
                        >
                            <div
                                className={cn(
                                    className,
                                    styles.modal,
                                    styles[size]
                                )}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className={styles.close}
                                    onClick={onClose}
                                >
                                    <Icon name="close" size="20" />
                                </button>
                                {children}
                            </div>
                        </div>
                    </CSSTransition>,
                    document.body
                )}
        </>
    );
};

export default Modal;
