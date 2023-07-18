import styles from "./TabDescription.module.sass";
import cn from "classnames";
import Icon from "../../../Icon";
import Content from "../../../Content";
import Parameters from "../../../Details/Parameters";
import Stats from "../../../Details/Stats";

import {
    parametersDescription,
    stats,
    property,
} from "../../../../mocks/characterDetails";

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
                <ul>
                    <li>Et perspiciatis fugit ratione.</li>
                    <li>Iste animi consectetur dicta dolorem delectus.</li>
                    <li>Et perspiciatis fugit ratione.</li>
                    <li>Dolores nesciunt non omnis nisi consequuntu</li>
                    <li>Et perspiciatis fugit ratione.</li>
                </ul>
            </Content>
        </div>
        <div className={styles.item}>
            <Parameters
                parameters={parametersDescription}
                className={styles.parameters}
            />
        </div>
        <div className={styles.grouped}>
            <div className={cn(styles.item)}>
                <div className={styles.category}>Stats</div>
                <Stats items={stats} />
            </div>
            <div className={cn(styles.item)}>
                <div className={styles.category}>Property</div>
                <Stats items={property} />
            </div>
        </div>
        <div className={styles.item}>
            <div className={styles.category}>Weapon</div>
            <button className={styles.add}>
                <div className={styles.icon}>
                    <Icon name="add" />
                </div>
                <span>No weapon</span>
            </button>
        </div>
    </div>
);

export default Tab;
