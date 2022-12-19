import { gql } from "graphql-tag";
export type Product = {
  id: string;
  imgUrl: string;
  price: number;
  title: string;
  description: string;
  createdAt: string;
};
export type Products = {
  products: Product[];
};

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    id
    imgUrl
    price
    title
    description
    createdAt
  }
`;
export const GET_PRODUCT = gql`
  query GET_PRODUCT($id: string) {
    id
    imgUrl
    price
    title
    description
    createdAt
  }
`;
export default GET_PRODUCTS;
