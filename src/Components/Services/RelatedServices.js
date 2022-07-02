import React, { useEffect, useState } from "react";
import RelatedSingleServiceDetails from "./RelatedSingleServiceDetails";

const RelatedProduct = ({ id }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ashikurrahmans/dentistjson/main/service"
    )
      .then((response) => response.json())
      .then((pd) => setProducts(pd));
  });

  // console.log(product);
  const relatedProducts = products.filter((item) => item.id !== id);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 ">
      {relatedProducts.slice(0, 3).map((item) => {
        return (
          <RelatedSingleServiceDetails
            product={item}
            key={item.id}
          ></RelatedSingleServiceDetails>
        );
      })}
    </div>
  );
};

export default RelatedProduct;
