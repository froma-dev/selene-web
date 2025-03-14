import { GraphQLClient, gql } from "graphql-request";

import { Asset, AssetThumbnail, AssetMedia } from "src/types/Asset";
import { GRAPHQL_API_BASE_URL } from "@src/config";
import { Category } from "@src/types/Category";
import { type LinkData, type LinkIcon, type LinkType } from "@components/Link";

const gqlClient = new GraphQLClient(GRAPHQL_API_BASE_URL);

const QUERY_WORKS = gql`
  query {
    works {
      title
      description
      thumbnail {
        url
      }
      url
      categories {
        name
      }
      media {
        url
      }
    }
  }
`;
const QUERY_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

const QUERY_CONTACT_LINKS = gql`
  query {
    contactLinks {
      name
      href
      icon
      type
    }
  }
`;
interface APIPortfolio {
  works: {
    title: string;
    description: string;
    thumbnail: AssetThumbnail;
    url: string;
    categories: Category[];
    media: AssetMedia[];
  }[];
}

interface APICategories {
  categories: {
    name: Category;
  }[];
}

interface APIContactLinks {
  contactLinks: {
    name: string;
    href: string;
    icon: LinkIcon;
    type: LinkType;
  }[];
}
const getPortfolio = async () => {
  const data = await gqlClient.request<APIPortfolio>(QUERY_WORKS);
  const transformedData = transformGetPortfolio(data);

  return transformedData;
};

const transformGetPortfolio = (data: APIPortfolio): Asset[] => {
  const { works } = data;
  return works;
};

const getCategories = async () => {
  const data = await gqlClient.request<APICategories>(QUERY_CATEGORIES);
  const transformedData = transformGetCategories(data);

  return transformedData;
};

const transformGetCategories = (data: APICategories): Category[] => {
  const { categories } = data;

  return categories.map((category) => category.name);
};

const getContactLinks = async () => {
  const data = await Promise.resolve([
    {
      name: "YouTube",
      href: "https://www.youtube.com/@selenecreates",
      icon: "youtube",
      type: "social",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@selene.creates",
      icon: "tiktok",
      type: "social",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/selenefer/",
      icon: "linkedin",
      type: "connect",
    },
    {
      name: "Behance",
      href: "https://www.behance.net/selenefer",
      icon: "behance",
      type: "connect",
    },
    {
      name: "Dribbble",
      href: "https://dribbble.com/SeleneF",
      icon: "dribbble",
      type: "connect",
    },
  ]);

  return data as LinkData[];

  /* const data = await gqlClient.request<APIContactLinks>(QUERY_CONTACT_LINKS);
  const transformedData = transformGetContactLinks(data);

  return transformedData; */
};

const transformGetContactLinks = (data: APIContactLinks): LinkData[] => {
  const { contactLinks } = data;

  return contactLinks.map((link) => ({
    name: link.name,
    href: link.href,
    icon: link.icon,
    type: link.type,
  }));
};

export default { getPortfolio, getCategories, getContactLinks };
