import { useState } from "react";
import Image from "../Image";
import styles from "./PageSignUp.module.sass";
import Back from "../Back";
import ConnectWallet from "./ConnectWallet";
import CreateAccount from "./CreateAccount";
import ErrorWallet from "./ErrorWallet";
import Tooltip from "rc-tooltip";

type ConnectWalletProps = {};

const PageSignUp = ({}: ConnectWalletProps) => {
    const [statePage, setStatePage] = useState<string>("register");

    return (
        <div className={styles.wrapper}>
            <div className={styles.banner}>
                <Image
                    src="/images/content/bg-connect.jpg"
                    layout="fill"
                    alt="banner"
                />
            </div>
            <div className={styles.body}>
                {statePage === "register" ? (
                    <Back
                        className={styles.back}
                        url="/getting-started"
                        tooltip="Back"
                    />
                ) : (
                    <Back
                        className={styles.back}
                        onAction={() => setStatePage("register")}
                        tooltip="Back"
                    />
                )}

                <div className={styles.container}>
                    {
                        {
                            register: (
                                <CreateAccount setStatePage={setStatePage} />
                            ),
                            wallet: (
                                <ConnectWallet setStatePage={setStatePage} />
                            ),
                            error: <ErrorWallet />,
                        }[statePage]
                    }
                </div>
            </div>
        </div>
    );
};

export default PageSignUp;
