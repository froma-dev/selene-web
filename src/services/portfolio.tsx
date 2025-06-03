import { GraphQLClient, gql } from "graphql-request";

import { Asset } from "src/types/Asset";
import { GRAPHQL_API_BASE_URL } from "@src/config";
import { Category, CategoryWithId } from "@src/types/Category";
import { type LinkData } from "@components/Link";

const gqlClient = new GraphQLClient(GRAPHQL_API_BASE_URL);

const QUERY_WORKS = gql`
  query {
    works {
      documentId
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
      slug
      name
    }
  }
`;

/* const QUERY_CONTACT_LINKS = gql`
  query {
    contactLinks {
      documentId
      href
      icon
      name
      type_link {
        name
      }
    }
  }
`; */
interface APIPortfolio {
  works: {
    title: string;
    description: string;
    thumbnail: { url: string }[];
    url: string;
    categories: { name: Category }[];
    media: { url: string }[];
    documentId: string;
  }[];
}

interface APICategories {
  categories: {
    name: Category;
    slug: string;
  }[];
}

/* interface APIContactLinks {
  contactLinks: {
    name: string;
    href: string;
    icon: LinkIcon;
    type_link: { name: LinkType; documentId: string };
  }[];
} */
const getPortfolio = async () => {
  const portfolioData = await gqlClient.request<APIPortfolio>(QUERY_WORKS);
  const transformedPortfolioData = transformGetPortfolio(portfolioData);

  return transformedPortfolioData;
};

const transformGetPortfolio = (data: APIPortfolio): Asset[] => {
  const { works } = data;

  const transformedData = works.map((work) => ({
    ...work,
    id: work.documentId,
    media: transformMedia(work.media),
    categories: transformFlatCategories(work.categories),
    thumbnail: transformThumbnail(work.thumbnail),
  }));

  return transformedData;
};

const transformMedia = (media: { url: string }[]): string[] => {
  return media.map((media) => media.url);
};

const transformFlatCategories = (
  categories: { name: Category }[]
): Category[] => {
  return categories.map((category) => category.name);
};

const transformThumbnail = (thumbnail: { url: string }[]): string => {
  return thumbnail[0].url;
};

const getCategories = async () => {
  const data = await gqlClient.request<APICategories>(QUERY_CATEGORIES);
  const transformedData = transformGetCategories(data);

  return transformedData;
};

const transformGetCategories = (data: APICategories): CategoryWithId[] => {
  const { categories } = data;

  return categories.map((category) => ({
    name: category.name,
    id: category.slug,
  }));
};

const getContactLinks = () => {
  /* const data = await gqlClient.request<APIContactLinks>(QUERY_CONTACT_LINKS);
  const transformedData = transformGetContactLinks(data); */
  return [
    {
      name: "Selene Creates",
      href: "https://www.youtube.com/@selenecreates",
      icon: "youtube",
      type: "social",
    },
    {
      name: "Mook Macramé",
      href: "https://www.youtube.com/mookmacrame",
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
    {
      name: "Adobe Stock",
      href: "https://stock.adobe.com/es/contributor/211116694/Selene",
      icon: "adobe",
      type: "connect",
    },
  ] as LinkData[];
};
/* 
const transformGetContactLinks = (data: APIContactLinks): LinkData[] => {
  const { contactLinks } = data;

  return contactLinks.map((link) => ({
    name: link.name,
    href: link.href,
    icon: link.icon,
    type: link.type_link.name,
  }));
}; */

export default { getPortfolio, getCategories, getContactLinks };
