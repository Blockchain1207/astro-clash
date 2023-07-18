import { useEffect, useState, useRef } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useMediaQuery } from "react-responsive";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "../Logo";
import Icon from "../Icon";
import NavLink from "../NavLink";
import Link from "next/link";
import Notification from "./Notification";
import Wallet from "./Wallet";
import Settings from "./Settings";

import { NavigationList, settings } from "../../constants/navigation";
import { notifications } from "../../mocks/notifications";

type HeaderProps = {
    noAuth?: boolean;
};

const Header = ({ noAuth }: HeaderProps) => {
    const [visibleMobileMenu, setVisibleMobileMenu] = useState<boolean>(false);
    const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);

    const menu = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(
        () => (visibleMobileMenu ? disablePageScroll() : enablePageScroll()),
        [visibleMobileMenu]
    );

    useScrollPosition(({ currPos }) => {
        setHeaderStyle(currPos.y <= -2);
    });

    return (
        <>
            {mounted && (
                <header
                    className={cn(styles.header, {
                        [styles.visible]: headerStyle,
                        [styles.active]: visibleMobileMenu,
                    })}
                >
                    <div className={cn("container-xl", styles.container)}>
                        {isTablet && (
                            <div
                                className={cn(styles.mobile_menu, {
                                    [styles.active]: visibleMobileMenu,
                                })}
                                data-scroll-lock-scrollable
                                ref={menu}
                            >
                                {!noAuth && <Wallet wide />}
                                <nav className={styles.nav}>
                                    {NavigationList.map((link, index) => (
                                        <NavLink
                                            className={styles.link}
                                            activeClassName={styles.active}
                                            href={link.url}
                                            key={index}
                                        >
                                            {link.title}
                                        </NavLink>
                                    ))}
                                </nav>
                            </div>
                        )}

                        <div
                            className={cn(styles.menu, {
                                [styles.active]: visibleMobileMenu,
                            })}
                        >
                            <button
                                className={cn(styles.burger)}
                                onClick={() =>
                                    isTablet &&
                                    setVisibleMobileMenu(!visibleMobileMenu)
                                }
                            ></button>
                            <nav className={styles.nav}>
                                {NavigationList.map((link, index) => (
                                    <NavLink
                                        className={styles.link}
                                        activeClassName={styles.active}
                                        href={link.url}
                                        key={index}
                                    >
                                        {link.title}
                                    </NavLink>
                                ))}
                            </nav>
                        </div>

                        {!noAuth ? (
                            <div className={styles.control}>
                                <Notification
                                    className={styles.notification}
                                    items={notifications}
                                />
                                {!isTablet && (
                                    <Wallet className={styles.wallet} />
                                )}
                                <Settings
                                    className={styles.settings}
                                    items={settings}
                                />
                            </div>
                        ) : (
                            <Link href="/getting-started">
                                <a
                                    className={cn(
                                        "button-stroke button-sm",
                                        styles.button
                                    )}
                                >
                                    <Icon
                                        name="game"
                                        className={styles.icon_game}
                                    />
                                    Play now
                                </a>
                            </Link>
                        )}
                        <Logo className={styles.logo} />
                    </div>
                </header>
            )}
        </>
    );
};

export default Header;
