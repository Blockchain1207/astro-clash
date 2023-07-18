import { useState } from "react";
import styles from "./CardDetails.module.sass";
import cn from "classnames";
import Preview from "../../Details/Preview";
import Description from "../../Details/Description";
import Icon from "../../Icon";
import TabDescription from "./TabDescription";
import TabDetails from "./TabDetails";
import History from "../../Details/History";
import ModalShareProfile from "../../ModalShareProfile";
import ModalPurchase from "../../ModalPurchase";

import { history } from "../../../mocks/characterDetails";

const imagePreview = {
    src: "/images/content/characters/image-3.png",
    width: 700,
    height: 700,
    alt: "Character",
};

const navigation: Array<string> = ["Description", "Details", "History"];

type CardDetailsProps = {};

const CardDetails = ({}: CardDetailsProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [visibleShare, setVisibleShare] = useState<boolean>(false);
    const [visiblePurchase, setVisiblePurchase] = useState<boolean>(false);

    return (
        <div className={cn("section-main", styles.section)}>
            <div className={cn("container-xl", styles.container)}>
                <div className={styles.row}>
                    <Preview
                        className={styles.preview}
                        image={imagePreview}
                        background="#E5DCF3"
                        url="/marketplace"
                    />
                    <div className={styles.wrap}>
                        <Description
                            className={styles.description}
                            title="Lumburr"
                            code="078982"
                            crypto="0.08 ETH"
                            price={221.38}
                        />
                        <div className={styles.control}>
                            <button
                                className={cn("button", styles.button)}
                                onClick={() => setVisiblePurchase(true)}
                            >
                                Purchase now
                            </button>
                            <ModalPurchase
                                visibleModal={visiblePurchase}
                                setVisibleModal={() =>
                                    setVisiblePurchase(false)
                                }
                            />
                            <button
                                className={styles.share}
                                onClick={() => setVisibleShare(true)}
                            >
                                <Icon name="share" />
                            </button>
                            <ModalShareProfile
                                visibleModal={visibleShare}
                                setVisibleModal={() => setVisibleShare(false)}
                            />
                        </div>
                        <div className={styles.nav}>
                            {navigation.map((link, index) => (
                                <button
                                    className={cn(styles.link, {
                                        [styles.active]: index === activeIndex,
                                    })}
                                    onClick={() => setActiveIndex(index)}
                                    key={index}
                                >
                                    {link}
                                </button>
                            ))}
                        </div>
                        <div className={styles.group}>
                            {activeIndex === 0 && <TabDescription />}
                            {activeIndex === 1 && <TabDetails />}
                            {activeIndex === 2 && <History items={history} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
