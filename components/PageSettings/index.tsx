import { useState } from "react";
import cn from "classnames";
import styles from "./PageSettings.module.sass";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Field from "../Input/Field";
import Theme from "../Theme";
import JoinCommunity from "../JoinCommunity";

type PageSettingsProps = {
    className?: string;
};

const PageSettings = ({ className }: PageSettingsProps) => {
    const [email, setEmail] = useState<string>("info@ui8.net");
    const [checkListings, setCheckListings] = useState<boolean>(true);
    const [checkPurchase, setCheckPurchase] = useState<boolean>(true);
    const [checkNotifications, setCheckNotifications] = useState<boolean>(true);
    const [checkIngame, setCheckIngame] = useState<boolean>(true);

    return (
        <>
            <div className={cn("section-main", styles.section)}>
                <div className={cn("container-xxs", styles.container)}>
                    <h1 className={cn("h1", styles.title)}>Settings</h1>

                    <Field label="Email address" className={styles.field} large>
                        <Input
                            className={styles.username_input}
                            value={email}
                            onChange={setEmail}
                            placeholder="Email address"
                            arobase
                        />
                    </Field>

                    <Field label="Email address" className={styles.field} large>
                        <Theme className={styles.theme} large />
                    </Field>

                    <Field label="Notifications" className={styles.field} large>
                        <div className={styles.notify}>
                            <Checkbox
                                value={checkListings}
                                setValue={setCheckListings}
                                className={styles.checkbox}
                                large
                            />
                            <div className={styles.details}>
                                <div className={styles.notify_title}>
                                    New item listings
                                </div>
                                <div className={styles.info}>
                                    Est architecto quasi exercitationem et non.
                                    Qui qui aliquid tempore perspiciatis ea vero
                                    ut. Repellat cupiditate hic autem. Non ipsam
                                    sunt odit. Qui voluptates maiores est.
                                </div>
                            </div>
                        </div>

                        <div className={styles.notify}>
                            <Checkbox
                                value={checkPurchase}
                                setValue={setCheckPurchase}
                                className={styles.checkbox}
                                large
                            />
                            <div className={styles.details}>
                                <div className={styles.notify_title}>
                                    Purchase notifications
                                </div>
                                <div className={styles.info}>
                                    Est architecto quasi exercitationem et non.
                                    Qui qui aliquid tempore perspiciatis ea vero
                                    ut. Repellat cupiditate hic autem. Non ipsam
                                    sunt odit. Qui voluptates maiores est.
                                </div>
                            </div>
                        </div>

                        <div className={styles.notify}>
                            <Checkbox
                                value={checkNotifications}
                                setValue={setCheckNotifications}
                                className={styles.checkbox}
                                large
                            />
                            <div className={styles.details}>
                                <div className={styles.notify_title}>
                                    Notifications
                                </div>
                                <div className={styles.info}>
                                    Est architecto quasi exercitationem et non.
                                    Qui qui aliquid tempore perspiciatis ea vero
                                    ut. Repellat cupiditate hic autem. Non ipsam
                                    sunt odit. Qui voluptates maiores est.
                                </div>
                            </div>
                        </div>

                        <div className={styles.notify}>
                            <Checkbox
                                value={checkIngame}
                                setValue={setCheckIngame}
                                className={styles.checkbox}
                                large
                            />
                            <div className={styles.details}>
                                <div className={styles.notify_title}>
                                    Ingame notifications
                                </div>
                                <div className={styles.info}>
                                    Est architecto quasi exercitationem et non.
                                    Qui qui aliquid tempore perspiciatis ea vero
                                    ut. Repellat cupiditate hic autem. Non ipsam
                                    sunt odit. Qui voluptates maiores est.
                                </div>
                            </div>
                        </div>

                        <div className={styles.notify}>
                            <Checkbox
                                value={checkIngame}
                                setValue={setCheckIngame}
                                className={styles.checkbox}
                                large
                            />
                            <div className={styles.details}>
                                <div className={styles.notify_title}>
                                    Ingame notifications
                                </div>
                                <div className={styles.info}>
                                    Est architecto quasi exercitationem et non.
                                    Qui qui aliquid tempore perspiciatis ea vero
                                    ut. Repellat cupiditate hic autem. Non ipsam
                                    sunt odit. Qui voluptates maiores est.
                                </div>
                            </div>
                        </div>

                        <div className={styles.notify}>
                            <Checkbox
                                value={checkIngame}
                                setValue={setCheckIngame}
                                className={styles.checkbox}
                                large
                            />
                            <div className={styles.details}>
                                <div className={styles.notify_title}>
                                    Ingame notifications
                                </div>
                                <div className={styles.info}>
                                    Est architecto quasi exercitationem et non.
                                    Qui qui aliquid tempore perspiciatis ea vero
                                    ut. Repellat cupiditate hic autem. Non ipsam
                                    sunt odit. Qui voluptates maiores est.
                                </div>
                            </div>
                        </div>
                    </Field>

                    <button className={cn("button", styles.save)}>
                        Save settings
                    </button>
                </div>
            </div>
            <JoinCommunity />
        </>
    );
};

export default PageSettings;
