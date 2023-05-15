import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
function ProductFeed() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    // <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
    <div className="card" style={{ width: "18rem" }}>
      {products.slice(0, 3).map((element) => (
        <Product
          key={element.id}
          title={element.title}
          price={element.price}
          description={element.description}
          category={element.category}
          image={element.image}
        />
      ))}

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
