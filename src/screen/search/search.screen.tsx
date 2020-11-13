import React from "react";
import { Card } from "../../component";
import State from "../../controller/search/state";
import "./search.screen.css";

const SearchScreen = ({
  state,
  productAddHandler,
}: {
  state: State;
  productAddHandler(id: number): void;
}) => {
  console.log(state);
  return (
    <>
      <aside className="Search-screen-aside">
        <div className="Search-screen-box"></div>
        <div className="Search-screen-box"></div>
        <div className="Search-screen-box"></div>
        <div className="Search-screen-box"></div>
      </aside>
      <div className="Search-screen-section">
        {state?.products.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              brand={product.brand}
              description={product.description}
              image={product.image}
              price={product.price}
              referencePrice={product.referencePrice}
              addHandler={productAddHandler}
            />
          );
        })}
      </div>
    </>
  );
};

export default SearchScreen;
