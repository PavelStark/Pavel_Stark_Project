import React, { useEffect } from "react";
import ProductsContainer from "../4_ProductsContainer";

export default function CategoryProductsContainer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ProductsContainer type="categoryProducts" />
    </div>
  );
}
