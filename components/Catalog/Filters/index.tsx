import { useState, useEffect } from "react";
import styles from "./Filters.module.sass";
import cn from "classnames";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Icon from "../../Icon";
import Image from "../../Image";
import Back from "../../Back";
import Form from "../../Form";
import List from "../List";
import DropdownItem from "../../DropdownItem";
import RangeSlider from "../../RangeSlider";
import Checkbox from "../../Checkbox";
import Emotion from "./Emotion";
import { filterCharacter } from "../../../mocks/filter";
import { DropdownItemType, RangeType, EmotionType } from "../../../types";

import { characters } from "../../../mocks/characters";

type FiltersProps = {
    className?: string;
};

const Filters = ({ className }: FiltersProps) => {
    const [search, setSearch] = useState("");
    const [visibleFilters, setVisibleFilters] = useState<boolean>(false);
    const [nft, setNft] = useState<DropdownItemType>(
        filterCharacter.dropdownNFT[0]
    );
    const [location, setLocation] = useState<DropdownItemType>(
        filterCharacter.dropdownLocation[0]
    );
    const [ears, setEars] = useState<DropdownItemType>(
        filterCharacter.dropdownLocation[0]
    );
    const [antennas, setAntennas] = useState<DropdownItemType>(
        filterCharacter.dropdownLocation[0]
    );
    const [tail, setTail] = useState<DropdownItemType>(
        filterCharacter.dropdownLocation[0]
    );
    const [reuse, setReuse] = useState<boolean>(true);
    const [waterproof, setWaterproof] = useState<boolean>(false);
    const [resistant, setResistant] = useState<boolean>(true);
    const [level, setLevel] = useState<RangeType>(filterCharacter.rangeLevel);
    const [health, setHealth] = useState<RangeType>(
        filterCharacter.rangeHealth
    );
    const [residents, setResidents] = useState<RangeType>(
        filterCharacter.rangeResidents
    );
    const [soldier, setSoldier] = useState<RangeType>(
        filterCharacter.rangeSoldier
    );
    const [emotion, setEmotion] = useState<EmotionType>(
        filterCharacter.radioEmotion[0]
    );

    useEffect(() =>
        visibleFilters ? disablePageScroll() : enablePageScroll()
    );

    const handleSubmit = () => {
        alert();
    };

    return (
        <>
            <div className={cn(styles.filters, className)}>
                <button
                    className={cn("button-square-stroke", styles.button)}
                    onClick={() => setVisibleFilters(!visibleFilters)}
                >
                    <Icon name="filters" />
                </button>
                <div
                    className={cn(styles.wrapper, {
                        [styles.active]: visibleFilters,
                    })}
                    data-scroll-lock-scrollable
                >
                    <Back
                        className={styles.back}
                        onAction={() => setVisibleFilters(!visibleFilters)}
                        tooltip="Close"
                    />
                    <div className={styles.head}>
                        <div className={cn("h2", styles.title)}>
                            Advanced filter
                        </div>
                        <button
                            className={cn(
                                "button-stroke button-sm",
                                styles.button
                            )}
                        >
                            Reset
                        </button>
                    </div>
                    <Form
                        className={styles.form}
                        classFormInput={styles.input}
                        value={search}
                        setValue={setSearch}
                        onSubmit={() => handleSubmit()}
                        placeholder="Search character, planet, item, bundle"
                        type="text"
                        name="search"
                        icon="search"
                        big
                    />
                    <div className={styles.container_filters}>
                        <div className={styles.container}>
                            <div className={styles.group}>
                                <DropdownItem
                                    label="NFTs"
                                    className={styles.item}
                                    value={nft}
                                    options={filterCharacter.dropdownNFT}
                                    setValue={setNft}
                                />
                                <DropdownItem
                                    label="NFTs"
                                    className={styles.item}
                                    value={location}
                                    options={filterCharacter.dropdownLocation}
                                    setValue={setLocation}
                                />
                            </div>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.subtitle}>Stats</div>
                            <div className={styles.group}>
                                <RangeSlider
                                    className={styles.item}
                                    values={level}
                                    setValue={setLevel}
                                />
                                <RangeSlider
                                    className={styles.item}
                                    values={health}
                                    setValue={setHealth}
                                />
                            </div>
                            <div className={styles.group}>
                                <RangeSlider
                                    className={styles.item}
                                    values={residents}
                                    setValue={setResidents}
                                />
                                <RangeSlider
                                    className={styles.item}
                                    values={soldier}
                                    setValue={setSoldier}
                                />
                            </div>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.subtitle}>Property</div>
                            <div className={cn(styles.group, styles.triple)}>
                                <DropdownItem
                                    label="Ears"
                                    className={styles.item}
                                    value={ears}
                                    options={filterCharacter.dropdownEars}
                                    setValue={setEars}
                                />
                                <DropdownItem
                                    label="Antennas"
                                    className={styles.item}
                                    value={antennas}
                                    options={filterCharacter.dropdownAntennas}
                                    setValue={setAntennas}
                                />
                                <DropdownItem
                                    label="Tail"
                                    className={styles.item}
                                    value={tail}
                                    options={filterCharacter.dropdownTail}
                                    setValue={setTail}
                                />
                            </div>
                            <div
                                className={cn(
                                    styles.group,
                                    styles.triple,
                                    styles.checkbox
                                )}
                            >
                                <Checkbox
                                    className={styles.item}
                                    label="Reuse"
                                    value={reuse}
                                    tooltip="Info Reuse"
                                    setValue={setReuse}
                                />
                                <Checkbox
                                    className={styles.item}
                                    label="Waterproof"
                                    value={waterproof}
                                    tooltip="Info Waterproof"
                                    setValue={setWaterproof}
                                />
                                <Checkbox
                                    className={styles.item}
                                    label="Fire resistant"
                                    value={resistant}
                                    tooltip="Info Fire resistant"
                                    setValue={setResistant}
                                />
                            </div>
                            <div className={styles.group}>
                                <Emotion
                                    options={filterCharacter.radioEmotion}
                                    value={emotion}
                                    setValue={setEmotion}
                                />
                            </div>
                        </div>
                    </div>

                    <button className={cn("button", styles.show_results)}>
                        Show results
                    </button>

                    <div className={styles.results}>
                        <div className={cn("h2", styles.title)}>
                            0 results found
                        </div>
                        <div className={styles.empty_result}>
                            <Image
                                src="/images/content/search.png"
                                width={384}
                                height={384}
                                alt="No result"
                            />
                            <div className={cn(styles.note, "title")}>
                                It seems we can’t find any results based on your
                                search.
                            </div>
                            <button
                                className={cn("button-stroke", styles.button)}
                            >
                                <Icon name="arrow-left" size="20" />
                                <span>Back</span>
                            </button>
                        </div>
                        <List items={characters} col2 />
                    </div>
                </div>
            </div>
            <div
                className={cn(styles.overlay, {
                    [styles.active]: visibleFilters,
                })}
                onClick={() => setVisibleFilters(!visibleFilters)}
            ></div>
        </>
    );
};

export default Filters;
