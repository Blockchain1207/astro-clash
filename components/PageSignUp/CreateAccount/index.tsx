import { useState } from "react";
import cn from "classnames";
import styles from "./CreateAccount.module.sass";
import Icon from "../../Icon";
import Link from "next/link";
import Input from "../../Input";

type CreateAccountProps = {
    setStatePage: (state: string) => any;
};

const CreateAccount = ({ setStatePage }: CreateAccountProps) => {
    const [username, setUsername] = useState<string>("");

    return (
        <>
            <h2 className={cn("h2", styles.title)}>Create account</h2>
            <div className={styles.note}>
                Accusamus ex et architecto officiis animi quos minus id quos.
            </div>
            <div className={styles.body}>
                <div className={styles.input}>
                    <Icon name="profile" />
                    <Input
                        placeholder="@username"
                        value={username}
                        onChange={setUsername}
                    />
                </div>
                <button
                    className={cn("button", styles.button)}
                    onClick={() => setStatePage("wallet")}
                >
                    Continue
                </button>
            </div>
            <div className={styles.footer}>
                By clicking continue you agree to the&nbsp;
                <Link href="/">
                    <a>Terms of use</a>
                </Link>
                &nbsp;an&nbsp;
                <Link href="/">
                    <a>Privacy policy</a>
                </Link>
            </div>
        </>
    );
};

export default CreateAccount;
