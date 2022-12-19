import { graphql } from "msw";
import { v4 as uuidv4 } from "uuid";
import GET_PRODUCTS, { GET_PRODUCT } from "../graphql/products";
const mock_products = Array.from({ length: 20 }).map((_, i) => ({
  id: uuidv4(),
  imgUrl: `https://placeimg.com/640/480/${i + 1}`,
  price: 50000,
  title: `임시상품${i + 1}`,
  description: `임시 상세 내용${i + 1}`,
  createdAt: new Date(1646735501883 + i * 1000 * 60 * 60 * 10).toString(),
}));
export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mock_products,
      })
    );
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    // console.log(req.variables.id);
    let idx = mock_products.findIndex((el) => el.id === req.variables.id);
    return res(ctx.data(mock_products[idx]));
  }),
];
