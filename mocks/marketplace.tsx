const marketplaceCounter: number = 2048;

type MarketplaceType = {
    title: string;
    image: string;
    value: number;
    price?: number;
    color: string;
};

const marketplace: MarketplaceType[] = [
    {
        title: "Total sales",
        value: 16789,
        image: "/images/content/marketplace-1.png",
        color: "#30B28C",
    },
    {
        title: "Total volume",
        value: 300.89,
        price: 833722,
        image: "/images/content/marketplace-2.png",
        color: "#9F73E6",
    },
    {
        title: "Character sold",
        value: 8321,
        image: "/images/content/marketplace-3.png",
        color: "#FDC24F",
    },
];

export { marketplaceCounter, marketplace };
