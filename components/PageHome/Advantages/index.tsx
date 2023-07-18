import styles from "./Advantages.module.sass";
import cn from "classnames";
import Image from "../../Image";

type AdvantagesProps = {};

const Advantages = ({}: AdvantagesProps) => (
    <div className={styles.section}>
        <div className={cn("container-md container-window", styles.container)}>
            <div className={styles.wrap}>
                <h2 className={cn("h2", styles.title)}>
                    Astrowars Play-to-Earn features & benefits
                </h2>
                <ul className={styles.list}>
                    <li>Et perspiciatis fugit ratione.</li>
                    <li>Iste animi consectetur dicta dolorem delectus.</li>
                    <li>Et perspiciatis fugit ratione.</li>
                    <li>Dolores nesciunt non omnis nisi consequuntu</li>
                    <li>Et perspiciatis fugit ratione.</li>
                </ul>
            </div>
            <div className={styles.preview}>
                <Image
                    src="/images/content/drone.png"
                    width="675"
                    height="523"
                    alt="Drone"
                />
            </div>
        </div>
    </div>
);

export default Advantages;
