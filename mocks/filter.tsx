import { DropdownItemType, RangeType, EmotionType } from "../types";

const dropdownNFT: DropdownItemType[] = [
    {
        title: "Lumburr",
        type: "Character",
        image: "/images/content/category-1.png",
        background: "#D4E8DD",
    },
    {
        title: "Astronauto",
        type: "Character",
        image: "/images/content/category-2.png",
        background: "#E3D6F8",
    },
    {
        title: "Planet",
        type: "Galaxy center",
        image: "/images/content/category-3.png",
        background: "#D4E8DD",
    },
    {
        title: "Items",
        type: "Galaxy center",
        image: "/images/content/category-4.png",
        background: "#F8D478",
    },
];

const dropdownLocation: DropdownItemType[] = [
    {
        title: "Mars",
        type: "Aurora city",
        image: "/images/content/category-3.png",
    },
    {
        title: "Neptune",
        type: "Triton",
        image: "/images/content/category-3.png",
    },
    {
        title: "Uranus",
        type: "Aether",
        image: "/images/content/category-3.png",
    },
    {
        title: "Venus",
        type: "Amour",
        image: "/images/content/category-3.png",
    },
];

const dropdownEars: DropdownItemType[] = [
    {
        title: "No ears",
        type: "Fun and cute",
        image: "/images/content/emotions/icon-1.png",
        background: "#D4E8DD",
    },
    {
        title: "Big ears",
        type: "Fun and cute",
        image: "/images/content/emotions/icon-5.png",
        background: "#E3D6F8",
    },
    {
        title: "Middle ears",
        type: "Fun and cute",
        image: "/images/content/emotions/icon-3.png",
        background: "#D4E8DD",
    },
];

const dropdownAntennas: DropdownItemType[] = [
    {
        title: "Default",
        type: "Powerful",
        image: "/images/content/emotions/icon.png",
        background: "#D4E8DD",
    },
    {
        title: "Option 1",
        type: "Powerful",
        image: "/images/content/emotions/icon-1.png",
        background: "#D4E8DD",
    },
    {
        title: "Option 2",
        type: "Powerful",
        image: "/images/content/emotions/icon-5.png",
        background: "#D4E8DD",
    },
];

const dropdownTail: DropdownItemType[] = [
    {
        title: "Ball",
        type: "More balance",
        image: "/images/content/tail.png",
        background: "#D4E8DD",
    },
    {
        title: "Ball 1",
        type: "More balance",
        image: "/images/content/tail.png",
        background: "#D4E8DD",
    },
    {
        title: "Ball 2",
        type: "More balance",
        image: "/images/content/tail.png",
        background: "#D4E8DD",
    },
];

const dropdownColor: DropdownItemType[] = [
    {
        title: "Green",
        type: "Aurora city",
        image: "/images/content/emotions/icon-5.png",
        background: "#D4E8DD",
    },
    {
        title: "Purple",
        type: "Aurora city",
        image: "/images/content/emotions/icon.png",
        background: "#D4E8DD",
    },
    {
        title: "Blue",
        type: "Aurora city",
        image: "/images/content/emotions/icon-3.png",
        background: "#D4E8DD",
    },
    {
        title: "Pink",
        type: "Aurora city",
        image: "/images/content/emotions/icon-1.png",
        background: "#D4E8DD",
    },
];

const dropdownTexture: DropdownItemType[] = [
    {
        title: "Wave",
        type: "Natural",
        image: "/images/content/texture.png",
        background: "#D4E8DD",
    },
    {
        title: "Wave 1",
        type: "Natural",
        image: "/images/content/texture.png",
        background: "#D4E8DD",
    },
    {
        title: "Wave 3",
        type: "Natural",
        image: "/images/content/texture.png",
        background: "#D4E8DD",
    },
];

const dropdownWeapon: DropdownItemType[] = [
    {
        title: "Gunny",
        type: "Natural",
        image: "/images/content/items/gunny.png",
        background: "#D4E8DD",
    },
    {
        title: "Sword",
        type: "Natural",
        image: "/images/content/items/sword.png",
        background: "#E3D6F8",
    },
    {
        title: "Boomerang",
        type: "Natural",
        image: "/images/content/items/boomerang.png",
        background: "#D4E8DD",
    },
    {
        title: "Axe",
        type: "Natural",
        image: "/images/content/items/axe.png",
        background: "#F8D478",
    },
];

const rangeLevel: RangeType = {
    label: "Level",
    value: 20,
    icon: "badge",
    color: "green",
    tooltip: "Ingame level",
};

const rangeHealth: RangeType = {
    label: "Health",
    value: 80,
    icon: "heart-fill",
    color: "red",
    tooltip: "Ingame health",
};

const rangeResidents: RangeType = {
    label: "Residents",
    value: 30,
    preview: "/images/content/marketplace-1.png",
    color: "purple",
    tooltip: "Residents",
};

const rangeSoldier: RangeType = {
    label: "Soldier",
    value: 70,
    preview: "/images/content/marketplace-3.png",
    color: "azure",
    tooltip: "Soldier",
};

const radioEmotion: EmotionType[] = [
    {
        title: "Happy",
        preview: "/images/content/emotions/icon.png",
    },
    {
        title: "Angry",
        preview: "/images/content/emotions/icon-1.png",
    },
    {
        title: "Dizzy",
        preview: "/images/content/emotions/icon-2.png",
    },
    {
        title: "Sleepy",
        preview: "/images/content/emotions/icon-3.png",
    },
    {
        title: "Sad",
        preview: "/images/content/emotions/icon-4.png",
    },
    {
        title: "Cool",
        preview: "/images/content/emotions/icon-5.png",
    },
];

export const filterCharacter = {
    dropdownNFT,
    dropdownLocation,
    dropdownEars,
    dropdownAntennas,
    dropdownTail,
    dropdownColor,
    dropdownTexture,
    dropdownWeapon,
    rangeLevel,
    rangeHealth,
    rangeResidents,
    rangeSoldier,
    radioEmotion,
};
