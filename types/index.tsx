export type ImageType = {
    src: string;
    width: number;
    height: number;
    alt: string;
};

export type StatusType = {
    title: string;
    color: string;
};

export type ItemsType = {
    title: string;
    code: string;
    crypto: string;
    price: number;
    status?: StatusType[];
    image: ImageType;
    background?: string;
    url: string;
    level?: number;
    location?: string;
    coordinates?: string;
    avatars?: Array<string>;
};

export type ItemsSlideType = {
    title: string;
    image: ImageType;
    location: string;
    crypto: string;
    price: number;
};

export type DropdownItemType = {
    title: string;
    type: string;
    price?: string;
    image: string;
    background?: string;
};

export type RangeType = {
    label: string;
    preview?: string;
    icon?: string;
    color?: string;
    tooltip?: string;
    value: number;
    step?: number;
    min?: number;
    max?: number;
};

export type EmotionType = {
    title: string;
    preview: string;
};

export type InfoColumnsType = {
    title: string;
    content: string;
    image: string;
};
