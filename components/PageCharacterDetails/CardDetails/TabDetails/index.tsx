import styles from "./TabDetails.module.sass";
import cn from "classnames";
import Parameters from "../../../Details/Parameters";
import Views from "../../../Details/Views";

import {
    parametersDetails,
    viewLinks,
} from "../../../../mocks/characterDetails";

type TabProps = {};

const Tab = ({}: TabProps) => (
    <div className={styles.tab}>
        <div className={styles.item}>
            <Parameters
                parameters={parametersDetails}
                className={styles.details}
            />
        </div>
        <div className={styles.item}>
            <div className={styles.content}>
                <p>
                    Eius eum sunt in nulla autem voluptas facilis et magnam.
                    Provident accusamus omnis quos sunt:
                </p>
            </div>
            <Views links={viewLinks} />
        </div>
    </div>
);

export default Tab;
