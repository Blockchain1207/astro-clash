import styles from "./TabDescription.module.sass";
import Icon from "../../../Icon";
import Content from "../../../Content";
import Parameters from "../../../Details/Parameters";
import Stats from "../../../Details/Stats";

import {
    parametersDescription,
    specifications,
} from "../../../../mocks/itemDetails";

type TabProps = {};

const Tab = ({}: TabProps) => (
    <div className={styles.tab}>
        <div className={styles.item}>
            <Content className={styles.content} moreButton>
                <p>
                    Eius eum sunt in nulla autem voluptas facilis et magnam.
                    Provident accusamus omnis quos sunt. Illo enim consequuntur
                    ratione aperiam eum rerum. Incidunt rerum maxime voluptas ad
                    pariatur. Consequatur mollitia illum quia aut.
                </p>
            </Content>
        </div>
        <div className={styles.item}>
            <Parameters
                parameters={parametersDescription}
                className={styles.parameters}
            />
        </div>
        <div className={styles.item}>
            <div className={styles.category}>Specifications</div>
            <Stats items={specifications} />
        </div>
    </div>
);

export default Tab;
