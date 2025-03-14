import { Category } from "./Category";
type AssetMedia = {
    url: string;
}
type AssetThumbnail = {
    url: string;
}

export interface Asset {
    title: string;
    description: string;
    thumbnail: AssetThumbnail;
    url: string;
    categories: Category[];
    media: AssetMedia[];
}

export type { AssetMedia, AssetThumbnail };