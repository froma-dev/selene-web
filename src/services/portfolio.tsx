import { GraphQLClient, gql } from "graphql-request";

import { Asset, AssetThumbnail, AssetMedia } from "src/types/Asset";
import { GRAPHQL_API_BASE_URL } from "@src/config";
import { Category } from "@src/types/Category";

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

export interface APIPortfolio {
  works: {
    title: string;
    description: string;
    thumbnail: AssetThumbnail;
    url: string;
    categories: Category[];
    media: AssetMedia[];
  }[];
}

export interface APICategories {
  categories: {
    name: Category;
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

export default { getPortfolio, getCategories };
