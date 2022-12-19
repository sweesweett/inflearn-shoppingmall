import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";
const ProductItem = ({
  id,
  imgUrl,
  price,
  title,
  description,
  createdAt,
}: Product) => {
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item__title">{title}</p>
        <img className="product-item__image" src={imgUrl} />
        <span className="product-item__price">{price}</span>
        <span className="product-item__createdAt">{createdAt}</span>
      </Link>
    </li>
  );
};
export default ProductItem;
