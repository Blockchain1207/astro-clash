import { useState } from "react";
import styles from "./CardDetails.module.sass";
import cn from "classnames";
import Preview from "../../Details/Preview";
import Description from "../../Details/Description";
import Parameters from "../../Details/Parameters";
import Content from "../../Content";
import Stats from "../../Details/Stats";
import Views from "../../Details/Views";
import History from "../../Details/History";
import Image from "../../Image";
import ModalPurchase from "../../ModalPurchase";

import {
    parametersDetails,
    specifications,
    viewLinks,
    history,
} from "../../../mocks/bundleDetails";

const imagePreview = {
    src: "/images/content/bundles/combo-7.png",
    width: 700,
    height: 896,
    alt: "Planet",
};

type CompoundType = {
    image: string;
    color: string;
};

const compound: CompoundType[] = [
    {
        image: "/images/content/items/sword.png",
        color: "#EBE3D8",
    },
    {
        image: "/images/content/items/hp-1.png",
        color: "#CADFDB",
    },
];

type CardDetailsProps = {};

const CardDetails = ({}: CardDetailsProps) => {
    const [visiblePurchase, setVisiblePurchase] = useState<boolean>(false);

    return (
        <div className={cn("section-main", styles.section)}>
            <div className={cn("container-xl", styles.container)}>
                <Preview
                    className={styles.preview}
                    image={imagePreview}
                    background="#E7E7DE"
                    url="/marketplace"
                    share
                />
                <div className={styles.wrapper}>
                    <div className={styles.head}>
                        <Description
                            className={styles.description}
                            title="Combo 078928"
                            code="078982"
                            crypto="1.58 ETH"
                            price={2802.43}
                        />
                        <button
                            className={cn("button", styles.button)}
                            onClick={() => setVisiblePurchase(true)}
                        >
                            Purchase now
                        </button>
                        <ModalPurchase
                            visibleModal={visiblePurchase}
                            setVisibleModal={() => setVisiblePurchase(false)}
                        />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <div className={cn("title", styles.category)}>
                                Description
                            </div>
                            <Content className={styles.content} moreButton>
                                <div className={styles.info}>
                                    <p>
                                        Eius eum sunt in nulla autem voluptas
                                        facilis et magnam. Provident accusamus
                                        omnis quos sunt. Illo enim consequuntur
                                        ratione aperiam eum rerum. Incidunt
                                        rerum maxime voluptas ad pariatur.
                                        Consequatur mollitia illum quia aut.
                                    </p>
                                </div>
                                <div className={styles.wrap}>
                                    <div className={styles.label}>
                                        Item included
                                    </div>
                                    <div className={styles.compound}>
                                        {compound.map((x, index) => (
                                            <div
                                                className={styles.img}
                                                key={index}
                                                style={{
                                                    backgroundColor: x.color,
                                                }}
                                            >
                                                <Image
                                                    src={x.image}
                                                    width={102}
                                                    height={102}
                                                    alt="Item"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.list}>
                                    <ul>
                                        <li>Et perspiciatis fugit ratione.</li>
                                        <li>
                                            Iste animi consectetur dicta dolorem
                                            delectus.
                                        </li>
                                        <li>Et perspiciatis fugit ratione.</li>
                                        <li>
                                            Dolores nesciunt non omnis nisi
                                            consequuntu
                                        </li>
                                        <li>Et perspiciatis fugit ratione.</li>
                                    </ul>
                                </div>
                            </Content>
                        </div>
                        <div className={styles.col}>
                            <div className={cn("title", styles.category)}>
                                Details
                            </div>
                            <div className={styles.group}>
                                <div className={styles.item}>
                                    <Parameters
                                        className={styles.parameters}
                                        parameters={parametersDetails}
                                    />
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.label}>
                                        Specifications
                                    </div>
                                    <Stats
                                        className={styles.stats}
                                        items={specifications}
                                    />
                                </div>
                                <div className={styles.item}>
                                    <Views links={viewLinks} />
                                </div>
                                <div className={styles.item}>
                                    <History items={history} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
