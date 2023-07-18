import cn from "classnames";
import styles from "./PageMarketplace.module.sass";
import Image from "../Image";
import Item from "./Item";

import { marketplaceCounter, marketplace } from "../../mocks/marketplace";
import { numberWithCommas } from "../../utils";
import Catalog from "../Catalog";
import JoinCommunity from "../JoinCommunity";

import { sortingMarket } from "../../mocks/sortingCatalog";

type MainProps = {};

const Main = ({}: MainProps) => (
    <>
        <div className={styles.main}>
            <div className="container">
                <div className={styles.wrap}>
                    <h1 className={cn("h1", styles.title)}>
                        <span>{numberWithCommas(marketplaceCounter)}</span>{" "}
                        legendary minions ready to join the clash.
                    </h1>
                    <div className={cn("h6", styles.info)}>
                        Play-to-Earn NFT Marketplace
                    </div>
                    <button className={cn("button", styles.button)}>
                        Explore now
                    </button>
                </div>
                <div className={styles.preview}>
                    <Image
                        src="/images/content/run.png"
                        width={972}
                        height={600}
                        alt="Run"
                    />
                </div>
                <div className={styles.list}>
                    {marketplace.map((x, index) => (
                        <Item className={styles.item} item={x} key={index} />
                    ))}
                </div>
            </div>
        </div>
        <Catalog value={sortingMarket} filters />
        <JoinCommunity />
    </>
);

export default Main;
