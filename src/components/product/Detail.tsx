import { Product } from "../../graphql/products";

const ProductDetail = ({
  item: { id, imgUrl, price, title, description, createdAt },
}: {
  item: Product;
}) => {
  console.log(id, imgUrl, price, title, description, createdAt);
  return (
    <li className="product-detail">
      <p className="product-detail__title">{title}</p>
      <img className="product-detail__image" src={imgUrl} />
      <p className="product-detail__description">{description}</p>
      <span className="product-detail__price">{price}</span>
      <span className="product-detail__rating">{createdAt}</span>
    </li>
  );
};
export default ProductDetail;
