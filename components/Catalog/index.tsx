import { useState } from "react";
import cn from "classnames";
import styles from "./Catalog.module.sass";
import List from "./List";
import SortingLink from "./SortingLink";
import Filters from "./Filters";
import Form from "../Form";
import Dropdown from "../Dropdown";
import Wishlist from "./Wishlist";

import { characters } from "../../mocks/characters";
import { planets } from "../../mocks/planets";
import { items } from "../../mocks/items";
import { bundles } from "../../mocks/bundles";

const sortDropdown: Array<string> = ["All", "On sale"];

type ListProps = {
    className?: string;
    value: any[];
    filters?: boolean;
    sort?: boolean;
    crop?: boolean;
    wishlist?: boolean;
    saleItem?: boolean;
};

const Catalog = ({
    className,
    value,
    filters,
    sort,
    crop,
    wishlist,
    saleItem,
}: ListProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [dropdown, setDropdown] = useState<string>(sortDropdown[0]);
    const [search, setSearch] = useState("");

    const handleSubmit = () => alert();

    return (
        <>
            <div className={cn(styles.catalog, className)}>
                <div className={cn(styles.head)}>
                    <div className={cn("container", styles.container)}>
                        <div className={styles.nav}>
                            {value.map((x, index) => (
                                <SortingLink
                                    item={x}
                                    key={index}
                                    number={activeIndex}
                                    setNumber={setActiveIndex}
                                    index={index}
                                />
                            ))}
                        </div>
                        <div className={styles.actions}>
                            <Form
                                className={styles.form}
                                value={search}
                                setValue={setSearch}
                                onSubmit={() => handleSubmit()}
                                placeholder="Search character, planet, item..."
                                type="text"
                                name="search"
                                icon="search"
                            />
                            {filters && <Filters />}
                        </div>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={cn("container", styles.container)}>
                        {sort && (
                            <div className={styles.sort}>
                                <div className={cn("h3", styles.title)}>
                                    {value[activeIndex].title}
                                </div>
                                <Dropdown
                                    options={sortDropdown}
                                    value={dropdown}
                                    setValue={setDropdown}
                                    icon="filters"
                                />
                            </div>
                        )}

                        {wishlist ? (
                            <Wishlist value={activeIndex} />
                        ) : (
                            {
                                0: (
                                    <List
                                        items={characters}
                                        crop={crop}
                                        saleItem={saleItem}
                                    />
                                ),
                                1: (
                                    <List
                                        items={planets}
                                        crop={crop}
                                        saleItem={saleItem}
                                    />
                                ),
                                2: (
                                    <List
                                        items={items}
                                        crop={crop}
                                        saleItem={saleItem}
                                    />
                                ),
                                3: (
                                    <List
                                        items={bundles}
                                        bigPreview
                                        col2
                                        saleItem={saleItem}
                                        crop={crop}
                                    />
                                ),
                            }[activeIndex]
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Catalog;
