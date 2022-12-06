import { Product } from "../../types";

const ProductDetail = ({
  item: {
    title,
    price,
    description,
    category,
    image,
    rating: { rate },
  },
}: {
  item: Product;
}) => {
  return (
    <li className="product-detail">
      <p className="product-detail__category">{category}</p>
      <p className="product-detail__title">{title}</p>

      <img className="product-detail__image" src={image} />
      <p className="product-detail__description">{description}</p>
      <span className="product-detail__price">{price}</span>
      <span className="product-detail__rating">{rate}</span>
    </li>
  );
};
export default ProductDetail;
