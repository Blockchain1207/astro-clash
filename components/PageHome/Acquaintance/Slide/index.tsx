import { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Slide.module.sass";
import Modal from "../Modal";
import Character from "../Character";
import Details from "../Details";

type SlideProps = {
    className?: string;
    value: any;
};

const Slide = ({ className, value }: SlideProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    return (
        <div className={cn(styles.slide, className)}>
            <div onClick={() => setVisibleModal(true)}>
                <Details value={value} className={styles.details} />
                <Character value={value.video} className={styles.character} />
            </div>

            <Modal
                value={value}
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            />
        </div>
    );
};

export default Slide;
