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
import ModalPurchase from "../../ModalPurchase";

import {
    parametersLocation,
    parametersDetails,
    stats,
    viewLinks,
    history,
} from "../../../mocks/planetDetails";
import Link from "next/link";

const imagePreview = {
    src: "/images/content/planets/image-1.png",
    width: 800,
    height: 800,
    alt: "Planet",
};

type CardDetailsProps = {};

const CardDetails = ({}: CardDetailsProps) => {
    const [visiblePurchase, setVisiblePurchase] = useState<boolean>(false);

    return (
        <div className={cn("section-main", styles.section)}>
            <div className={cn("container-xl", styles.container)}>
                <Preview
                    className={styles.preview}
                    image={imagePreview}
                    background="radial-gradient(50% 50% at 50% 50%, #FBF5EE 0%, #EDE3D7 100%)"
                    url="/marketplace"
                    share
                />
                <div className={styles.wrapper}>
                    <div className={styles.head}>
                        <Description
                            className={styles.description}
                            title="Mars 078928"
                            code="078982"
                            crypto="3.54 ETH"
                            price={221.38}
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
                            <div className={styles.line}>
                                <Parameters parameters={parametersLocation} />
                                <Link href="/planet-location">
                                    <a
                                        className={cn(
                                            "button-stroke button-sm",
                                            styles.button
                                        )}
                                    >
                                        Get direction
                                    </a>
                                </Link>
                            </div>
                            <Content className={styles.content} moreButton>
                                <p>
                                    Eius eum sunt in nulla autem voluptas
                                    facilis et magnam. Provident accusamus omnis
                                    quos sunt. Illo enim consequuntur ratione
                                    aperiam eum rerum. Incidunt rerum maxime
                                    voluptas ad pariatur. Consequatur mollitia
                                    illum quia aut.
                                </p>
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
                                    <div className={styles.label}>Stats</div>
                                    <Stats
                                        className={styles.stats}
                                        items={stats}
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
