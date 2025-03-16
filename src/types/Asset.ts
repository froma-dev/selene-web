
export type Asset = {
    title: string;
    description: string;
    thumbnail: string;
    url: string;
    categories: string[];
    media: string[];
    id: string;
};

export type YoutubeVideoAssetProps = Asset & {
    watchUrl: string;
};