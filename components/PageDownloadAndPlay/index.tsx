import React from "react";
import cn from "classnames";
import styles from "./PageDownloadAndPlay.module.sass";
import Main from "./Main";
import InfoColumns from "../InfoColumns";
import JoinCommunity from "../JoinCommunity";
import { items } from "../../constants/infoColumns";

type DownloadAndPlayProps = {};

const DownloadAndPlay = ({}: DownloadAndPlayProps) => {
    return (
        <div className={styles.wrapper}>
            <Main />
            <InfoColumns
                title="Explore the game"
                items={items}
                className={styles.columns}
            />
            <JoinCommunity />
        </div>
    );
};

export default DownloadAndPlay;
