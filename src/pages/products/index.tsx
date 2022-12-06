import { fetcher, Querykeys } from "../../queryClient";
import ProductItem from "../../components/product/ProductItem";
import { useQuery } from "react-query";
import { Product } from "../../types";

const ProductList = () => {
  const { data } = useQuery<Product[]>(Querykeys.PRODUCT, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  return (
    <div>
      <ul className="products">
        {data?.map((product: Product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
