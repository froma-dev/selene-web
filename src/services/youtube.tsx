import { YT_API_KEY, YT_PLAYLIST_ID } from "@src/config";
import { YoutubeVideoAssetProps } from "@src/types/Asset";

interface YouTubePlaylistResponse {
  items: {
    snippet: {
      resourceId: {
        videoId: string;
      };
      title: string;
      thumbnails: {
        high?: {
          url: string;
        };
        default?: {
          url: string;
        };
        medium?: {
          url: string;
        };
      };
    };
  }[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  nextPageToken?: string;
}

const getVideosFromPlaylist = async (playlistId: string) => {
  const videosFromPlaylistResponse = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${YT_API_KEY}&maxResults=25`
  );

  if (!videosFromPlaylistResponse.ok) {
    throw new Error("Failed to fetch videos from YouTube playlist");
  }

  const videosFromPlaylistData = await videosFromPlaylistResponse.json();
  const transformedData = transformVideosFromPlaylist(videosFromPlaylistData);
  return transformedData;
};

const transformVideosFromPlaylist = (
  data: YouTubePlaylistResponse
): YoutubeVideoAssetProps[] => {
  const videos = data.items.map((item) => ({
    url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
    watchUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}&list=${YT_PLAYLIST_ID}`,
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    description: "",
    media: [],
    categories: ["video"],
    thumbnail: item.snippet.thumbnails?.high?.url ?? "",
  }));

  return videos;
};

export default { getVideosFromPlaylist };
